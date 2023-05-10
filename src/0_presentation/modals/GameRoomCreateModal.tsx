import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useGameService from "@root/1_application/useGameService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import styled from "styled-components";

const GameRoomCreateModal = () => {
  const { hideModal } = useModal();
  const { createGame } = useGameService();
  const [selectedValue, setSelectedValue] = useState("100");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    createGame(parseInt(selectedValue));
    hideModal();
  };

  const options = [
    { label: "normal", value: "100" },
    { label: "double", value: "200" },
    { label: "extra fast", value: "1000" },
  ];

  return (
    <Modal>
      <ModalBody>
        <h1>Create Game</h1>
        <label>Title</label>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
        <label>Speed</label>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <ButtonWrapper>
          <Button name="modal-square-common" onClick={onClose}>
            close
          </Button>
          <Button name="modal-square-common" onClick={onConfirm}>
            ok
          </Button>
        </ButtonWrapper>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default GameRoomCreateModal;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  gap: 10px;
`;
