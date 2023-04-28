type UserStatusType = "ONLINE" | "OFFLINE" | "INGAME";

export interface User {
  id: number;
  name: string;
  nickname: string;
  status: UserStatusType;
  twoFactor: boolean;
  twoFactorUid: string;
  profile: string;
  achievements: string[];
  level: number;
}
