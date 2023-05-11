import React, { useEffect } from "react";
import useUserService from "@root/1_application/useUserService";
import { useRecoilState } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";
import useModal from "@root/1_application/useModal";
import styled from "styled-components";
import { IoIosSettings } from "react-icons/io";

const Profile = () => {
  const { getMyProfile } = useUserService();
  const [profile] = useRecoilState(meState);
  const { showModal } = useModal();
  const handleCilckSetting = () => {
    showModal({ modalType: "UserSettingModal" });
  };
  useEffect(() => {
    getMyProfile();
  }, []);
  if (profile.id === 0) {
    return <ProfileWrapper>Loading...</ProfileWrapper>;
  }
  //console.log("me information", profile);
  return (
    <ProfileWrapper>
      <ProfileImage src={profile.profile} />
      <div>{profile.nickname}</div>
      <div>Lv.{profile.level}</div>
      <IoIosSettings onClick={handleCilckSetting} size={30} />
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 367px;
  height: 150px;
  > svg {
    position: relative;
    cursor: pointer;
    align-self: flex-end;
    right: 30px;
    color: #707070;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0.5px solid #d9d9d9;
`;
