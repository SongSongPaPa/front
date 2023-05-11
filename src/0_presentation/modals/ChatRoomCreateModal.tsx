import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useChatService from "@root/1_application/useChatService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import Button from "../components/common/Button";
import styled from "styled-components";

const ChatRoomCreateModal = () => {
  const { hideModal } = useModal();
  const { createChat } = useChatService();
  const [selectedValue, setSelectedValue] = useState("public");
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    hideModal();
    createChat(inputValue, selectedValue as string, password);
  };

  const options = [
    { label: "PUBLIC", value: "public" },
    { label: "PROTECTED", value: "protected" },
    { label: "PRIVATE", value: "private" },
  ];

  return (
    <Modal>
      <ModalBody>
        <h1>CREATE CHAT</h1>
        <label>TITLE</label>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required></input>
        <label>PASSWORD</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <label>OPTION</label>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <ButtonWrapper>
          <Button name="modal-square-common" onClick={onClose}>
            CLOSE
          </Button>
          <Button name="modal-square-common" onClick={onConfirm}>
            OK
          </Button>
        </ButtonWrapper>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default ChatRoomCreateModal;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  gap: 10px;
`;
