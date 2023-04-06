import React, { useState } from "react";
import "./CreateRoomModal.css";
import useModal from "../hooks/useModal";
import { useRecoilState } from "recoil";
import { itemsState } from "../recoil/test";
import RadioGroup from "./RadioGroup";

const ConfirmModal = () => {
  const { hideModal } = useModal();
  const [items, setItems] = useRecoilState(itemsState);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onClose = () => {
    hideModal();
  };

  const onConfirm = async (title: string, option: string) => {
    setItems([...items, { title: title, headCount: 2, option: option }]);
    hideModal();
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="Modal">
      <div className="modalBody">
        <button onClick={onClose}>close</button>
        <button onClick={() => onConfirm(inputValue, selectedValue)}>ok</button>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <RadioGroup
          options={options}
          selectedOption={selectedValue}
          setSelectedOption={setSelectedValue}
        ></RadioGroup>
      </div>
    </div>
  );
};

export default ConfirmModal;
