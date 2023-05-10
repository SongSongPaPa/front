import useModal from "@application/useModal";
import { useState } from "react";
import RadioGroup from "../components/common/RadioGroup";
import useChatService from "@root/1_application/useChatService";
import { Modal, ModalBody, Overlay } from "./ModalStyle";

const ChatSettingModal = () => {
  const { hideModal } = useModal();
  const { updateChat } = useChatService();
  const [selectedValue, setSelectedValue] = useState("public");
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    hideModal();
    updateChat(inputValue, selectedValue as string, password);
  };

  const options = [
    { label: "public", value: "public" },
    { label: "protected", value: "protected" },
    { label: "private", value: "private" },
  ];

  return (
    <Modal>
      <ModalBody>
        <h1>Update Chat</h1>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required></input>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <RadioGroup options={options} selectedOption={selectedValue} setSelectedOption={setSelectedValue}></RadioGroup>
        <button onClick={onClose}>close</button>
        <button onClick={onConfirm}>ok</button>
      </ModalBody>
      <Overlay onClick={onClose}></Overlay>
    </Modal>
  );
};

export default ChatSettingModal;
