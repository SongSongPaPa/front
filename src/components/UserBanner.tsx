import React from "react";
import ModalButton from "./ModalButton";

export interface UserBannerProps {
  imagePath: string;
  name: string;
  status?: boolean;
}

const UserBanner = (props: UserBannerProps) => {
  const { imagePath, name, status } = props;
  return (
    <div className="banner-container">
      <ModalButton text={name} className="user-banner">
        <img src={imagePath}></img>
      </ModalButton>
    </div>
  );
};

export default UserBanner;
