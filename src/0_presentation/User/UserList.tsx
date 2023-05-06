import UserItem from "../components/common/UserListItem";
import { filteredUserListState, meState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";

const UserList = () => {
  const users = useRecoilValue(filteredUserListState);
  const me = useRecoilValue(meState);
  return (
    <div>
      {users.map((user) => {
        console.log("userlist me: ", me);
        if (me === undefined) {
          return;
        }
        if (me.id === user.id) {
          return <div />;
        }
        return (
          <UserItem key={user.id} userId={user.id} profile={user.profile} nickname={user.nickname} state={user.state} />
        );
      })}
    </div>
  );
};

export default UserList;
