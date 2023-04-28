import { useState } from "react";

const TwoFactorPage = () => {
  const [twoFactorPassword, setTwoFactorPassword] = useState("");

  return (
    <div>
      <form>
        <h1>2차인증 비밀번호를 입력하세요</h1>
        <input
          value={twoFactorPassword}
          onChange={(e) => setTwoFactorPassword(e.target.value)}
        ></input>
        <button type="submit">ok</button>
      </form>
    </div>
  );
};

export default TwoFactorPage;
