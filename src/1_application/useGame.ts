import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useGameCallbacks from "./useGameCallback";

const useGameEvent = () => {
  const socket = GlobalSocket.getSocket();
  const {
    onCreateGame,
    onBroadDeleteGame,
    onGroupWatchGame,
    onGroupJoinGame,
    onGroupDeleteGame,
    onGroupLeaveGame,
    onStartGame,
    onEndGame,
    onMovePaddle,
    onSingleJoinGame,
    onSingleWatchGame,
  } = useGameCallbacks();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("User socket Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("User socket Disconnected from server");
    });

    socket.on("broadcast:game:createGame", onCreateGame);
    socket.on("broadcast:game:deleteGame", onBroadDeleteGame);

    socket.on("group:game:watchGame", onGroupWatchGame);
    socket.on("group:game:joinGame", onGroupJoinGame);
    socket.on("group:game:deleteGame", onGroupDeleteGame);
    socket.on("group:game:leaveGame", onGroupLeaveGame);
    socket.on("group:game:startGame", onStartGame);
    socket.on("group:game:endGame", onEndGame);
    socket.on("group:game:movePaddle", onMovePaddle);

    socket.on("single:game:joinGame", onSingleJoinGame);
    socket.on("single:game:watchGame", onSingleWatchGame);
    console.log(socket);
  }, []);
};

export default useGameEvent;
