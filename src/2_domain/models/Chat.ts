import { User } from "./User";

export type ChatInfo = {
  title: string;
  headCount: string;
  visible?: boolean;
  password?: string;
};

export type Chat = {
  info: ChatInfo;
  participants: User[];
  owner: User;
  admin: User[];
};

export type Message = {
  sender: User;
  content: string;
  //timestamp: Date;
};
