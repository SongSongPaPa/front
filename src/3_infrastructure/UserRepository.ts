import { IUserRepository } from "@domain/IUserRepository";
import { PrivateUserInfo } from "@domain/User";
import customAxios from "@root/lib/customAxios";
import { Socket } from "socket.io-client";

class UserRepository implements IUserRepository {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  setSocketListen() {
    this.socket.on("connect", () => {
      console.log("Connected to server");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    this.socket.on("broadcast:user:updateDisplayName", (data) => console.log(data));
  }

  login = async (): Promise<void> => {
    await customAxios.get("/auth/login");
  };

  getMyProfile = async (): Promise<PrivateUserInfo> => {
    const me = await customAxios.get("/user/detail");
    return me.data;
  };

  getUserProfileById = async (id: number): Promise<PrivateUserInfo> => {
    const user = await customAxios.get(`/user/detail/${id}`);
    return user.data;
  };

  updateDisplayName = (name: string): void => {
    this.socket.emit("updateDisplayName", name);
  };
}

export default UserRepository;
