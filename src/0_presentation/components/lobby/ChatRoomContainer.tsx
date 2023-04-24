import React from "react";
import "./GameRoomContainer.css";
import "../common/button.css";
import ModalButton from "../common/ModalButton";
import ChatRoomList from "./ChatRoomList";
import useModal from "@application/hooks/useModal";

const ChatRoomContainer = () => {
  const { showModal } = useModal();
  const handleClickChatRoomCreateModal = () => {
    showModal({ modalType: "ChatRoomCreateModal" });
  };
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton
          className="lobby-round-button"
          onClick={handleClickChatRoomCreateModal}
          content={["Create Room"]}
        />
      </div>
      <ChatRoomList />
    </div>
  );
};

export default ChatRoomContainer;
