import React from "react";
import Button from "../components/common/Button";
import useModal from "@root/1_application/useModal";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { chatState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";
import { IoMdArrowBack } from "react-icons/io";
import { CgMenu } from "react-icons/cg";

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

const IconWrap = styled.div`
  svg {
    width: 50px;
    height: 50px;
    cursor: pointer;
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
      <IconWrap>
        <IoMdArrowBack onClick={handleClickBack} />
      </IconWrap>
      <p>{chatInfo ? chatInfo.name : "잠시 후 다시 시도해주세요"}</p>
      <IconWrap>
        <CgMenu onClick={handleClickMenu} />
      </IconWrap>
    </Header>
  );
};

export default ChatHeader;
