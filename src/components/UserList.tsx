import React from "react";
import UserBanner from "./UserBanner";
import "./UserInfo.css";
import { useRecoilState } from "recoil";
import { UserItemState } from "../recoil/test";

const UserList = () => {
  const [users, setUsers] = useRecoilState(UserItemState);
  const getDotColor = (status: string): string => {
    if (status === "ONLINE") {
      return "dot-green";
    } else if (status === "OFFLINE") {
      return "dot-gray";
    } else if (status === "INGAME") {
      return "dot-yellow";
    }
    return "";
  };
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserBanner
          className="user-banner"
          content={[
            <img src={user.imagePath} />,
            <span>{user.name}</span>,
            <div className={getDotColor(user.status)}></div>,
          ]}
        />
      ))}
    </div>
  );
};

export default UserList;
