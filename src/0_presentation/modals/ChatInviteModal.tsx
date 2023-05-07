import React from "react";
import useModal from "@root/1_application/useModal";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import Button from "../components/common/Button";
import useChatService from "@root/1_application/useChatService";
import { useRecoilValue } from "recoil";
import { focusedChatState } from "@root/2_domain/recoil/chatAtom";

const ChatInviteModal = () => {
  const { hideModal } = useModal();
  const { joinChat } = useChatService();
  const chatId = useRecoilValue(focusedChatState);

  const onClose = () => {
    hideModal();
  };

  const handleClickAccept = async () => {
    console.log("private chat id: ", chatId);
    joinChat(chatId);
    hideModal();
  };

  return (
    <Modal>
      <ModalBody>
        <h1>비-밀로 초대받음</h1>
        <Button name="modal-round-common" onClick={handleClickAccept}>
          submit
        </Button>
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default ChatInviteModal;
