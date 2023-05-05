import React from "react";
import GamePlayerBox from "./GamePlayerBox";
import styled from "styled-components";

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
  return (
    <Wrapper>
      <GamePlayerBox />
      <GamePlayerBox />
    </Wrapper>
  );
};

export default GameContainer;
