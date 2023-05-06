import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import ChatHeader from "./ChatHeader";
import styled from "styled-components";

const ChatWrapper = styled.div`
  background-color: #fcfcfc;
  width: 864px;
  height: 683px;
  border-radius: 25px;
  border: none;
  gap: 20px;
  position: relative;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ChatContainer = () => {
  return (
    <ChatWrapper>
      <ChatHeader />
      <MessageList />
      <MessageForm />
    </ChatWrapper>
  );
};

export default ChatContainer;
