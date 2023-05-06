import UserListItem from "../components/common/UserListItem";
import { chatUserListState, meState } from "@root/2_domain/recoil/userAtom";
import { useRecoilValue } from "recoil";
import { chatState } from "@root/2_domain/recoil/chatAtom";

const UserList = () => {
  const users = useRecoilValue(chatUserListState);
  const me = useRecoilValue(meState);
  const chatInfo = useRecoilValue(chatState);
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <UserListItem
          key={user.id}
          userId={user.id}
          role={user.state}
          profile={user.profile}
          nickname={user.nickname}
          enableRightClick={chatInfo.adminId === me.id || chatInfo.ownerId === me.id}
        />
      ))}
    </div>
  );
};

export default UserList;
