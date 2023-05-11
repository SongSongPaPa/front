import React, { useEffect, useState } from "react";
import GamePlayerBox from "./GamePlayerBox";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { filteredUserListState, gamingState } from "@root/2_domain/recoil/gameAtom";
import { userSelector } from "@root/2_domain/recoil/userAtom";
import Button from "../components/common/Button";
import useGameService from "@root/1_application/useGameService";
import { PlayerInfo } from "@root/2_domain/Game";
import { meState } from "@root/2_domain/recoil/userAtom";
import GameRepository from "@root/3_infrastructure/GameRepository";
import GamePlay from "./GamePlay";
import { IoMdArrowBack } from "react-icons/io";

const Wrapper = styled.div`
  background-color: #fcfcfc;
  width: 864px;
  height: 683px;
  border-radius: 25px;
  border: none;
  gap: 70px;
  position: relative;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameContainer = () => {
  const gameInfo = useRecoilValue(gamingState);
  const userList = useRecoilValue(filteredUserListState);
  const me = useRecoilValue(meState);
  const { leaveGame, startGame } = useGameService();
  const onClickLeave = () => {
    leaveGame();
  };

  if (!gameInfo) window.location.href = "/lobby";

  const handleClick = () => {
    if (me.id !== gameInfo.ownerId) return;
    startGame();
  };

  console.log(">> " + gameInfo.onGame);
  return (
    <Wrapper>
      {!gameInfo.onGame ? (
        <>
          <IconWrap>
            <IoMdArrowBack onClick={onClickLeave} />
          </IconWrap>
          <Title>{gameInfo.name}</Title>
          {userList.map((user, idx) => {
            return <GamePlayerBox imagePath={user.profile} playerName={user.nickname} key={idx}></GamePlayerBox>;
          })}
          <StartButton
            style={{ display: me.id === gameInfo.ownerId ? "" : "none" }}
            onClick={handleClick}
            disabled={gameInfo.players.length < 2}
          >
            Start
          </StartButton>
        </>
      ) : (
        <GamePlay />
      )}
    </Wrapper>
  );
};

export default GameContainer;

const IconWrap = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 20px;
  svg {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  align-self: center;
  font-size: 25px;
`;

const StartButton = styled.button`
  text-decoration: none;
  color: ${(props) => (props.disabled ? "#707070" : "#000000")};
  font-size: 36px;
  text-align: center;
  vertical-align: middle;
  border: none;
  background-color: ${(props) => (props.disabled ? "#e2e2e2" : "#7ABFFF")};
  box-shadow: ${(props) => (props.disabled ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.25)")};
  bottom: 25%;
  left: auto;
  width: 205px;
  height: 77px;
  line-height: 77px;
  border-radius: 25px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
