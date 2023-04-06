import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { MessageState } from "../recoil/test";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useRecoilState(MessageState);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    setMessages([...messages, { name: "sohan", content: message }]);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
