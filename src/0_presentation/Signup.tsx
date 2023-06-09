import useUserService from "@root/1_application/useUserService";
import { meState } from "@root/2_domain/recoil/userAtom";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const Signup = () => {
  //const [profile, setProfile] = useRecoilState(meState);
  const profile = useRecoilValue(meState);
  const [nickname, setNickname] = useState("");
  const [base64, setBase64] = useState("");
  const { signUp } = useUserService();

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
    <SignupWrapper>
      <Image src={profile.profile} />
      <input type="file" accept="image/*" onChange={handleOnImageFileChange} />
      <form onSubmit={handleOnSubmit}>
        <label>NICKNAME:</label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <button type="submit">제출</button>
      </form>
    </SignupWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.4);
  gap: 10px;
  border-radius: 25px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
