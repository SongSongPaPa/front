import React from "react";
import GamePlayerBox from "./GamePlayerBox";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { gamingState } from "@root/2_domain/recoil/gameAtom";
import { userSelector } from "@root/2_domain/recoil/userAtom";
import Button from "../components/common/Button";
import useGameService from "@root/1_application/useGameService";
import { useNavigate } from "react-router-dom";

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
  console.log("game info", gameInfo);
  const playerA = useRecoilValue(userSelector(gameInfo.players[0].userId));
  const playerB = useRecoilValue(userSelector(gameInfo.players[1]?.userId));
  console.log("playerA", playerA);
  console.log("playerB", playerB);
  const { leaveGame } = useGameService();
  const onClickLeave = () => {
    leaveGame();
  };
  return (
    <Wrapper>
      <Button name="lobby-small-common" onClick={onClickLeave}>
        나가기
      </Button>
      <GamePlayerBox imagePath={playerA.profile} playerName={playerA.nickname} />
      <GamePlayerBox imagePath={playerB?.profile} playerName={playerB?.nickname} />
    </Wrapper>
  );
};

export default GameContainer;
