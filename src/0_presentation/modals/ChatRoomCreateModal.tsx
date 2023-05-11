import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useChatService from "@root/1_application/useChatService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

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
        <IconWrap>
          <RxCross2 onClick={onClose} size={45} />
        </IconWrap>
        <h1>CREATE CHAT</h1>
        <label>TITLE</label>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required></input>
        <label>PASSWORD</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <label>OPTION</label>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <ButtonWrapper>
          <ConfirmButton onClick={onConfirm}>OK</ConfirmButton>
        </ButtonWrapper>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default ChatRoomCreateModal;

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
