export enum UserStateType {
  ONLINE = "online",
  OFFLINE = "offline",
  IN_GAME = "inGame",
}

export interface PublicUserInfo {
  id: number;
  nickname: string;
  state: UserStateType;
  profile: string;
}

export interface UserInfo {
  id: number;
  state: UserStateType;
  name: string;
  nickname: string;
  level: number;
  profile: string;
  achievements: string[];
  friends: number[];
  blocks: number[];
}
