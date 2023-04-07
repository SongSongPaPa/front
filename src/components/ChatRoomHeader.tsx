import React from "react";
import ModalButton from "./ModalButton";
import "./ChatRoomHeader.css";
import "./button.css";

const ChatRoomHeader = () => {
  return (
    <div className="chatroomheader">
      <button className="back-button"></button>
      <p>Sample Room Title</p>
      <ModalButton className="menu-button" />
    </div>
  );
};

export default ChatRoomHeader;
