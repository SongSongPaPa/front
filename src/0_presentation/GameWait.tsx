import GameContainer from "./Game/GameContainer";
import UserInterface from "./User/UserInterface";
import { PageWrapper, RoomWrapper, UserInterfaceWrapper } from "./PageStyle";

const GameWait = () => {
  return (
    <PageWrapper>
      <RoomWrapper>
        <GameContainer />
      </RoomWrapper>
      <UserInterfaceWrapper>
        <UserInterface />
      </UserInterfaceWrapper>
    </PageWrapper>
  );
};

export default GameWait;
