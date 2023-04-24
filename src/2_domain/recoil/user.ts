import { atom } from "recoil";

type UserStatusType = "ONLINE" | "OFFLINE" | "INGAME";

type ChatUserRoleType = "ADMIN" | "STAFF" | "GENERAL";

export interface UserItem {
  name: string;
  imagePath: string;
  status: UserStatusType;
}

interface ChatUserItem {
  name: string;
  imagePath: string;
  role: ChatUserRoleType;
}

export const userItemState = atom<UserItem[]>({
  key: "useritem",
  default: [],
});

export const chatUserItemState = atom<ChatUserItem[]>({
  key: "chatuseritem",
  default: [],
});
