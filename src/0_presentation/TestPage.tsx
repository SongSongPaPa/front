import React from "react";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";
import useUserService from "@root/1_application/useUserService";
import "./teststyle.css";

const TestPage = () => {
  const {
    createChat,
    updateChat,
    setAdmin,
    joinChat,
    leaveChat,
    sendMessage,
    kickUser,
    muteUser,
    sendDirectMessage,
    inviteUser,
  } = useChatService();
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
        <button onClick={() => createChat("테스트", "public", undefined)}>Create Chat</button>
      </p>
      <p>
        <button onClick={() => updateChat("테스트", "public", undefined)}>Update Chat</button>
      </p>
      <p>
        <button onClick={() => setAdmin(3)}>Set Admin</button>
      </p>
      <p>
        <button onClick={() => joinChat(1, undefined)}>Joni Chat</button>
      </p>
      <p>
        <button onClick={() => leaveChat()}>Leave Chat</button>
      </p>
      <p>
        <button onClick={() => sendMessage("메세지를 보내보자")}>Send Message</button>
      </p>
      <p>
        <button onClick={() => kickUser(1)}>Kick User 1</button>
      </p>
      <p>
        <button onClick={() => muteUser(2)}>Mute User 2</button>
      </p>
      <p>
        <button onClick={() => sendDirectMessage(5, "hi this is dm")}>DM to 5</button>
      </p>
      <p>
        <button onClick={() => inviteUser(5)}>Invite User 5</button>
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
