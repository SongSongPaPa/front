import React from "react";
import { PublicUserInfo } from "@domain/User";
import Button from "../components/common/Button";
import styled from "styled-components";

interface DotProp {
  state: string;
}

const Dot = styled.div<DotProp>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => {
    if (props.state === "online") return "#bfff8c";
    else if (props.state === "offline") return "#e9e9e9";
    else return "#fbe38f";
  }};
  border-radius: 50%;
  border: none;
`;

const UserItem = (props: PublicUserInfo) => {
  const { nickname, state, profile } = props;
  return (
    <Button name="user-banner">
      <img src={profile} />
      <span>{nickname}</span>
      <Dot state={state}></Dot>
    </Button>
  );
};

export default UserItem;
