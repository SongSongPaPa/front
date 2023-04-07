import React from "react";
import "./GameRoomContainer.css";
import "./button.css";
import ModalButton from "./ModalButton";
import ChatRoomList from "./ChatRoomList";
import useModal from "../hooks/useModal";

const ChatRoomContainer = () => {
  const { showModal } = useModal();
  const handleClickChatRoomModal = () => {
    showModal({ modalType: "ChatRoomModal" });
  };
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton
          className="lobby-round-button"
          onClick={handleClickChatRoomModal}
          content={["Create Room"]}
        />
      </div>
      <ChatRoomList />
    </div>
  );
};

export default ChatRoomContainer;
