import React, { useEffect } from "react";
import useUserService from "@root/1_application/useUserService";
import { useRecoilValue } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";
import Input from "../components/common/Input";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";

const Profile = () => {
  const { getMyProfile } = useUserService();
  const profile = useRecoilValue(meState);

  const handleOnImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const socket = GlobalSocket.getSocket();
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (curr) => {
      const base64 = curr.target!.result;
      socket.emit("updateImage", { image: base64 });
    };
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
        <p>{profile.name}</p>
        <p>{profile.level}</p>
        <Input name="default" type="flle" accept="image/*" />
        <input type="file" accept="image/*" onChange={handleOnImageFileChange} />
      </li>
    </div>
  );
};

export default Profile;
