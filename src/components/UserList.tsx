import React from "react";
import UserBanner, { UserBannerProps } from "./UserBanner";
import "./UserInfo.css";

interface UserListProps {
  users: UserBannerProps[];
}

const UserList = ({ users }: UserListProps) => {
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
