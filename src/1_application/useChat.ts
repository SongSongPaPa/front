import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import useChatCallbacks from "./useChatCallback";

const useChatEvent = () => {
  const socket = GlobalSocket.getSocket();
  const {
    onCreateChat,
    onUpdateChat,
    onSetAdmin,
    onDeleteChat,
    onGroupJoinChat,
    onGroupLeaveChat,
    onGroupSendMessage,
    onKickUser,
    onMuteUser,
    onSingleJoinChat,
    onSingleLeaveChat,
    onSingleSendMessage,
    onInviteUser,
  } = useChatCallbacks();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    ///socket.on("single:chat:createChat", (data) => console.log(data));
    socket.on("broadcast:chat:createChat", onCreateChat);
    socket.on("broadcast:chat:updateChat", onUpdateChat);
    socket.on("broadcast:chat:setAdmin", onSetAdmin);
    socket.on("broadcast:chat:deleteChat", onDeleteChat);

    socket.on("group:chat:joinChat", onGroupJoinChat);
    socket.on("group:chat:leaveChat", onGroupLeaveChat);
    socket.on("group:chat:sendMessage", onGroupSendMessage);
    socket.on("group:chat:kickUser", onKickUser);
    socket.on("group:chat:muteUser", onMuteUser);

    socket.on("single:chat:joinChat", onSingleJoinChat);
    socket.on("single:chat:leaveChat", onSingleLeaveChat);
    socket.on("single:chat:sendMessage", onSingleSendMessage);
    //성수한테 물어봐야함
    socket.on("single:chat:inviteUser", onInviteUser);
  }, []);
};

export default useChatEvent;
