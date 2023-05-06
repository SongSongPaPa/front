import React, { useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import useUserService from "@root/1_application/useUserService";
import useModal from "@root/1_application/useModal";

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
    if (props.state === "ingame") return "#fbe38f";
    else if (props.state === "offline") return "#e9e9e9";
    else return "#bfff8c";
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

const Image = styled.img`
  width: 32px;
  height: 32px;
`;

const UserListItem = ({ userId, profile, nickname, role, state }: UserListItemProps) => {
  const { getUserProfileById } = useUserService();
  const { showModal } = useModal();
  const handleItemClick = () => {
    try {
      getUserProfileById(userId);
    } catch (error) {
      console.log(error);
    }

    showModal({ modalType: "UserProfileModal" });
  };
  return (
    <Button name="user-banner" onClick={handleItemClick}>
      <Image src={profile} />
      {role && <Icon role={role} />}
      <span>{nickname}</span>
      {state && <Dot state={state} />}
    </Button>
  );
};

export default UserListItem;
