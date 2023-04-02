import React from "react";
import "./GameRoomContainer.css";
import "./button.css";
import ModalButton from "./ModalButton";
import GameRoomList from "./GameRoomList";
import useModal from "../hooks/useModal";
import { atom, useRecoilState } from "recoil";

export interface Item {
  title: string;
  headCount: number;
  option: string;
}

export const itemsState = atom<Item[]>({
  key: "items",
  default: [],
});

const GameRoomContainer = () => {
  const { showModal } = useModal();
  const [items, setItems] = useRecoilState(itemsState);
  const handleClickAlertModal = () => {
    showModal({ modalType: "AlertModal" });
  };

  const handleClickConfirmModal = () => {
    showModal({ modalType: "ConfirmModal" });
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
