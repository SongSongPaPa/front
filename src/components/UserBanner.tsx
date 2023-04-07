import React from "react";
import ModalButton from "./ModalButton";
import useModal from "../hooks/useModal";
import { UserStatusType } from "../recoil/test";
import ChatRoomPopover from "./ChatRoomPopover";
import { PopoverState } from "../recoil/test";
import { useRecoilState } from "recoil";
import { useState } from "react";

interface UserBannerProps {
  className: string;
  content: JSX.Element[];
}

const UserBanner = (props: UserBannerProps) => {
  //const [showPopover, setShowPopover] = useRecoilState(PopoverState);
  const [showPopover, setShowPopover] = useState(false);
  const { className, content } = props;
  const { showModal } = useModal();
  const handleClickAlertModal = () => {
    showModal({ modalType: "AlertModal" });
  };
  const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPopover(true);
    const userBanner = event.currentTarget as HTMLDivElement;
    console.log(userBanner);
  };
  return (
    <div onContextMenu={handleRightClick}>
      <ModalButton
        className={className}
        onClick={handleClickAlertModal}
        content={[...content]}
      ></ModalButton>
      {showPopover && <ChatRoomPopover onClose={() => setShowPopover(false)} />}
    </div>
  );
};

export default UserBanner;
