import { atom } from "recoil";

interface Item {
  id: number;
  title: string;
  headCount: number;
  option: string;
}

interface ChatRoomItem {
  title: string;
  headCount: number;
  visible?: string;
  password?: string;
}

const ONLINE = "ONLINE";
const OFFLINE = "OFFLINE";
const INGAME = "INGAME";

export type UserStatusType = typeof ONLINE | typeof OFFLINE | typeof INGAME;
type ChatUserRoleType = "ADMIN" | "STAFF" | "GENERAL";

interface UserItem {
  imagePath: string;
  name: string;
  status: UserStatusType;
}

interface ChatUserItem {
  name: string;
  imagePath: string;
  role: ChatUserRoleType;
}

export const ChatUserItemState = atom<ChatUserItem[]>({
  key: "chatuseritem",
  default: [
    {
      name: "sohan",
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      role: "ADMIN",
    },
    {
      name: "seonkim",
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      role: "STAFF",
    },
    {
      name: "seunpark",
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      role: "GENERAL",
    },
  ],
});

export const UserItemState = atom<UserItem[]>({
  key: "useritem",
  default: [
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "a",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "b",
      status: OFFLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "c",
      status: INGAME,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "d",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "e",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "f",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "g",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "h",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "i",
      status: OFFLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "j",
      status: OFFLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "k",
      status: INGAME,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "l",
      status: INGAME,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "m",
      status: OFFLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "n",
      status: OFFLINE,
    },
  ],
});

export const FriendUserItemState = atom<UserItem[]>({
  key: "frienduseritem",
  default: [
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "sohan",
      status: ONLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "seunpark",
      status: OFFLINE,
    },
    {
      imagePath:
        "https://blog.kakaocdn.net/dn/bxLuQy/btr6CgpS8wc/SbzrenkzzLn7UZzHGj0Jk0/img.png",
      name: "seonkim",
      status: INGAME,
    },
  ],
});

export const FilteredUserItemState = atom<UserItem[]>({
  key: "filteredusertiem",
  default: [],
});

export const itemsState = atom<Item[]>({
  key: "items",
  default: [],
});

export const chatRoomsState = atom<ChatRoomItem[]>({
  key: "chatitems",
  default: [],
});

export const roomState = atom({
  key: "gameroom",
  default: {
    playerA: "",
    playerB: "",
  },
});

interface MessageItem {
  name: string;
  content: string;
}

export const MessageState = atom<MessageItem[]>({
  key: "messages",
  default: [],
});

export const PopoverState = atom({
  key: "popover",
  default: false,
});

export const UserListState = atom({
  key: "userlist",
  default: true,
});
