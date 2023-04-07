import React from "react";
import ModalButton from "./ModalButton";
import useModal from "../hooks/useModal";
import ChatRoomPopover from "./ChatRoomPopover";
import { useState } from "react";

interface UserBannerProps {
  className: string;
  content: JSX.Element[];
  enableRightClick?: boolean;
}

const UserBanner = (props: UserBannerProps) => {
  const [showPopover, setShowPopover] = useState(false);
  const { className, content, enableRightClick = false } = props;
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
    <div onContextMenu={enableRightClick ? handleRightClick : undefined}>
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
