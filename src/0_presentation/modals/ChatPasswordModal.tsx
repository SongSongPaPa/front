import React, { FormEvent, ChangeEvent } from "react";
import useModal from "@root/1_application/useModal";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import Input from "../components/common/Input";
import { useState } from "react";
import Button from "../components/common/Button";
import useChatService from "@root/1_application/useChatService";
import { useRecoilValue } from "recoil";
import { focusedChatState } from "@root/2_domain/recoil/chatAtom";

const ChatPasswordModal = () => {
  const { hideModal } = useModal();
  const [password, setPassword] = useState("");
  const { joinChat } = useChatService();
  const chatId = useRecoilValue(focusedChatState);

  const onClose = () => {
    hideModal();
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("password: ", password);
    joinChat(chatId, password);
    hideModal();
  };

  return (
    <Modal>
      <ModalBody>
        <h1>비밀번호를 입력하세요</h1>
        <form onSubmit={handleSubmit}>
          <label>Code:</label>
          <Input name="search" value={password} onChange={handlePasswordChange} />
          <Button name="modal-round-common" type="submit">
            submit
          </Button>
        </form>
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default ChatPasswordModal;
