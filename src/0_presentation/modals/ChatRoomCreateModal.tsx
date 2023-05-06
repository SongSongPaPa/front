import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useChatService from "@root/1_application/useChatService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import { useNavigate } from "react-router-dom";

const ChatRoomCreateModal = () => {
  const { hideModal } = useModal();
  const { createChat } = useChatService();
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    hideModal();
    navigate("/chat");
    createChat(inputValue, "public", password);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  return (
    <Modal>
      <ModalBody>
        <h1>Create Chat</h1>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <button onClick={onClose}>close</button>
        <button onClick={onConfirm}>ok</button>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default ChatRoomCreateModal;
