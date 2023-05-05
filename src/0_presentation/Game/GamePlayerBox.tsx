import React from "react";
import styled from "styled-components";

interface GamePlayerBoxProps {
  imagePath?: string;
  playerName?: string;
}

const Box = styled.div<GamePlayerBoxProps>`
  font-family: Bouncy;
  font-size: 36px;
  background-color: ${(props) => {
    if (props.imagePath) {
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
`;

const GamePlayerBox = ({ imagePath, playerName }: GamePlayerBoxProps) => {
  return (
    <Box>
      <img src={imagePath}></img>
      <div>{playerName ? playerName : "waiting..."}</div>
    </Box>
  );
};

export default GamePlayerBox;
