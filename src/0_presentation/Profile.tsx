import React, { useEffect } from "react";
import useUser from "@application/useUser";
import { useRecoilState } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";

const Profile = () => {
  const { getMyProfile, getUserProfileById } = useUser();
  const [me, setMe] = useRecoilState(meState);

  useEffect(() => {
    getMyProfile();
  }, []);

  if (!me) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <li>
        <p>{me.achievements}</p>
        <p>{me.level}</p>
        <p>{me.name}</p>
        <p>{me.twoFactor}</p>
        <p>{me.twoFactorUid}</p>
      </li>
    </div>
  );
};

export default Profile;
