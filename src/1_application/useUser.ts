import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useUserCallback from "./useUserCallback";
import { useNavigate } from "react-router-dom";

const useUserEvent = () => {
  const socket = GlobalSocket.getSocket();
  const navigate = useNavigate();
  const {
    onConnect,
    onChangeState,
    onUpdateDisplayName,
    onUpdateImage,
    onFollowUser,
    onUnfollowUser,
    onBlockUser,
    onUnBlockUser,
    onError,
  } = useUserCallback();
  useEffect(() => {
    socket.on("connect", () => {
      navigate("/lobby");
      console.log("User socket Connected to server");
    });

    socket.on("disconnect", () => {
      //navigate("/");
      console.log("User socket Disconnected from server");
    });

    socket.on("single:user:error", onError);
    socket.on("single:user:connect", onConnect);
    socket.on("broadcast:user:changeState", onChangeState);
    socket.on("broadcast:user:updateDisplayName", onUpdateDisplayName);
    socket.on("broadcast:user:updateImage", onUpdateImage);
    socket.on("single:user:followUser", onFollowUser);
    socket.on("single:user:unFollowUser", onUnfollowUser);
    socket.on("single:user:blockUser", onBlockUser);
    socket.on("single:user:unBlockUser", onUnBlockUser);
  }, []);
};

export default useUserEvent;
