import React from "react";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";
import useUserService from "@root/1_application/useUserService";
import "./teststyle.css";

const TestPage = () => {
  const { createChatRoom } = useChatService();
  const { updateDisplayName, updateImage, followUser, unfollowUser, blockUser } = useUserService();
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <div>
      <p>
        <button className="test" onClick={createChatRoom}>
          Create Chat
        </button>
      </p>
      <div className="test">
        <a href={process.env.REACT_APP_API_URL + "/auth/login"}>login</a>
      </div>
      <div className="room-container">
        {rooms.map((room, index) => (
          <p key={index}>{room.title}asdf</p>
        ))}
      </div>
      <p>
        <button className="test" onClick={() => updateDisplayName("test")}>
          Change Name
        </button>
      </p>
      <p>
        <button className="test" onClick={() => updateImage(1, "test")}>
          Change Image
        </button>
      </p>
      <p>
        <button className="test" onClick={() => followUser(2)}>
          Follow User
        </button>
      </p>
      <p>
        <button className="test" onClick={() => unfollowUser(2)}>
          Unfollow User
        </button>
      </p>
      <p>
        <button className="test" onClick={() => blockUser(3)}>
          Block User
        </button>
      </p>
    </div>
  );
};

export default TestPage;
