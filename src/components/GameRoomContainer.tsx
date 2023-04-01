import React from "react";
import "./GameRoomContainer.css";
import "./button.css";
import ModalButton from "./ModalButton";
import GameRoomList from "./GameRoomList";
import useModal from "../hooks/useModal";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { useState } from "react";

export interface Item {
  title: string;
  headCount: number;
}

export const itemsState = atom<Item[]>({
  key: "items",
  default: [
    { title: "Apple", headCount: 1 },
    { title: "Banana", headCount: 2 },
    { title: "Orange", headCount: 3 },
  ],
});

/*const items = [
  { title: "Apple", headCount: 1 },
  { title: "Banana", headCount: 2 },
  { title: "Orange", headCount: 3 },
];*/

const GameRoomContainer = () => {
  const { showModal } = useModal();
  const [items, setItems] = useRecoilState(itemsState);
  const handleClickAlertModal = () => {
    showModal({
      modalType: "AlertModal",
      modalProps: {
        message: "Success!",
      },
    });
  };

  const handleClickConfirmModal = () => {
    showModal({
      modalType: "ConfirmModal",
      modalProps: {
        message: "Yes or No",
        confirmText: "Yes",
        cancelText: "No",
        handleConfirm: () => {
          setItems([...items, { title: "Grape", headCount: 2 }]);
          console.log("Yes!");
        },
        handleClose: () => {
          console.log("No!");
        },
      },
    });
  };
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton
          className="lobby-round-button"
          text="Quick Start"
          onClick={handleClickAlertModal}
        />
        <ModalButton
          className="lobby-round-button"
          text="Create Room"
          onClick={handleClickConfirmModal}
        />
      </div>
      <GameRoomList rooms={items} />
    </div>
  );
};

export default GameRoomContainer;
