import { meState, userSelector } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const StyledGameLog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface GameLogProps {
  winner: string;
  looser: string;
  score: number;
}

const GameLog = ({ winner, looser, score }: GameLogProps) => {
  return (
    <StyledGameLog>
      <div>{winner}</div>
      <div>{looser}</div>
      <div>{score}</div>
    </StyledGameLog>
  );
};

const GameLogs = () => {
  const me = useRecoilValue(meState);
  console.log("meinfo", me);

  if (!me) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {me.gameHistory.map((log) => (
        <GameLog key={log.id} winner={log.winner} looser={log.looser} score={log.score} />
      ))}
    </div>
  );
};

export default GameLogs;
