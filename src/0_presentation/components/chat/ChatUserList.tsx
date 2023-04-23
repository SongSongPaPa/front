import React from "react";
import { useRecoilState } from "recoil";
import { ChatUserItemState } from "@domain/recoil/test";
import UserInfo from "../user/UserInfo";

const ChatUserList = () => {
  const [users, setUsers] = useRecoilState(ChatUserItemState);

  const getCrownIcon = (role: string): string => {
    if (role === "ADMIN") {
      return "gold-crown";
    } else if (role === "STAFF") {
      return "silver-crown";
    }
    return "";
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserInfo
          className="chatuser-banner"
          content={[
            <img src={user.imagePath} />,
            <div className={getCrownIcon(user.role)}></div>,
            <span>{user.name}</span>,
          ]}
          enableRightClick={true}
        />
      ))}
    </div>
  );
};

export default ChatUserList;
