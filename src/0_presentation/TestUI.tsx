import React from "react";
import Button from "./components/common/Button";
import UserList from "./User/UserList";
import ChatUserList from "./Chat/UserList";
import ChatRoomList from "./Chat/RoomList";
import GameRoomList from "./Game/RoomList";
import Input from "./components/common/Input";
import ToggleButton from "./User/ToggleButton";
import UserInterface from "./User/UserInterface";

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
      <h1>Input</h1>
      <Input name="search" placeholder="search"></Input>
      <h1>Toggle Button</h1>
      <ToggleButton onText="on" offText="off"></ToggleButton>
      <h1>User Interface</h1>
      <UserInterface />
    </div>
  );
};

export default TestUI;
