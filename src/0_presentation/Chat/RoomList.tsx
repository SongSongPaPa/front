import RoomListItem from "../RoomListItem";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { useRecoilValue } from "recoil";

const RoomList = () => {
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <div>
      {rooms.map((room, index) => (
        <RoomListItem
          key={index}
          roomId={room.chatId}
          name={room.name}
          headCount={room.users ? room.users.length : 0}
          isGame={false}
        />
      ))}
    </div>
  );
};

export default RoomList;
