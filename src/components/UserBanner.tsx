import React from "react";
import ModalButton from "./ModalButton";
import useModal from "../hooks/useModal";
import { UserStatusType } from "../recoil/test";

interface UserBannerProps {
  imagePath: string;
  name: string;
  status: UserStatusType;
}

const UserBanner = (props: UserBannerProps) => {
  const { imagePath, name, status } = props;
  const { showModal } = useModal();
  const handleClickAlertModal = () => {
    showModal({ modalType: "AlertModal" });
  };
  let dotClass = "";
  if (status === "ONLINE") {
    dotClass = "dot-green";
  } else if (status === "OFFLINE") {
    dotClass = "dot-gray";
  } else if (status === "INGAME") {
    dotClass = "dot-yellow";
  }
  return (
    <div>
      <ModalButton
        className="user-banner"
        onClick={handleClickAlertModal}
        content={[
          <img src={imagePath} />,
          name,
          <div className={dotClass}></div>,
        ]}
      ></ModalButton>
    </div>
  );
};

export default UserBanner;
