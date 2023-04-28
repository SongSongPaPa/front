type UserStatusType = "ONLINE" | "OFFLINE" | "INGAME";

type Friend = {
  sourceId: number;
  targetId: number;
  sourceUser: User;
  targetUser: User;
};

type Block = {
  sourceId: number;
  targetId: number;
  sourceUser: User;
  targetUser: User;
};

type Achievement = {
  id: number;
  title: string;
};

type UserAchievement = {
  userId: number;
  achievementId: number;
  user: User;
  achievement: Achievement;
};

type GameLog = {
  id: number;
  winnerId: number;
  looserId: number;
  score: number;
  winner: User;
  looser: User;
};

export type User = {
  // id: number;
  // name: string;
  // nickname: string;
  // twoFactor: boolean;
  // twoFactorUid: string;
  // profile: string;
  // firstAccess: boolean;
  // refreshToken: boolean;

  // sourceFriends: Friend[];
  // targetFriends: Friend[];
  // sourceBlocks: Block[];
  // targetBlocks: Block[];

  // achievements: Achievement[];

  // winLogs: GameLog[];
  // looseLogs: GameLog[];
  name: string;
  status: UserStatusType;
  imagePath: string;
};
