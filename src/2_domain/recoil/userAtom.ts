import { PublicUserInfo, UserInfo } from "../User";
import { atom, selector, selectorFamily, useRecoilValue } from "recoil";
import { chatState } from "./chatAtom";

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

export const chatUserListState = selector({
  key: "userListSelector",
  get: ({ get }) => {
    const userIdList = get(chatState).users;
    return userIdList.map((id) => {
      return useRecoilValue(userSelector(id));
    });
  },
});

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
        return list.filter((item) => friends.includes(item.id));
      default:
        return list;
    }
  },
});
