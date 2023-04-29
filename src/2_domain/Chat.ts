import { PublicUserInfo } from "./User";

export type ChatType = "PUBLIC" | "PRIVATE" | "PROTECTED";

export interface PublicChatInfo {
  id: number;
  title: string;
  mode: ChatType;
  owner: PublicUserInfo;
  admin: PublicUserInfo;
}

export interface InnerChatInfo {
  participants: PublicUserInfo[];
  kicked: PublicUserInfo[];
  muted: PublicUserInfo[];
  password?: string;
}
