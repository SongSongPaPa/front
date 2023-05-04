import RoomListItem from "../components/common/RoomListItem";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const RoomListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 30px;
  position: absolute;
  top: 40px;
`;

const RoomList = () => {
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <RoomListWrapper>
      {rooms.map((room, index) => (
        <RoomListItem
          key={index}
          roomId={room.chatId}
          name={room.name}
          headCount={room.users ? room.users.length : 0}
          isGame={true}
        />
      ))}
    </RoomListWrapper>
  );
};

export default RoomList;
