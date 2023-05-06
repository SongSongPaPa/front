import { messageListState } from "@root/2_domain/recoil/messageAtom";
import { useRecoilValue } from "recoil";
import Message from "./Message";
import styled from "styled-components";

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const MessageList = () => {
  const messages = useRecoilValue(messageListState);
  return (
    <StyledMessageList>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </StyledMessageList>
  );
};

export default MessageList;
