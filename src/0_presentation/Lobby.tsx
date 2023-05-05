import React from "react";
import Button from "./components/common/Button";
import GameRoomList from "./Game/RoomList";
import ChatRoomList from "./Chat/RoomList";
import UserInterface from "./User/UserInterface";
import useModal from "@root/1_application/useModal";
import { PageWrapper, RoomListContainer, ButtonContainer, RoomWrapper, UserInterfaceWrapper } from "./PageStyle";

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
