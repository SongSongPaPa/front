import React from "react";
import styled from "styled-components";
import { ChatMessage } from "@root/2_domain/ChatMessage";
import { useRecoilValue } from "recoil";
import { meState, userSelector } from "@root/2_domain/recoil/userAtom";
import UserListItem from "../components/common/UserListItem";

const getMessageStyle = (id: number, sourceId: number, direct: boolean, system: boolean) => {
  if (direct) {
    return "direct";
  } else if (system) {
    return "system";
  } else if (sourceId === id) {
    return "sent";
  } else {
    return "received";
  }
};

const getFormattedMessage = (name: string, message: string, type: string) => {
  if (type === "direct") {
    return name + "->" + message;
  }

  if (type === "system") {
    return name + message;
  }
  return message;
};

const Message = ({ message, sourceId, direct, system }: ChatMessage) => {
  const me = useRecoilValue(meState);
  const other = useRecoilValue(userSelector(sourceId));
  const style = getMessageStyle(me.id, sourceId, direct, system);
  const formattedMessage = getFormattedMessage(other ? other.nickname : "[system] ", message, style);
  if (me.blocks.find((item) => item.id === sourceId)) {
    return <div></div>;
  }
  return (
    <MessageWrapper className={style}>
      {style === "received" && <UserListItem userId={other.id} profile={other.profile} nickname={other.nickname} />}
      <StyledMessage className={style}>{formattedMessage}</StyledMessage>
    </MessageWrapper>
  );
};

export default React.memo(Message);

const StyledMessage = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  font-family: "Pretendard-Regular";

  &.sent {
    background-color: #dcf8c6;
  }

  &.received {
    background-color: #f0f0f0;
  }
`;

const MessageWrapper = styled.div`
  &.sent {
    align-self: flex-end;
  }

  &.received {
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
