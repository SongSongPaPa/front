import { gamingState } from "@root/2_domain/recoil/gameAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userSelector } from "@root/2_domain/recoil/userAtom";

interface GamePlayerBoxProps {
  imagePath?: string;
  playerName?: string;
}

const Box = styled.div<GamePlayerBoxProps>`
  font-size: 36px;
  background-color: ${(props) => {
    if (props.playerName) {
      return "#bfff8c";
    } else {
      return "#d9d9d9";
    }
  }};
  border-radius: 25px;
  width: 320px;
  height: 290px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: #d9d9d9;
`;

const GamePlayerBox = ({ imagePath, playerName }: GamePlayerBoxProps) => {
  return (
    <Box playerName={playerName}>
      <Image src={imagePath} />
      <div>{playerName ? playerName : "waiting..."}</div>
    </Box>
  );
};

export default GamePlayerBox;
