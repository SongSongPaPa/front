import React from "react";
import Button from "../components/common/Button";
import useModal from "@root/1_application/useModal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { currentChatRoomState } from "@root/2_domain/recoil/chatAtom";

const Header = styled.div`
  width: 864px;
  height: 50px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;

  > p {
    font-size: 20px;
  }
`;

const ChatHeader = () => {
  const { showModal } = useModal();
  const chatInfo = useRecoilValue(currentChatRoomState);
  const navigate = useNavigate();
  const handleClickMenu = () => {
    showModal({ modalType: "ChatUserInfoModal" });
  };
  const handleClickBack = () => {
    navigate("/lobby");
  };
  return (
    <Header>
      <Button name="back" onClick={handleClickBack} />
      <p>{chatInfo ? chatInfo.name : "sample"}</p>
      <Button name="menu" onClick={handleClickMenu} />
    </Header>
  );
};

export default ChatHeader;
