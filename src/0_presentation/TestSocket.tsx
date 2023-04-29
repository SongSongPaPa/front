import useChatService from "@root/1_application/useChatSocket";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { useRecoilValue } from "recoil";

const TestSocket = () => {
  const { createChatRoom } = useChatService();
  const rooms = useRecoilValue(chatRoomListState);
  const handleChatRoomCreate = () => {
    createChatRoom();
  };
  return (
    <div>
      <button onClick={handleChatRoomCreate}>gogo</button>
      <div className="room-container">
        {rooms.map((room, index) => (
          <p key={index}>{room.title}asdf</p>
        ))}
      </div>
    </div>
  );
};

export default TestSocket;
