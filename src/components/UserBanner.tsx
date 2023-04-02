import React from "react";
import ModalButton from "./ModalButton";
import useModal from "../hooks/useModal";

export interface UserBannerProps {
  imagePath: string;
  name: string;
  status?: boolean;
}

const UserBanner = (props: UserBannerProps) => {
  const { imagePath, name, status } = props;
  const { showModal } = useModal();
  const handleClickAlertModal = () => {
    showModal({ modalType: "AlertModal" });
  };
  return (
    <div className="banner-container">
      <ModalButton
        text={name}
        className="user-banner"
        onClick={handleClickAlertModal}
      >
        <img src={imagePath}></img>
      </ModalButton>
    </div>
  );
};

export default UserBanner;
