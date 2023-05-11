import React from "react";
import Button from "./Button";
import styled from "styled-components";
import useChatService from "@root/1_application/useChatService";
import useGameService from "@root/1_application/useGameService";
import { useNavigate } from "react-router-dom";
import useModal from "@root/1_application/useModal";
import { useSetRecoilState } from "recoil";
import { focusedChatState } from "@root/2_domain/recoil/chatAtom";

interface RoomListItemProps {
  roomId: number;
  isGame: boolean;
  name: string;
  option?: string;
}

const RoomListItem = ({ roomId, isGame, name, option }: RoomListItemProps) => {
  const { joinChat } = useChatService();
  const { joinGame, watchGame } = useGameService();
  const { showModal } = useModal();
  const setId = useSetRecoilState(focusedChatState);

  const handleClickJoinChat = () => {
    if (option === "PROTECTED") {
      setId(roomId);
      showModal({ modalType: "ChatPasswordModal" });
    } else if (option === "PRIVATE") {
      alert("비공개 방입니다");
    } else joinChat(roomId);
  };

  const handleClickJoinGame = () => {
    joinGame(roomId);
  };
  const handleClickWatchGame = () => {
    watchGame(roomId);
  };
  return (
    <Room>
      <Title>{name}</Title>
      <HeadCount>{option as string}</HeadCount>
      {isGame ? (
        <Button name="join-game" onClick={handleClickJoinGame}>
          PLAY!
        </Button>
      ) : (
        <Button name="join-chat" onClick={handleClickJoinChat}>
          JOIN
        </Button>
      )}
      {isGame && (
        <Button name="watch-game" onClick={handleClickWatchGame}>
          WATCH
        </Button>
      )}
    </Room>
  );
};

export default RoomListItem;

const Room = styled.div`
  display: flex;
  position: relative;
  width: 387px;
  height: 106px;
  border-radius: 25px;
  background-color: #fcfcfc;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-right: 25px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
`;

const HeadCount = styled.div`
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
