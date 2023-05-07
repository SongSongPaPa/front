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
  justify-content: center;
  align-items: center;
`;

const GameContainer = () => {
  const gameInfo = useRecoilValue(gamingState);
  const userList = useRecoilValue(filteredUserListState);
  const me = useRecoilValue(meState);
  const gameRepository = GameRepository;

  const { leaveGame } = useGameService();
  const onClickLeave = () => {
    leaveGame();
  };

  if (!gameInfo) window.location.href = "/lobby";

  const handleClick = () => {
    if (me.id !== gameInfo.ownerId) return;
    gameRepository.startGame();
  };

  console.log(">> " + gameInfo.onGame);
  return (
    <Wrapper>
      {!gameInfo.onGame ? (
        <>
          <Button name="lobby-small-common" onClick={onClickLeave}>
            나가기
          </Button>
          {userList.map((user, idx) => {
            return <GamePlayerBox imagePath={user.profile} playerName={user.nickname} key={idx}></GamePlayerBox>;
          })}
          <div>
            <button style={{ display: me.id === gameInfo.ownerId ? "" : "none" }} onClick={handleClick}>
              gogogo
            </button>
          </div>
        </>
      ) : (
        <GamePlay />
      )}
    </Wrapper>
  );
};

export default GameContainer;
