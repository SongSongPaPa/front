import React from "react";
import { useRecoilValue } from "recoil";
import { filteredUserListState } from "@root/2_domain/recoil/userAtom";
import { useState } from "react";
import { PublicUserInfo } from "@root/2_domain/User";
import Input from "../components/common/Input";

const SearchBar = () => {
  const userList = useRecoilValue(filteredUserListState);
  const [users, setUsers] = useState<PublicUserInfo[]>(userList);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filteredList = users.filter((user) => user.nickname.toLowerCase().includes(event.target.value.toLowerCase()));
    if (query) {
      setUsers(filteredList);
    } else {
      setUsers(userList);
    }
  };

  return <Input name="search" placeholder="search" onChange={handleChange}></Input>;
};

export default SearchBar;
