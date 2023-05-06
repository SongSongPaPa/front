import React from "react";
import Button from "./Button";
import styled from "styled-components";
import useChatService from "@root/1_application/useChatService";

interface RoomListItemProps {
  roomId: number;
  isGame: boolean;
  headCount: number;
  name: string;
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

const RoomListItem = ({ roomId, isGame, headCount, name }: RoomListItemProps) => {
  const { joinChat } = useChatService();
  const handleClickJoinChat = () => {
    //joinChat();
  };
  return (
    <Room>
      <Title>{name}</Title>
      <HeadCount>{headCount}</HeadCount>
      <Button name={isGame ? "join-game" : "join-chat"}>{isGame ? "play!" : "join"}</Button>
      {isGame && <Button name="watch-game">watch</Button>}
    </Room>
  );
};

export default RoomListItem;
