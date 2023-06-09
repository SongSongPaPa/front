import React from "react";
import Button from "./components/common/Button";
import GameRoomList from "./Game/RoomList";
import ChatRoomList from "./Chat/RoomList";
import UserInterface from "./User/UserInterface";
import useModal from "@root/1_application/useModal";
import {
  PageWrapper,
  RoomListContainer,
  ButtonContainer,
  RoomWrapper,
  UserInterfaceWrapper,
  ContainerTitle,
} from "./PageStyle";
import useGameService from "@root/1_application/useGameService";

const Lobby = () => {
  const { showModal } = useModal();
  const { quickGame } = useGameService();

  const handleClickQuickStart = () => {
    quickGame();
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
          <ContainerTitle>GAME</ContainerTitle>
          <ButtonContainer>
            <Button name="lobby-small-common" onClick={handleClickQuickStart}>
              QUICK START
            </Button>
            <Button name="lobby-small-common" onClick={handleClickGameRoomCreate}>
              CREATE ROOM
            </Button>
          </ButtonContainer>
          <GameRoomList></GameRoomList>
        </RoomListContainer>
        <RoomListContainer>
          <ContainerTitle>CHAT</ContainerTitle>
          <ButtonContainer>
            <Button name="lobby-small-common" onClick={handleClickChatRoomCreate}>
              CREATE ROOM
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
