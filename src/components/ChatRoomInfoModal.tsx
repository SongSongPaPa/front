import React from "react";
import useModal from "../hooks/useModal";
import "./ChatRoomInfoModal.css";

const ChatRoomInfoModal = () => {
  const { hideModal } = useModal();
  const onClose = () => {
    hideModal();
  };
  return (
    <div className="modal-container">
      <div className="modal-body">
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default ChatRoomInfoModal;
