import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "./UserInfo.css";

const UserInfo = () => {
  const [selected, setSelected] = useState(false);
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
      <UserList></UserList>
    </div>
  );
};

export default UserInfo;
