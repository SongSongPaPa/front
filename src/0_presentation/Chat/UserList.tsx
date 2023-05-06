import UserListItem from "../components/common/UserListItem";
import { chatUserListState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";

const UserList = () => {
  const users = useRecoilValue(chatUserListState);
  return (
    <div>
      {users.map((user, index) => (
        <UserListItem key={index} userId={user.id} role={user.state} profile={user.profile} nickname={user.nickname} />
      ))}
    </div>
  );
};

export default UserList;
