import React from "react";
import "./GameRoomContainer.css";
import "../common/button.css";
import ModalButton from "../common/ModalButton";
import GameRoomList from "./GameRoomList";
import useModal from "@application/hooks/useModal";
import { useRecoilState } from "recoil";
import { itemsState } from "@domain/recoil/test";

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
          onClick={handleClickAlertModal}
          content={["Quick Start"]}
        />
        <ModalButton
          className="lobby-round-button"
          onClick={handleClickConfirmModal}
          content={["Create Room"]}
        />
      </div>
      <GameRoomList rooms={items} />
    </div>
  );
};

export default GameRoomContainer;
