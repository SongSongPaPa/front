import React, { useEffect } from "react";
import useUserService from "@root/1_application/useUserService";
import { useRecoilValue } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";
import Input from "../components/common/Input";

const Profile = () => {
  const { getMyProfile } = useUserService();
  const profile = useRecoilValue(meState);
  useEffect(() => {
    getMyProfile();
  }, []);
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <li>
        <p>{profile.name}</p>
        <p>{profile.level}</p>
        <Input name="default" type="flle" accept="image/*" />
        <input type="file" accept="image/*" />
      </li>
    </div>
  );
};

export default Profile;
