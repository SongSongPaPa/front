type UserStatusType = "ONLINE" | "OFFLINE" | "INGAME";

export type User = {
  imagePath: string;
  name: string;
  status: UserStatusType;
};
