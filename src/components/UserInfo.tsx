import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "./UserInfo.css";

const items = [
  {
    imagePath:
      "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    name: "sohan",
    status: true,
  },
  {
    imagePath:
      "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    name: "seunpark",
    status: true,
  },
  {
    imagePath:
      "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    name: "seonkim",
    status: true,
  },
];

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
      <UserList users={items}></UserList>
    </div>
  );
};

export default UserInfo;
