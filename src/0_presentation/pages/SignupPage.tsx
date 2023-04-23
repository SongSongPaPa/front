import React from "react";
import { useState } from "react";

const SignupPage = () => {
  const [nickname, setNickname] = useState("");
  return (
    <div className="signup">
      <form>
        <label>
          Nickname:
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          ></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
