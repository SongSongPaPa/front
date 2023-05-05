import React from "react";
import styled from "styled-components";

interface GamePlayerBoxProps {
  imagePath?: string;
  playerName?: string;
}

/*const Box = styled.div<GamePlayerBoxProps>`
  font-family: Bouncy;
  font-size: 36px;
  background-color: ${(props) => {
    if (props.imagePath) {
      return;
    }
  }};
  border-radius: 25px;
  width: 320px;
  height: 290px;
  align-items: center;
  flex-direction: column;
  display: flex;
`;*/

const GamePlayerBox = (props: GamePlayerBoxProps) => {
  const { imagePath, playerName } = props;
  if (playerName) {
    return (
      <div className="occupied">
        <img src={imagePath}></img>
        <div>{playerName}</div>
      </div>
    );
  }
  return (
    <div className="vacant">
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvU39g%2Fbtr7hSO7dGu%2F7BfyRmVjkstGJQVpq2UQSk%2Fimg.png"></img>
      <div>wating ...</div>
    </div>
  );
};

export default GamePlayerBox;
