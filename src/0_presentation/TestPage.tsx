import React from "react";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";
import useUserService from "@root/1_application/useUserService";
import { messageListState } from "@root/2_domain/recoil/messageAtom";

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
  const { getMyProfile, getUserProfileById, updateDisplayName, updateImage, followUser, blockUser, unFollowUser } =
    useUserService();

  const rooms = useRecoilValue(chatRoomListState);
  const messages = useRecoilValue(messageListState);
  return (
    <div>
      <h1>Login</h1>
      <p>
        <a href={process.env.REACT_APP_API_URL + "/auth/login"}>login</a>
      </p>
      <h1>Chat</h1>
      <p></p>
      <p>
        <button onClick={() => updateChat("테테...테슬라", "public", undefined)}>Update Chat name</button>
      </p>
      <p>
        <button onClick={() => updateChat("테테...테슬라 pro", "protected", "1234")}>
          Update Chat type protected{" "}
        </button>
      </p>
      <p>
        <button onClick={() => updateChat("테테...테슬라 pri", "private", "1234")}>Update Chat type private </button>
      </p>
      <p>
        <button onClick={() => setAdmin(1)}>Set Admin 1</button>
      </p>
      <div className="room-container">
        {rooms.map((room, index) => (
          <p key={index}>
            방ID: {room.chatId}, 이름: {room.name} 오너ID: 어드민ID:, 방타입: {room.type}
          </p>
        ))}
      </div>
      <p></p>
      <p>
        <button onClick={() => leaveChat()}>Leave Chat</button>
      </p>
      <p>
        <button onClick={() => sendMessage("메세지를 보내보자")}>Send Message</button>
      </p>
      <div className="message-container">
        {messages.map((message, index) => (
          <p key={index}>
            {message.sourceId}: {message.message}
          </p>
        ))}
      </div>
      <p>
        <button onClick={() => kickUser(1)}>Kick User 1</button>
      </p>
      <p>
        <button onClick={() => kickUser(2)}>Kick User 2</button>
      </p>
      <p>
        <button onClick={() => kickUser(3)}>Kick User 3</button>
      </p>
      <p>
        <button onClick={() => kickUser(4)}>Kick User 4</button>
      </p>
      <p>
        <button onClick={() => muteUser(1)}>Mute User 1</button>
      </p>
      <p>
        <button onClick={() => muteUser(2)}>Mute User 2</button>
      </p>
      <p>
        <button onClick={() => muteUser(3)}>Mute User 3</button>
      </p>
      <p>
        <button onClick={() => muteUser(4)}>Mute User 4</button>
      </p>
      <p>
        <button onClick={() => sendDirectMessage(5, "hi this is dm")}>DM to 5</button>
      </p>
      <p>
        <button onClick={() => inviteUser(6)}>Invite User 6</button>
      </p>

      <h1>User</h1>
      <p>
        <button onClick={getMyProfile}>My Profile</button>
      </p>
      <p></p>
      <p>
        <button
          onClick={() => {
            updateDisplayName("test");
          }}
        >
          Change Name
        </button>
      </p>
      <p></p>
      <p>
        <button onClick={() => followUser(2)}>Follow User</button>
      </p>
      <p>
        <button onClick={() => unFollowUser(2)}>Unfollow User</button>
      </p>
      <p>
        <button onClick={() => blockUser(3)}>Block User</button>
      </p>
    </div>
  );
};

export default TestPage;
