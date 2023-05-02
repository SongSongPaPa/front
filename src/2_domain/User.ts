type UserStateType = "online" | "offline" | "ingame";

export interface PublicUserInfo {
  id: number;
  nickname: string;
  state: UserStateType;
  profile: string;
}

export interface PrivateUserInfo {
  name: string;
  twoFactor: boolean;
  twoFactorUid: string;
  achievements: string[];
  level: number;
  id: number;
  friends: number[];
  blocks: number[];
}
