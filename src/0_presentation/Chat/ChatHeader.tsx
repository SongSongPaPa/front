import React from "react";
import Button from "../components/common/Button";
import useModal from "@root/1_application/useModal";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { chatState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";

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
  const chatInfo = useRecoilValue(chatState);
  const { leaveChat } = useChatService();
  const handleClickMenu = () => {
    showModal({ modalType: "ChatUserInfoModal" });
  };
  const handleClickBack = () => {
    leaveChat();
  };
  return (
    <Header>
      <Button name="back" onClick={handleClickBack} />
      <p>{chatInfo ? chatInfo.name : "잠시 후 다시 시도해주세요"}</p>
      <Button name="menu" onClick={handleClickMenu} />
    </Header>
  );
};

export default ChatHeader;
