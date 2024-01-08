import useGameService from "@root/1_application/useGameService";
import useModal from "@root/1_application/useModal";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import { useEffect } from "react";
import ChatRoomList from "./Chat/RoomList";
import GameRoomList from "./Game/RoomList";
import {
  ButtonContainer,
  ContainerTitle,
  PageWrapper,
  RoomListContainer,
  RoomWrapper,
  UserInterfaceWrapper,
} from "./PageStyle";
import UserInterface from "./User/UserInterface";
import Button from "./components/common/Button";

const Lobby = () => {
  const { showModal } = useModal();
  const { quickGame } = useGameService();
  const socket = GlobalSocket.getSocket();

  const handleClickQuickStart = () => {
    quickGame();
  };
  const handleClickChatRoomCreate = () => {
    showModal({ modalType: "ChatRoomCreateModal" });
  };

  useEffect(() => {
    socket.connect();
  }, [socket]);

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
