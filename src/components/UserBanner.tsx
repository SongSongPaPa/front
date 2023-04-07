import React from "react";
import ModalButton from "./ModalButton";
import useModal from "../hooks/useModal";
import { UserStatusType } from "../recoil/test";

interface UserBannerProps {
  className: string;
  content: JSX.Element[];
}

const UserBanner = (props: UserBannerProps) => {
  const { className, content } = props;
  const { showModal } = useModal();
  const handleClickAlertModal = () => {
    showModal({ modalType: "AlertModal" });
  };
  return (
    <div>
      <ModalButton
        className={className}
        onClick={handleClickAlertModal}
        content={[...content]}
      ></ModalButton>
    </div>
  );
};

export default UserBanner;
