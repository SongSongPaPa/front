import UserItem from "../components/common/UserListItem";
import { filteredUserListState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";

const UserList = () => {
  const users = useRecoilValue(filteredUserListState);
  return (
    <div>
      {users.map((user, index) => (
        <UserItem key={index} userId={index} profile={user.profile} nickname={user.nickname} state={user.state} />
      ))}
    </div>
  );
};

export default UserList;
