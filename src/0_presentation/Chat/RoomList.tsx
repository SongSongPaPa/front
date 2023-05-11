import RoomListItem from "../components/common/RoomListItem";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const RoomList = () => {
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <RoomListWrapper>
      {rooms.length === 0 ? (
        <Empty>텅...</Empty>
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

const RoomListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 30px;
  position: relative;
  top: 40px;
`;

const Empty = styled.div`
  display: flex;
  position: absolute;
  font-size: 50px;
  top: 100px;
  left: 370px;
`;
