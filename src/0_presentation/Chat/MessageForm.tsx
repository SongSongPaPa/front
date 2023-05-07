import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRecoilValue } from "recoil";
import useChatService from "@root/1_application/useChatService";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import styled from "styled-components";
import { chatUserListState, userListState, userNameSelector, userSelector } from "@root/2_domain/recoil/userAtom";

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
  const { sendMessage, sendDirectMessage } = useChatService();
  const userList = useRecoilValue(userListState);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    if (message[0] === "@") {
      const splitted = message.split(" ", 1);
      const rest = message.substring(splitted[0].length);
      const name = splitted[0].slice(1).toString();
      if (splitted.length < 1) {
        return;
      }
      const user = userList.find((item) => item.nickname === name);
      if (user) {
        sendDirectMessage(user.id, name + ":" + rest);
      }
      setMessage("");
      return;
    }
    sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <MessageBar>
        <Input name="message" value={message} onChange={handleMessageChange} />
        <Button name="send" type="submit" />
      </MessageBar>
    </form>
  );
};

export default MessageForm;
