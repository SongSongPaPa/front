import { PublicUserInfo } from "./User";

export type ChatType = "PUBLIC" | "PRIVATE" | "PROTECTED";

export interface ExpiredUser {
  userId: number;
  expiredAt: number;
}

//public에 대한 데이터는 not-null
//private에 대한 내용은 nullable
//왜냐면 chatAtom에 데이터 리스트 하나로 모든걸 관리하기 위해 (중복데이터 없이 하려고)
export interface ChatInfo {
  chatId: number;
  ownerId: number;
  adminId: number;
  type: ChatType;
  name: string;
  room?: string;
  password?: string;
  users?: number[];
  kicked?: ExpiredUser[];
  muted?: ExpiredUser[];
  invited?: number[];
}

export interface InnerChatInfo {
  participants: PublicUserInfo[];
  kicked: PublicUserInfo[];
  muted: PublicUserInfo[];
  password?: string;
}

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
