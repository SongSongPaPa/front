import useUserService from "@root/1_application/useUserService";
import { meState } from "@root/2_domain/recoil/userAtom";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //const [profile, setProfile] = useRecoilState(meState);
  const profile = useRecoilValue(meState);
  const [nickname, setNickname] = useState("");
  const [base64, setBase64] = useState("");
  const { signUp } = useUserService();
  const navigate = useNavigate();

  const handleOnImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (curr) => {
      setBase64(curr.target!.result as string);
      //const base64 = curr.target!.result as string;
      //updateImage(base64 as string);
    };
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await signUp(nickname, base64);
    if (success) {
      window.open("/lobby", "_self");
    }
  };

  return (
    <div>
      <img src={profile.profile} />
      <input type="file" accept="image/*" onChange={handleOnImageFileChange} />
      <form onSubmit={handleOnSubmit}>
        <label>닉네임</label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Signup;
