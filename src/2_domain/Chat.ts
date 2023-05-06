import { PublicUserInfo } from "./User";

export type ChatType = "PUBLIC" | "PRIVATE" | "PROTECTED";

export interface PublicChatInfo {
  chatId: number;
  name: string;
  type: ChatType;
}

export interface ChatInfo {
  chatId: number;
  ownerId: number;
  adminId: number;
  type: ChatType;
  name: string;
  users: number[];
}

// export interface InnerChatInfo {
//   participants: PublicUserInfo[];
//   kicked: PublicUserInfo[];
//   muted: PublicUserInfo[];
//   password?: string;
// }

export function typeConverter(str: string): ChatType {
  let type: ChatType;
  if (str === "public") {
    return "PUBLIC";
  }
  if (str === "protected") {
    return "PROTECTED";
  } else {
    return "PRIVATE";
  }
}
