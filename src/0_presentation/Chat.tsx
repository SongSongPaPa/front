import React from "react";
import UserInterface from "./User/UserInterface";
import ChatContainer from "./Chat/ChatContainer";
import { PageWrapper, RoomWrapper, UserInterfaceWrapper } from "./PageStyle";

function Chat() {
  return (
    <PageWrapper>
      <RoomWrapper>
        <ChatContainer />
      </RoomWrapper>
      <UserInterfaceWrapper>
        <UserInterface />
      </UserInterfaceWrapper>
    </PageWrapper>
  );
}

export default Chat;
