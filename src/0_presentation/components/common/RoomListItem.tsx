import React from "react";
import Button from "./Button";
import styled from "styled-components";
import useChatService from "@root/1_application/useChatService";
import useGameService from "@root/1_application/useGameService";
import { useNavigate } from "react-router-dom";

interface RoomListItemProps {
  roomId: number;
  isGame: boolean;
  name: string;
  password?: string;
}

const Room = styled.div`
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
  position: relative;
  left: 43.41%;
  right: 22.48%;
  top: 42.45%;
  bottom: 33.02%;
`;

const HeadCount = styled.div`
  font-size: 15px;
  position: relative;
  left: 90%;
  right: 5%;
  top: 2%;
  bottom: 66.98%;
`;

const RoomListItem = ({ roomId, password, isGame, name }: RoomListItemProps) => {
  const { joinChat } = useChatService();
  const { joinGame, watchGame } = useGameService();
  const navigate = useNavigate();

  const handleClickJoinChat = () => {
    joinChat(roomId, password);
    navigate("/chat");
  };

  const handleClickJoinGame = () => {
    joinGame(roomId);
    navigate("/game-wait");
  };
  const handleClickWatchGame = () => {
    watchGame(roomId);
    navigate("gaim-wait");
  };
  return (
    <Room>
      <Title>{name}</Title>
      {isGame ? (
        <Button name="join-game" onClick={handleClickJoinGame}>
          play!
        </Button>
      ) : (
        <Button name="join-chat" onClick={handleClickJoinChat}>
          join
        </Button>
      )}
      {isGame && (
        <Button name="watch-game" onClick={handleClickWatchGame}>
          watch
        </Button>
      )}
    </Room>
  );
};

export default RoomListItem;
