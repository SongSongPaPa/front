import React from "react";
import Profile from "./Profile";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import UserList from "./UserList";
import SearchBar from "./SearchBar";

const UserInterfaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 367px;
  height: 683px;
  border-radius: 25px;
  background-color: #fcfcfc;
  margin-left: 10px;
`;

const UserInterface = () => {
  return (
    <UserInterfaceWrapper>
      <Profile></Profile>
      <ToggleButton onText="Friend" offText="All" />
      <SearchBar></SearchBar>
      <UserList></UserList>
    </UserInterfaceWrapper>
  );
};

export default UserInterface;
