import React from "react";
import Button from "./components/common/Button";
import UserList from "./User/UserList";

const TestUI = () => {
  return (
    <div>
      <Button name="lobby-small-common">hi</Button>
      <Button name="user-banner" onClick={() => alert("hi")}>
        <img src="https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png" />
        <span>asdf</span>
        <div></div>
      </Button>
      <Button name="watch-game">watch</Button>
      <h1>User List</h1>
      <UserList></UserList>
    </div>
  );
};

export default TestUI;
