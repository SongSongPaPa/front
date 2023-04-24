import { useRecoilState } from "recoil";
import useModal from "@application/hooks/useModal";
import { useContext, useState } from "react";
import RadioGroup from "../common/RadioGroup";
import useChatService from "@root/1_application/hooks/useChatService";

const ChatRoomCreateModal = () => {
  const { hideModal } = useModal();
  //const [items, setItems] = useRecoilState(chatRoomsState);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const { createChatRoom } = useChatService();
  const onClose = () => {
    hideModal();
  };

  const onConfirm = async (title: string, option: string) => {
    //setItems([...items, { title: title, headCount: 2 }]);
    console.log("yes?");
    createChatRoom(
      { imagePath: "", name: "asdf", status: "ONLINE" },
      {
        info: { title: title, headCount: "0" },
        participants: [],
        owner: { imagePath: "", name: "asdf", status: "ONLINE" },
        admin: [],
      }
    );
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
      <div className="overlay" onClick={onClose}></div>
    </div>
  );
};

export default ChatRoomCreateModal;
