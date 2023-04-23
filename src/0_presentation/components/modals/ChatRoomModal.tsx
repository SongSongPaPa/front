import { useRecoilState } from "recoil";
import useModal from "../../../hooks/useModal";
import { useState } from "react";
import RadioGroup from "../common/RadioGroup";
import { chatRoomsState } from "../../../recoil/test";

const ChatRoomModal = () => {
  const { hideModal } = useModal();
  const [items, setItems] = useRecoilState(chatRoomsState);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");

  const onClose = () => {
    hideModal();
  };

  const onConfirm = async (title: string, option: string) => {
    setItems([...items, { title: title, headCount: 2 }]);
    hideModal();
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  return (
    <div className="Modal">
      <div className="modalBody">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <RadioGroup
          options={options}
          selectedOption={selectedValue}
          setSelectedOption={setSelectedValue}
        ></RadioGroup>
        <button onClick={onClose}>close</button>
        <button onClick={() => onConfirm(inputValue, selectedValue)}>ok</button>
      </div>
    </div>
  );
};

export default ChatRoomModal;
