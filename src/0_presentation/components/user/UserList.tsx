import React from "react";
import UserBanner from "../common/UserBanner";
import "./UserInfo.css";
import { useRecoilState } from "recoil";
import { FilteredUserItemState } from "@domain/recoil/test";

const UserList = () => {
  const [filteredUsers, setFilteredUsers] = useRecoilState(
    FilteredUserItemState
  );
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
      {filteredUsers.map((user) => (
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
