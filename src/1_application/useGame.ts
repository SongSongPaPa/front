import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useChatCallbacks from "./useChatCallback";
import useUserCallback from "./useUserCallback";

const useUserEvent = () => {
  const socket = GlobalSocket.getUserSocket();
  const { onUpdateDisplayName, onUpdateImage, onFollowUser, onUnfollowUser, onBlockUser } = useUserCallback();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("User socket Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("User socket Disconnected from server");
    });

    socket.on("broadcast:game:createGame", (data) => console.log(data));
    socket.on("broadcast:game:deleteGame", (data) => console.log(data));

    socket.on("group:game:watchGame", (data) => console.log(data));
    socket.on("group:game:joinGame", (data) => console.log(data));
    socket.on("group:game:deleteGame", (data) => console.log(data));
    socket.on("group:game:leaveGame", (data) => console.log(data));
    socket.on("group:game:startGame", (data) => console.log(data));
    socket.on("group:game:endGame", (data) => console.log(data));
    socket.on("group:game:movePaddle", (data) => console.log(data));

    socket.on("single:game:createGame", (data) => console.log(data));
    socket.on("single:game:joinGame", (data) => console.log(data));
    socket.on("single:game:watchGame", (data) => console.log(data));
  }, []);
};

export default useUserEvent;
