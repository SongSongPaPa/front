import { PrivateUserInfo } from "../User";
import { PublicUserInfo } from "../User";
import { atom } from "recoil";

export const meState = atom<PrivateUserInfo>({
  key: "me",
  default: undefined,
});

export const otherState = atom<PrivateUserInfo>({
  key: "other",
  default: undefined,
});

export const userListState = atom<PublicUserInfo[]>({
  key: "publicuserinfo",
  default: [],
});
