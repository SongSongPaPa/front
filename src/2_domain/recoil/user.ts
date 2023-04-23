import { atom } from "recoil";

interface User {
  name: string;
  imagePath: string;
}

export const userState = atom({
  key: "user",
  default: {
    name: "",
    img: "",
  },
});
