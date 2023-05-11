import RoomListItem from "../components/common/RoomListItem";
import { gameRoomListState } from "@root/2_domain/recoil/gameAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const RoomList = () => {
  const rooms = useRecoilValue(gameRoomListState);
  return (
    <RoomListWrapper>
      {rooms.length === 0 ? (
        <Empty>텅...</Empty>
      ) : (
        rooms.map((room) => <RoomListItem key={room.gameId} roomId={room.gameId} name={room.name} isGame={true} />)
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
