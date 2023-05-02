import React from "react";
import { PublicUserInfo } from "@domain/User";
import Button from "../components/common/Button";
import styled from "styled-components";

interface IconProp {
  role: string;
}

const Icon = styled.div<IconProp>`
  background-image: url("/src/assets/image/gold.png");
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

const UserItem = (props: PublicUserInfo) => {
  const { nickname, role, profile } = props;
  return (
    <Button name="user-banner">
      <img src={profile} />
      <Icon role={role}></Icon>
      <span>{nickname}</span>
    </Button>
  );
};

export default UserItem;
