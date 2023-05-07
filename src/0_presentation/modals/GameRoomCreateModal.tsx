import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useGameService from "@root/1_application/useGameService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import { useNavigate } from "react-router-dom";

const GameRoomCreateModal = () => {
  const { hideModal } = useModal();
  const { createGame } = useGameService();
  const [selectedValue, setSelectedValue] = useState<string | number>(100);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    createGame(selectedValue as number);
    hideModal();
  };

  const options = [
    { label: "speed normal", value: 100 },
    { label: "speed double", value: 200 },
    { label: "extra fast", value: 1000 },
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
