import React from "react";
import Button from "./Button";
import styled from "styled-components";

interface UserListItemProps {
  userId: number;
  profile: string;
  nickname: string;
  role?: string;
  state?: string;
}

interface IconProp {
  role: string;
}

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

const Icon = styled.img<IconProp>`
  background-image: url(${(props) => {
    if (props.role === "online") return "@assets/image/gold.png";
    else if (props.role === "offline") return "'/src/assets/image/silver.png'";
    else return "@assets/image/gold.png";
  }});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fcfcfc;
  border: none;
  cursor: pointer;
  width: 12px;
  height: 9px;
  position: relative;
  display: flex;
`;

const UserListItem = ({ userId, profile, nickname, role, state }: UserListItemProps) => {
  return (
    <Button name="user-banner">
      <img src={profile} />
      {role && <Icon role={role} />}
      <span>{nickname}</span>
      {state && <Dot state={state} />}
    </Button>
  );
};

export default UserListItem;
