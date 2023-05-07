import { PublicUserInfo, UserInfo, UserStateType } from "../User";
import { atom, selector, selectorFamily, useRecoilValue } from "recoil";
import { chatState } from "./chatAtom";
import useUserService from "@root/1_application/useUserService";

export const meState = atom<UserInfo>({
  key: "me",
  default: undefined,
});

export const userSelector = selectorFamily<PublicUserInfo, number>({
  key: "userSelector",
  get:
    (id: number) =>
    ({ get }) =>
      get(userListState).find((user) => user.id === id)!,
});

export const userNameSelector = selectorFamily<PublicUserInfo, string>({
  key: "userSelector",
  get:
    (nickname: string) =>
    ({ get }) =>
      get(userListState).find((user) => user.nickname === nickname)!,
});

export const chatUserListState = selector({
  key: "userListSelector",
  get: ({ get }) => {
    const userIdList = get(chatState).users;
    const userList = get(userListState);

    const result = userList.filter((item) => userIdList.includes(item.id));
    return result;
  },
});

//[gettor[0], getter[1]]

export const detailState = atom<UserInfo>({
  key: "other",
  default: undefined,
});

export const userListState = atom<PublicUserInfo[]>({
  key: "publicuserinfo",
  default: [],
});

export const userListFilterState = atom({
  key: "UserListFilter",
  default: false,
});

export const filteredUserListState = selector({
  key: "FilteredUserList",
  get: ({ get }) => {
    const filter = get(userListFilterState);
    const list = get(userListState);
    const me = get(meState);
    const friends = me ? me.friends : [];
    switch (filter) {
      case true:
        return friends.map((friend) => {
          const item = list.find((user) => user.id === friend.id);
          if (!item) {
            return { ...friend, state: UserStateType.OFFLINE };
          } else {
            return item;
          }
        });

      default:
        return list.filter((user) => me && user.id !== me.id);
    }
  },
});
