import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useChatCallbacks from "./useChatCallback";
import useUserCallback from "./useUserCallback";

const useUserEvent = () => {
  const socket = GlobalSocket.getUserSocket();
  const { onConnect, onChangeState, onUpdateDisplayName, onUpdateImage, onFollowUser, onUnfollowUser, onBlockUser } =
    useUserCallback();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("User socket Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("User socket Disconnected from server");
    });

    //Todo: socket에서도 401이면 로그인화면으로
    socket.on("single:user:error", (data) => console.log(data));
    socket.on("single:user:connect", onConnect);
    socket.on("broadcast:user:changeState", onChangeState);
    socket.on("broadcast:user:updateDisplayName", onUpdateDisplayName);
    socket.on("broadcast:user:updateImage", onUpdateImage);
    socket.on("single:user:followUser", onFollowUser);
    socket.on("single:user:unFollowUser", onUnfollowUser);
    socket.on("single:user:blockUser", onBlockUser);
  }, []);
};

export default useUserEvent;
