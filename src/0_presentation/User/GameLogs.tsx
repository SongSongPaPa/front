import { meState, userSelector } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface GameLogProps {
  winner: string;
  looser: string;
  score: number;
}

const GameLog = ({ winner, looser, score }: GameLogProps) => {
  return (
    <StyledGameLog>
      <div>{winner} : </div>
      <div>{score >> 4}</div>
      <div>........VS........</div>
      <div>{looser} : </div>
      <div>{score & 0b00001111}</div>
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
    <GameLogWrapper>
      {me.gameHistory.map((log) => (
        <GameLog key={log.id} winner={log.winner} looser={log.looser} score={log.score} />
      ))}
    </GameLogWrapper>
  );
};

export default GameLogs;

const StyledGameLog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GameLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
  height: 200px;
  overflow-y: scroll;
  gap: 5px;
`;
