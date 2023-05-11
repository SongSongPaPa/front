import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useUserCallback from "./useUserCallback";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { detailState, meState, userListFilterState, userListState } from "@root/2_domain/recoil/userAtom";

const useUserEvent = () => {
  const socket = GlobalSocket.getSocket();
  const resetMe = useResetRecoilState(meState);
  const resetDetail = useResetRecoilState(detailState);
  const resetUserList = useResetRecoilState(userListState);
  const resetUserFilter = useResetRecoilState(userListFilterState);

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
      //navigate("/lobby");
      console.log("User socket Connected to server");
    });

    socket.on("disconnect", () => {
      //navigate("/");
      console.log("User socket Disconnected from server");
      resetMe();
      resetDetail();
      resetUserList();
      resetUserFilter();
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
