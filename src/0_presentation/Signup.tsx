import useUserService from "@root/1_application/useUserService";
import { meState } from "@root/2_domain/recoil/userAtom";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const myInfo = useRecoilValue(meState);
  const [nickname, setNickname] = useState("");
  const [base64, setBase64] = useState(myInfo.profile);
  const [isDuplicate, setIsDuplicate] = useState(true);
  const { doubleCheckNickname, firstAccess } = useUserService();
  const navigate = useNavigate();

  const handleOnImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (curr) => {
      setBase64(curr.target!.result as string);
      //updateImage(base64 as string); 똑같은 거 쓰는거면 이걸로 ㄱㄱ
    };
  };

  const handleClickDoubleCheck = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const isDuplicated = await doubleCheckNickname(nickname);
    if (isDuplicated) {
      alert("중복된 닉네임입니다.");
    } else {
      event.currentTarget.disabled = true;
      event.currentTarget.style.color = "#e5e5e5";
      event.currentTarget.style.background = "#4b5563";
      setIsDuplicate(false);
    }
  };

  const handleOnSubmit = async () => {
    await firstAccess();
    //signup(nickname, base64);
    navigate("/lobby");
  };

  return (
    <div>
      <img src={myInfo.profile} />
      <input type="file" accept="image/*" onChange={handleOnImageFileChange} />
      <form onSubmit={handleOnSubmit}>
        <label>닉네임</label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <button onClick={handleClickDoubleCheck}>중복확인</button>
        <button type="submit" disabled={isDuplicate}>
          제출
        </button>
      </form>
    </div>
  );
};

export default Signup;
