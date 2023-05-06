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
      {rooms.length === 0 ? (
        <h1>텅...</h1>
      ) : (
        rooms.map((room) => (
          <RoomListItem
            key={room.chatId}
            roomId={room.chatId}
            name={room.name}
            option={room.type as string}
            isGame={false}
          />
        ))
      )}
    </RoomListWrapper>
  );
};

export default RoomList;
