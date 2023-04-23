import React from "react";
import useModal from "../../../hooks/useModal";
import "./ChatRoomInfoModal.css";
import ChatUserList from "../chat/ChatUserList";

const ChatRoomInfoModal = () => {
  const { hideModal } = useModal();
  const onClose = () => {
    hideModal();
  };
  return (
    <div className="modal-container">
      <div className="modal-body">
        <ChatUserList />
      </div>
      <div className="overlay" onClick={onClose}></div>
    </div>
  );
};

export default ChatRoomInfoModal;
