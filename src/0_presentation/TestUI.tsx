import React from "react";
import Button from "./components/common/Button";
import UserList from "./User/UserList";
import ChatUserList from "./Chat/UserList";
import ChatRoomList from "./Chat/RoomList";
import GameRoomList from "./Game/RoomList";

const TestUI = () => {
  return (
    <div>
      <Button name="lobby-small-common">hi</Button>
      <Button name="user-banner" onClick={() => alert("hi")}>
        <img src="https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png" />
        <span>asdf</span>
        <div></div>
      </Button>
      <h1>User List</h1>
      <ChatUserList></ChatUserList>
      <UserList></UserList>
      <h1>Room List</h1>
      <ChatRoomList></ChatRoomList>
      <GameRoomList></GameRoomList>
    </div>
  );
};

export default TestUI;
