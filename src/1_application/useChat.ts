import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useChatCallbacks from "./useChatCallback";

const useChatEvent = () => {
  const socket = GlobalSocket.getChatSocket();
  const { onCreateChat } = useChatCallbacks();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    ///socket.on("single:chat:createChat", (data) => console.log(data));
    socket.on("broadcast:chat:createChat", onCreateChat);
    socket.on("broadcast:chat:updateChat", (data) => console.log(data));

    socket.on("single:chat:joinChat", (data) => console.log(data));
    socket.on("group:chat:joinChat", (data) => console.log(data));
    socket.on("single:chat:leaveChat", (data) => console.log(data));
    socket.on("broadcast:chat:deleteChat", (data) => console.log(data));
    socket.on("broadcast:chat:setAdmin", (data) => console.log(data));
    socket.on("group:chat:leaveChat", (data) => console.log(data));
    socket.on("group:chat:sendMessage", (data) => console.log(data));
    socket.on("group:chat:kickUser", (data) => console.log(data));
    socket.on("group:chat:muteUser", (data) => console.log(data));

    socket.on("single:chat:sendMessage", (data) => console.log(data));
    socket.on("single:chat:inviteUser", (data) => console.log(data));
  }, []);
};

export default useChatEvent;
