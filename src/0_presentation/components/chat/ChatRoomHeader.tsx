import React from "react";
import ModalButton from "@common/ModalButton";
import "./ChatRoomHeader.css";
import "@common/button.css";
import useModal from "@application/hooks/useModal";
import { useNavigate } from "react-router-dom";

const ChatRoomHeader = () => {
  const { showModal } = useModal();
  const navigate = useNavigate();
  const handleClickMenu = () => {
    showModal({ modalType: "ChatRoomInfoModal" });
  };
  const handleClickBack = () => {
    navigate("/lobby");
  };
  return (
    <div className="chatroomheader">
      <button className="back-button" onClick={handleClickBack}></button>
      <p>Sample Room Title</p>
      <ModalButton
        className="menu-button"
        onClick={handleClickMenu}
        content={[""]}
      ></ModalButton>
    </div>
  );
};

export default ChatRoomHeader;
