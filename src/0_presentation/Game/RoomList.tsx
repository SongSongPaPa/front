import RoomListItem from "../components/common/RoomListItem";
import { gameRoomListState } from "@root/2_domain/recoil/gameAtom";
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
  const rooms = useRecoilValue(gameRoomListState);
  return (
    <RoomListWrapper>
      {rooms.length === 0 ? (
        <h1>텅...</h1>
      ) : (
        rooms.map((room) => <RoomListItem key={room.gameId} roomId={room.gameId} name={room.name} isGame={true} />)
      )}
    </RoomListWrapper>
  );
};

export default RoomList;
