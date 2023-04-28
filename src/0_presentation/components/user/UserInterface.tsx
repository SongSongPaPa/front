import React, { useState } from "react";
import ToggleButton from "../common/ToggleButton";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import Profile from "./Profile";
import "./UserInterface.css";
import { useRecoilState } from "recoil";
import { UserListState } from "@domain/recoil/test";

const UserInterface = () => {
  return (
    <div className="user-box">
      <Profile></Profile>
      <ToggleButton onText="Friend" offText="All" />
      <SearchBar></SearchBar>
      <div className="user-list-container">
        <UserList></UserList>
      </div>
    </div>
  );
};

export default UserInterface;
