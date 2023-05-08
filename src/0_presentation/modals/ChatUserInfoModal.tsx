import React from "react";
import useModal from "@root/1_application/useModal";
import ChatUserList from "@presentation/Chat/UserList";
import { ChatModal, ChatModalBody, Overlay } from "./ModalStyle";
import { IoIosSettings } from "react-icons/io";
import styled from "styled-components";

const ChatUserInfoModal = () => {
  const { hideModal, showModal } = useModal();
  const onClose = () => {
    hideModal();
  };

  const handleClickSetting = () => {
    showModal({ modalType: "ChatSettingModal" });
  };
  return (
    <ChatModal>
      <ChatModalBody>
        <ChatUserList />
        <IoIosSettings onClick={handleClickSetting} size={30} />
      </ChatModalBody>
      <Overlay onClick={onClose} />
    </ChatModal>
  );
};

export default ChatUserInfoModal;
