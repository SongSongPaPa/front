import React from "react";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";

const TestSocket = () => {
  const { createChatRoom } = useChatService();
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <div>
      <button onClick={createChatRoom}>gogo</button>
      <a href={process.env.REACT_APP_API_URL + "/auth/login"}>login</a>
      <div className="room-container">
        {rooms.map((room, index) => (
          <p key={index}>{room.title}asdf</p>
        ))}
      </div>
    </div>
  );
};

export default TestSocket;
