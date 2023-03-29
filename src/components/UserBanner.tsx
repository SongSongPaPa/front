import React from "react";
import SocketButton from "./SocketButton";

export interface UserBannerProps {
  imagePath: string;
  name: string;
  status?: boolean;
}

const UserBanner = (props: UserBannerProps) => {
  const { imagePath, name, status } = props;
  return (
    <div className="banner-container">
      <SocketButton text={name} className="user-banner">
        <img src={imagePath}></img>
      </SocketButton>
    </div>
  );
};

export default UserBanner;
