export interface UserDto {
  id: number;
  name: string;
  nickname: string;
  twoFactor: boolean;
  twoFactorUid: string;
  profile: string;
  firstAccess: boolean;
}

export interface UserLog {
  name: string;
  nickname: string;
  twoFactor: boolean;
  twoFactorUid: string;
  profile: string;
}

export interface UserAchievementDto {
  achivementTitle: string;
  isDone: boolean;
}

export interface UserDetailDto {
  name: string;
  nickname: string;
  twoFactor: boolean;
  twoFactorUid: string;
  profile: string;
  level: number;
  firstAccess: boolean;

  friends: UserDto[];
  blocks: UserDto[];
  winPercent: number;
  userLogs: UserLog[];
  achivements: UserAchievementDto[];
}

export interface UserAccessDto {
  displayName: string;
  email: string;
  firstAccess?: boolean;
  twoFactor: boolean;
}
