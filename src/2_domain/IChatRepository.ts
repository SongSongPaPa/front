import { PublicUserInfo } from "./User";
import { PublicChatInfo } from "./Chat";

export interface IChatRepository {
  createChatRoom(): void;
}
