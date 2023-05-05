import { PublicUserInfo, UserInfo } from "../User";
import { atom } from "recoil";

export const meState = atom<UserInfo>({
  key: "me",
  default: undefined,
});

export const detailState = atom<UserInfo>({
  key: "other",
  default: undefined,
});

export const userListState = atom<PublicUserInfo[]>({
  key: "users",
  default: [],
});
