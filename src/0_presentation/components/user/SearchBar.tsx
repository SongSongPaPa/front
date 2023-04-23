import React from "react";
import { useRecoilState } from "recoil";
import {
  FilteredUserItemState,
  FriendUserItemState,
  UserItemState,
  UserListState,
} from "../../../recoil/test";
import "../common/Bar.css";
import { useEffect } from "react";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const { placeholder = "Search", onChange } = props;
  const [allUsers, setAllUsers] = useRecoilState(UserItemState);
  const [friendUsers, setFriendUsers] = useRecoilState(FriendUserItemState);
  const [selected, setSelected] = useRecoilState(UserListState);
  const [filteredUsers, setFilteredUsers] = useRecoilState(
    FilteredUserItemState
  );

  useEffect(() => {
    if (selected) {
      setFilteredUsers(friendUsers);
    } else {
      setFilteredUsers(allUsers);
    }
  }, [allUsers, friendUsers, selected]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
    const query = event.target.value.toLowerCase();
    const users = selected ? friendUsers : allUsers;
    const filteredList = users.filter((user) =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (query) {
      setFilteredUsers(filteredList);
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
