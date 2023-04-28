import { User } from "@domain/models/User";
import { useUserProfile } from "@root/1_application/hooks/useUser";
import { useEffect } from "react";
import { useState } from "react";

const Profile = () => {
  const data = useUserProfile();
  const [userProfile, setUserProfile] = useState<User>();
  useEffect(() => {
    data.then((user) => setUserProfile(user));
  }, [data]);
  if (!userProfile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <li>
        <p>{userProfile.nickname}</p>
        <p>{userProfile.twoFactor}</p>
        <p>{userProfile.profile}</p>
        <p>{userProfile.achievements}</p>
        <p>{userProfile.level}</p>
      </li>
    </div>
  );
};

export default Profile;
