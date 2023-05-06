import React from "react";
import styled from "styled-components";
import { ChatMessage } from "@root/2_domain/ChatMessage";
import { useRecoilValue } from "recoil";
import { meState, userListState, userSelector } from "@root/2_domain/recoil/userAtom";

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

  &.system {
    align-self: center;
  }

  &.direct {
    align-self: center;
    color: green;
  }
`;

const getMessageStyle = (id: number, sourceId: number, direct: boolean, system: boolean) => {
  if (sourceId === id) {
    return "sent";
  }
  if (direct) {
    return "direct";
  } else if (system) {
    return "system";
  } else {
    return "received";
  }
};

const Message = ({ message, sourceId, direct, system }: ChatMessage) => {
  const me = useRecoilValue(meState);
  const other = useRecoilValue(userSelector(sourceId));
  const style = getMessageStyle(me.id, sourceId, direct, system);
  console.log(me.id, sourceId, style);
  return (
    <StyledMessage className={style}>
      {style === "sent" ? me.nickname : other ? other.nickname : ""}: {message}
    </StyledMessage>
  );
};

export default React.memo(Message);
