import React from "react";
import useModal from "@root/1_application/useModal";
import ChatUserList from "@presentation/Chat/UserList";
import { ChatModal, ChatModalBody, Overlay } from "./ModalStyle";

const ChatUserInfoModal = () => {
  const { hideModal } = useModal();
  const onClose = () => {
    hideModal();
  };
  return (
    <ChatModal>
      <ChatModalBody>
        <ChatUserList />
      </ChatModalBody>
      <Overlay onClick={onClose} />
    </ChatModal>
  );
};

export default ChatUserInfoModal;
