import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "./UserInfo.css";
import { useRecoilState } from "recoil";
import { UserListState } from "../recoil/test";

const UserInfo = () => {
  const [selected, setSelected] = useRecoilState(UserListState);
  return (
    <div className="user-box">
      <div className="user-profile"></div>
      <ToggleButton
        selected={selected}
        toggleSelected={() => {
          setSelected(!selected);
        }}
        onText="Friend"
        offText="All"
      />
      <SearchBar></SearchBar>
      <div className="user-list-container">
        <UserList></UserList>
      </div>
    </div>
  );
};

export default UserInfo;
