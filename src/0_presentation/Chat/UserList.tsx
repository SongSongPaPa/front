import UserListItem from "../components/common/UserListItem";
import { userListState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";

import { PublicUserInfo } from "@root/2_domain/User";
const sample: PublicUserInfo[] = [
  {
    id: 1,
    profile: "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    nickname: "aaa",
    state: "online",
  },
  {
    id: 2,
    profile: "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    nickname: "a",
    state: "offline",
  },
  {
    id: 3,
    profile: "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
    nickname: "a",
    state: "ingame",
  },
];
const UserList = () => {
  //const users = useRecoilValue(userListState);
  const users = sample;
  return (
    <div>
      {users.map((user, index) => (
        <UserListItem key={index} userId={user.id} role={user.state} profile={user.profile} nickname={user.nickname} />
      ))}
    </div>
  );
};

export default UserList;
