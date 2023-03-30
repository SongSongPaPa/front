import React from "react";
import "./GameRoomContainer.css";
import "./button.css";
import ModalButton from "./ModalButton";
import GameRoomList from "./GameRoomList";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil/modal";
import { useModal } from "../hooks/useModal";
import { useCallback } from "react";
import { testCallback } from "./callbacks";
//import { handleCreateRoomClick } from "./GameRoomUtils";

const items = [
  { title: "Apple", headCount: 1 },
  { title: "Banana", headCount: 2 },
  { title: "Orange", headCount: 3 },
];

const GameRoomContainer = () => {
  const { openModal } = useModal();
  const handleCreateRoomClick = useCallback(() => {
    openModal({
      title: "asdfads",
      content: (
        <div>
          Content with callback function:{" "}
          <button onClick={testCallback}>Click me</button>
        </div>
      ),
      callback: testCallback,
    });
  }, [openModal]);
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton
          className="lobby-round-button"
          text="Quick Start"
          onClick={handleCreateRoomClick}
        />
        <ModalButton className="lobby-round-button" text="Create Room" />
      </div>
      <GameRoomList rooms={items} />
    </div>
  );
};

export default GameRoomContainer;
