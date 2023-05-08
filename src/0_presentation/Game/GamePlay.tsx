import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import GameRepository from "@root/3_infrastructure/GameRepository";
import Box, { BACKGROUND, BALL, PLAYER } from "./GameBox";
import { meState } from "@root/2_domain/recoil/userAtom";
import { gamingState, readyGameState } from "@root/2_domain/recoil/gameAtom";

/* size */
const ROW_SIZE: number = 10;
const COL_SIZE: number = 20;

/* paddle */
const PADDLE_BOARD_SIZE: number = 3;
const PADDLE_EDGE_SPACE: number = 1;

/* buttons */
const PLAYER_UP: number = 38; // up arrow
const PLAYER_DOWN: number = 40; // down arrow
const PAUSE: number = 32; // space

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const Score = styled.div`
  font-size: 50px;
  color: red;
`;

const style = {
  width: "250px",
  heigth: "250px",
  display: "grid",
  gridTemplate: `repeat(${ROW_SIZE}, 1fr) / repeat(${COL_SIZE}, 1fr)`,
};

const GamePlay = () => {
  const gameDoing = useRef(null);

  const me = useRecoilValue(meState);
  const gameInfo = useRecoilValue(gamingState);
  const roundCount = useRecoilValue(readyGameState);
  const [playerA, setPlayerA] = useState(gameInfo.players[0]);
  const [playerB, setPlayerB] = useState(gameInfo.players[1]);

  useEffect(() => {
    setPlayerA(gameInfo.players[0]);
    setPlayerB(gameInfo.players[1]);
    console.log(gameInfo);
  }, [gameInfo]);

  const handleKeyInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const keyCode = e.keyCode;
    const myIdx = gameInfo.players.findIndex((user) => user.userId === me.id);

    if (myIdx === -1 || (keyCode !== 40 && keyCode !== 38)) return;

    GameRepository.movePaddle(keyCode);
  };

  const board = [...Array(ROW_SIZE * COL_SIZE)].map((_, position) => {
    let val = BACKGROUND;
    if (gameInfo.players.filter((player) => player.position.indexOf(position) !== -1).length > 0) {
      val = PLAYER;
    } else if (gameInfo.ball.position === position) {
      val = BALL;
    }
    return <Box key={position} k={position} name={val} />;
  });

  return (
    <Column
      onClick={(e) => {
        const { current }: any = gameDoing;
        current.focus();
      }}
    >
      {!gameInfo.onRound ? (
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            textAlign: "center",
            backgroundColor: "#fff",
            top: "50%",
            left: "50%",
          }}
        >
          <h1 style={{ color: "black" }}>{roundCount}</h1>
        </div>
      ) : (
        <></>
      )}
      <input
        style={{
          border: "none",
          cursor: "default",
          textAlign: "center",
          outline: "none",
          backgroundColor: "transparent",
        }}
        onKeyDown={handleKeyInput}
        readOnly
        ref={gameDoing}
      ></input>
      <Row>
        {playerA ? <Score>{playerA.score}</Score> : <Score>0</Score>}
        {playerB ? <Score>{playerB.score}</Score> : <Score>0</Score>}
      </Row>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "justify",
          textSizeAdjust: "100px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "justify",
          }}
        >
          <div style={style}>{board}</div>
        </div>
        <h3> {"press up and down to move"} </h3>
      </div>
    </Column>
  );
};

export default GamePlay;
