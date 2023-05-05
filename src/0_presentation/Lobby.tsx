import React from "react";
import styled from "styled-components";
import Button from "./components/common/Button";
import GameRoomList from "./Game/RoomList";
import ChatRoomList from "./Chat/RoomList";
import UserInterface from "./User/UserInterface";
import useModal from "@root/1_application/useModal";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    margin-bottom: 20px;
  }
`;

const UserInterfaceWrapper = styled.div`
  margin-left: 20px;
`;

export const RoomListContainer = styled.div`
  display: flex;
  position: relative;
  width: 864px;
  height: 332px;
  background-color: #fcfcfc;
  border-radius: 25px;
  top: 10px;
  left: 10px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;

  & > * {
    margin-left: 10px;
  }
`;

const Lobby = () => {
  const { showModal } = useModal();
  const handleClickAlertModal = () => {
    showModal({ modalType: "AlertModal" });
  };
  const handleClickChatRoomCreate = () => {
    showModal({ modalType: "ChatRoomCreateModal" });
  };

  const handleClickGameRoomCreate = () => {
    showModal({ modalType: "GameRoomCreateModal" });
  };
  return (
    <PageWrapper>
      <RoomWrapper>
        <RoomListContainer>
          <ButtonContainer>
            <Button name="lobby-small-common" onClick={handleClickAlertModal}>
              Quick Start
            </Button>
            <Button name="lobby-small-common" onClick={handleClickGameRoomCreate}>
              Create Room
            </Button>
          </ButtonContainer>
          <GameRoomList></GameRoomList>
        </RoomListContainer>
        <RoomListContainer>
          <ButtonContainer>
            <Button name="lobby-small-common" onClick={handleClickChatRoomCreate}>
              Create Room
            </Button>
          </ButtonContainer>
          <ChatRoomList></ChatRoomList>
        </RoomListContainer>
      </RoomWrapper>
      <UserInterfaceWrapper>
        <UserInterface />
      </UserInterfaceWrapper>
    </PageWrapper>
  );
};

export default Lobby;
