import React, { ChangeEvent, FormEvent, useState } from "react";
import useChatService from "@root/1_application/useChatService";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import styled from "styled-components";

const MessageBar = styled.div`
  width: 790px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChatService();

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <MessageBar>
        <Input type="message" value={message} onChange={handleMessageChange} />
        <Button name="send" type="submit" />
      </MessageBar>
    </form>
  );
};

export default MessageForm;
