import React from "react";
import ModalButton from "../common/ModalButton";
import useModal from "@application/hooks/useModal";
import ChatRoomPopover from "../modals/ChatRoomPopover";
import { useState } from "react";

interface UserInfoProps {
  className: string;
  content: JSX.Element[];
  enableRightClick?: boolean;
}

const UserInfo = (props: UserInfoProps) => {
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

export default UserInfo;
