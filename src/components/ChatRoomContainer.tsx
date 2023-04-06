import React from "react";
import "./GameRoomContainer.css";
import "./button.css";
import ModalButton from "./ModalButton";
import ChatRoomList from "./ChatRoomList";
import useModal from "../hooks/useModal";
import { useRecoilState } from "recoil";
import { chatRoomsState } from "../recoil/test";

const ChatRoomContainer = () => {
  const { showModal } = useModal();
  const [items, setItems] = useRecoilState(chatRoomsState);
  const handleClickChatRoomModal = () => {
    showModal({ modalType: "ChatRoomModal" });
  };
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton
          className="lobby-round-button"
          text="Create Room"
          onClick={handleClickChatRoomModal}
        />
      </div>
      <ChatRoomList rooms={items} />
    </div>
  );
};

export default ChatRoomContainer;
