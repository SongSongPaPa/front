import React from "react";
import ModalButton from "./ModalButton";
import "./ChatRoomHeader.css";
import "./button.css";
import useModal from "../hooks/useModal";

const ChatRoomHeader = () => {
  const { showModal } = useModal();
  const handleClickMenu = () => {
    showModal({ modalType: "ChatRoomInfoModal" });
  };
  return (
    <div className="chatroomheader">
      <button className="back-button"></button>
      <p>Sample Room Title</p>
      <ModalButton
        className="menu-button"
        onClick={handleClickMenu}
        content={[""]}
      ></ModalButton>
    </div>
  );
};

export default ChatRoomHeader;
