import React from "react";
import SocketButton from "./SocketButton";

export interface UserBannerProps {
  imagePath: string;
  name: string;
  status: boolean;
}

const UserBanner = (props: UserBannerProps) => {
  const { imagePath, name, status } = props;
  return (
    <div>
      <SocketButton text={name} className="">
        <img src={imagePath} />
        <div></div>
      </SocketButton>
    </div>
  );
};
