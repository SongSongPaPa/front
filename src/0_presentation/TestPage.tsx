import React from "react";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";
import useUserService from "@root/1_application/useUserService";
import "./teststyle.css";

const TestPage = () => {
  const { createChatRoom } = useChatService();
  const { getMyProfile, getUserProfileById, updateDisplayName, updateImage, followUser, unfollowUser, blockUser } =
    useUserService();
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <div>
      <h1>Login</h1>
      <p>
        <a href={process.env.REACT_APP_API_URL + "/auth/login"}>login</a>
      </p>
      <h1>Chat</h1>
      <p>
        <button onClick={createChatRoom}>Create Chat</button>
      </p>
      <div className="room-container">
        {rooms.map((room, index) => (
          <p key={index}>{room.name}asdf</p>
        ))}
      </div>
      <h1>User</h1>
      <p>
        <button onClick={getMyProfile}>My Profile</button>
      </p>
      <p>
        <button onClick={() => getUserProfileById(1)}>Other Profile</button>
      </p>
      <p>
        <button
          onClick={() => {
            console.log("changename");
            updateDisplayName("test");
          }}
        >
          Change Name
        </button>
      </p>
      <p>
        <button onClick={() => updateImage("123123", "test")}>Change Image</button>
      </p>
      <p>
        <button onClick={() => followUser(2)}>Follow User</button>
      </p>
      <p>
        <button onClick={() => unfollowUser(2)}>Unfollow User</button>
      </p>
      <p>
        <button onClick={() => blockUser(3)}>Block User</button>
      </p>
    </div>
  );
};

export default TestPage;
