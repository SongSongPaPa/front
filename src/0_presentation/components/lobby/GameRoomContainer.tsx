import React from "react";
import "./GameRoomContainer.css";
import "../common/button.css";
import ModalButton from "../common/ModalButton";
import GameRoomList from "./GameRoomList";
import useModal from "@application/hooks/useModal";
import { useRecoilState } from "recoil";
import { itemsState } from "@domain/recoil/test";
import { useNavigate } from "react-router-dom";

const GameRoomContainer = () => {
  const { showModal } = useModal();
  const [items, setItems] = useRecoilState(itemsState);
  const navigate = useNavigate();

  const handleClickQuickStart = () => {
    navigate("/game-wait");
  };

  const handleClickGameRoomCreateModal = () => {
    showModal({ modalType: "GameRoomCreateModal" });
  };
  return (
    <div className="box">
      <div className="button-container">
        <ModalButton
          className="lobby-round-button"
          onClick={handleClickQuickStart}
          content={["Quick Start"]}
        />
        <ModalButton
          className="lobby-round-button"
          onClick={handleClickGameRoomCreateModal}
          content={["Create Room"]}
        />
      </div>
      <GameRoomList rooms={items} />
    </div>
  );
};

export default GameRoomContainer;
