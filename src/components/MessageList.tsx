import React from "react";
import { useRecoilState } from "recoil";
import Message from "./Message";
import { MessageState } from "../recoil/test";
import "./Message.css";

const MessageList = () => {
  const [messages, setMessages] = useRecoilState(MessageState);
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default React.memo(MessageList);
