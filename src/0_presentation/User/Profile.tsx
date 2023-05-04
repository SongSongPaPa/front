import React, { useEffect } from "react";
import useUserService from "@root/1_application/useUserService";
import { useRecoilValue } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";

const Profile = () => {
  const { getMyProfile } = useUserService();
  const profile = useRecoilValue(meState);
  useEffect(() => {
    getMyProfile();
  });
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <li>
        <p>{profile.name}</p>
        <p>{profile.level}</p>
      </li>
    </div>
  );
};

export default Profile;
