import { messageListState } from "@root/2_domain/recoil/messageAtom";
import { useRecoilValue } from "recoil";
import Message from "./Message";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-family: sans-mono;
`;

const MessageList = () => {
  const messages = useRecoilValue(messageListState);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);
  return (
    <StyledMessageList ref={scrollRef}>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </StyledMessageList>
  );
};

export default MessageList;
