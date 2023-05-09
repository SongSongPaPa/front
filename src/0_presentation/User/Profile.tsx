import React, { useEffect } from "react";
import useUserService from "@root/1_application/useUserService";
import { useRecoilState, useRecoilValue } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";
import Button from "../components/common/Button";
import useModal from "@root/1_application/useModal";

const Profile = () => {
  const { getMyProfile, firstAccess } = useUserService();
  const [profile, setProfile] = useRecoilState(meState);
  const { showModal } = useModal();
  const handleCilckSetting = () => {
    showModal({ modalType: "UserSettingModal" });
  };
  useEffect(() => {
    async function func() {
      const data = await getMyProfile();
      if (data === null) {
        console.log("잠시 서버가 아프니 좀따 오시오");
        return;
      }
      setProfile(data);
      if (data.firstAccess === true) {
        showModal({ modalType: "UserSettingModal" });
        firstAccess();
      }
    }
    func();
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
