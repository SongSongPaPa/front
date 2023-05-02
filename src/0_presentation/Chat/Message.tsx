import React from "react";
import styled from "styled-components";

export interface MessageProps {
  name: string;
  content: string;
}

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

const Message = (props: MessageProps) => {
  const { name, content } = props;
  const isSentByMe = name === "sohan";
  return (
    <StyledMessage className={isSentByMe ? "sent" : "received"}>
      {name}: {content}
    </StyledMessage>
  );
};

export default React.memo(Message);
