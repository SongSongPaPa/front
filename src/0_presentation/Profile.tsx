import React, { useEffect } from "react";
import useUser from "@application/useUser";
import { useRecoilValue } from "recoil";
import { meState, otherState } from "@root/2_domain/recoil/userAtom";

const Profile = () => {
  const { getMyProfile, getUserProfileById } = useUser();
  const me = useRecoilValue(meState);
  const other = useRecoilValue(otherState);

  useEffect(() => {
    getMyProfile();
    getUserProfileById(1);
  }, []);

  if (!me) {
    return <div>Loading...</div>;
  }
  if (!other) {
    console.log("no such user");
  } else {
    console.log(other);
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
