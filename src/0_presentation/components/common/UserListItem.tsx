import React, { useEffect, useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import useUserService from "@root/1_application/useUserService";
import useModal from "@root/1_application/useModal";
import { UserStateType } from "@root/2_domain/User";
import { useRecoilValue } from "recoil";
import { detailState } from "@root/2_domain/recoil/userAtom";
import Popover from "@root/0_presentation/Chat/Popover";
import { AiTwotoneCrown } from "react-icons/ai";

interface UserListItemProps {
  userId: number;
  profile: string;
  nickname: string;
  role?: string;
  state?: UserStateType;
  enableRightClick?: boolean;
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

const IconWrap = styled.div<IconProp>`
  cursor: pointer;
  width: 12px;
  height: 9px;
  position: relative;
  display: flex;
  color: ${(props) => {
    if (props.role === "owner") return "#fbe38f";
    else if (props.role === "admin") return "#e9e9e9";
    else return "#ffffff";
  }};
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
`;

const UserListItem = ({ userId, profile, nickname, role, state, enableRightClick = false }: UserListItemProps) => {
  const { getUserProfileById } = useUserService();
  const [showPopover, setShowPopover] = useState(false);
  const other = useRecoilValue(detailState);
  const { showModal } = useModal();
  const handleItemClick = async () => {
    try {
      await getUserProfileById(userId, state!);
    } catch (error) {
      console.log(error);
    }

    showModal({ modalType: "UserProfileModal" });
  };
  const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPopover(true);
  };
  return (
    <div onContextMenu={enableRightClick ? handleRightClick : undefined}>
      <Button name="user-banner" onClick={handleItemClick}>
        <Image src={profile} />
        {role && (
          <IconWrap role={role}>
            <AiTwotoneCrown />
          </IconWrap>
        )}
        <span>{nickname}</span>
        {state && <Dot state={state} />}
      </Button>
      {showPopover && <Popover userId={userId} onClose={() => setShowPopover(false)} />}
    </div>
  );
};

export default UserListItem;
