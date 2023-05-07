import React from "react";
import Button from "./components/common/Button";
import GameContainer from "./Game/GameContainer";
import { PageWrapper, RoomWrapper, UserInterfaceWrapper } from "./PageStyle";
import UserInterface from "./User/UserInterface";

const TwoFactor = () => {
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

export default TwoFactor;
