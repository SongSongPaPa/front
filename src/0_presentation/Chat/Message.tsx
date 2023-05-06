import React from "react";
import styled from "styled-components";
import { ChatMessage } from "@root/2_domain/ChatMessage";

const StyledMessage = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;

  &.sent {
    background-color: #dcf8c6;
    align-self: flex-end;
  }

  &.received {
    background-color: #f0f0f0;
    align-self: flex-start;
  }
`;

const Message = ({ message, sourceId, direct, system }: ChatMessage) => {
  const isSentByMe = sourceId === 1;
  return (
    <StyledMessage className={isSentByMe ? "sent" : "received"}>
      {sourceId}: {message}
    </StyledMessage>
  );
};

export default React.memo(Message);
