import { User } from "./User";
import { Chat } from "./Chat";
import { Message } from "./Chat";

export interface IChatRepository {
  createChatRoom(user: User, chat: Chat): void;
  //joinChatRoom(user: User, chat: Chat): void;
  //leaveChatRoom(user: User, chat: Chat): void;
  //inviteToRoom(user: User, chat: Chat, invitedUser: User): void;
  sendMessage(user: User, message: Message): void;
  onMessageReceived(chat: Chat, callback: (message: Message) => void): void;
}
