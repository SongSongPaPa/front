import { atom } from "recoil";

interface Item {
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
