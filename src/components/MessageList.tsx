import React from "react";
import { useRecoilState } from "recoil";
import Message from "./Message";
import { MessageState } from "../recoil/test";

const MessageList = () => {
  const [messages, setMessages] = useRecoilState(MessageState);
  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default React.memo(MessageList);
