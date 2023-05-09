import { meState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const StyledGameLog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GameLogs = () => {
  const me = useRecoilValue(meState);

  if (!me) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {me.gameHistory.map((log) => (
        <StyledGameLog key={log.id}>
          <div>{log.id}</div>
          <div>{log.winnerId}</div>
          <div>{log.looserId}</div>
          <div>{log.score}</div>
        </StyledGameLog>
      ))}
    </div>
  );
};

export default GameLogs;
