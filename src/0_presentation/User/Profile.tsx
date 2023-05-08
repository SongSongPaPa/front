import React, { useEffect } from "react";
import useUserService from "@root/1_application/useUserService";
import { useRecoilValue } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";
import Button from "../components/common/Button";
import useModal from "@root/1_application/useModal";

const Profile = () => {
  const { getMyProfile } = useUserService();
  const profile = useRecoilValue(meState);
  const { showModal } = useModal();
  const handleCilckSetting = () => {
    showModal({ modalType: "UserSettingModal" });
  };
  useEffect(() => {
    getMyProfile();
  }, []);
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <li>
        <p>{profile.nickname}</p>
        <p>{profile.level}</p>
        <Button name="" onClick={handleCilckSetting}>
          gogo
        </Button>
      </li>
    </div>
  );
};

export default Profile;
