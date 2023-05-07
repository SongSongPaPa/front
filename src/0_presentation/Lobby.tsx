import React from "react";
import Button from "./components/common/Button";
import GameRoomList from "./Game/RoomList";
import ChatRoomList from "./Chat/RoomList";
import UserInterface from "./User/UserInterface";
import useModal from "@root/1_application/useModal";
import { PageWrapper, RoomListContainer, ButtonContainer, RoomWrapper, UserInterfaceWrapper } from "./PageStyle";
import useGameService from "@root/1_application/useGameService";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const { showModal } = useModal();
  const { createGame } = useGameService();
  const navigate = useNavigate();

  const handleClickQuickStart = () => {
    navigate("/game-wait");
    createGame(100);
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
            <Button name="lobby-small-common" onClick={handleClickQuickStart}>
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
