import React from "react";
import ModalButton from "./ModalButton";
import "./ChatRoomHeader.css";
import "./button.css";
import useModal from "../hooks/useModal";

const ChatRoomHeader = () => {
  const { showModal } = useModal();
  const handleClickMenu = () => {
    //showModal
  };
  return (
    <div className="chatroomheader">
      <button className="back-button"></button>
      <p>Sample Room Title</p>
      <ModalButton className="menu-button" content={[""]} />
    </div>
  );
};

export default ChatRoomHeader;
