import React from "react";
import "./GameRoomContainer.css";
import "./button.css";
import ModalButton from "./ModalButton";
import ChatRoomList from "./ChatRoomList";

const items = [
  { title: "Apple", headCount: 1 },
  { title: "Banana", headCount: 2 },
  { title: "Orange", headCount: 3 },
];

const ChatRoomContainer = () => {
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton className="lobby-round-button" text="Create Room" />
      </div>
      <ChatRoomList rooms={items} />
    </div>
  );
};

export default ChatRoomContainer;
