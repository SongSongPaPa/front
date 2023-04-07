import React from "react";
import UserBanner from "./UserBanner";
import "./UserInfo.css";
import { useRecoilState } from "recoil";
import { UserItemState } from "../recoil/test";

const UserList = () => {
  const [users, setUsers] = useRecoilState(UserItemState);
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserBanner
          imagePath={user.imagePath}
          name={user.name}
          status={user.status}
        />
      ))}
    </div>
  );
};

export default UserList;
