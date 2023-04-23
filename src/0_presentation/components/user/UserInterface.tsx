import React, { useState } from "react";
import ToggleButton from "../common/ToggleButton";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "./UserInterface.css";
import { useRecoilState } from "recoil";
import { UserListState } from "@domain/recoil/test";

const UserInterface = () => {
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

export default UserInterface;
