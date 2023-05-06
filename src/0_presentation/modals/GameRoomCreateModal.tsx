import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useGameService from "@root/1_application/useGameService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import { useNavigate } from "react-router-dom";

const GameRoomCreateModal = () => {
  const { hideModal } = useModal();
  const { createGame } = useGameService();
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    navigate("/game-wait");
    createGame(1);
    hideModal();
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <Modal>
      <ModalBody>
        <h1>Create Game</h1>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <button onClick={onClose}>close</button>
        <button onClick={onConfirm}>ok</button>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default GameRoomCreateModal;
