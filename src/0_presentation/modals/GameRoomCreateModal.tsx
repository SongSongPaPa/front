import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useGameService from "@root/1_application/useGameService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

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
    createGame(parseInt(selectedValue), inputValue);
    hideModal();
  };

  const options = [
    { label: "NORMAL", value: "10" },
    { label: "DOUBLE", value: "20" },
    { label: "EXTRA FAST", value: "50" },
  ];

  return (
    <Modal>
      <ModalBody>
        <IconWrap>
          <RxCross2 onClick={onClose} size={45} />
        </IconWrap>
        <h1>CREATE GAME</h1>
        <label>TITLE</label>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
        <label>SPEED</label>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <ButtonWrapper>
          <ConfirmButton onClick={onConfirm}>OK</ConfirmButton>
        </ButtonWrapper>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default GameRoomCreateModal;

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const ConfirmButton = styled.button`
  font-family: "bitbit";
  width: 50px;
  height: 33px;
  background-color: #7abfff;
  border-radius: 10px;
  border: none;
`;

const IconWrap = styled.div`
  diplay: flex;
  position: absolute;
  top: 10px;
  left: 10px;
`;
