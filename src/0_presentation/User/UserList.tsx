import UserItem from "../components/common/UserListItem";
import { userListState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";

import { PublicUserInfo } from "@root/2_domain/User";
const sample: PublicUserInfo[] = [
  {
    id: 1,
    profile: "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    nickname: "a",
    state: "online",
  },
  {
    id: 2,
    profile: "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    nickname: "b",
    state: "offline",
  },
  {
    id: 3,
    profile: "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    nickname: "c",
    state: "ingame",
  },
];
const UserList = () => {
  //const users = useRecoilValue(userListState);
  const users = sample;
  return (
    <div>
      {users.map((user, index) => (
        <UserItem key={index} userId={index} profile={user.profile} nickname={user.nickname} state={user.state} />
      ))}
    </div>
  );
};

export default UserList;
