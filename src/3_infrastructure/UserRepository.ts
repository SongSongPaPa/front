import { IUserRepository } from "@domain/IUserRepository";
import { PrivateUserInfo } from "@domain/User";
import customAxios from "@root/lib/customAxios";
import { Socket } from "socket.io-client";

class UserRepository implements IUserRepository {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

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

  updateImage = (userId: number, mimeType: string): void => {
    this.socket.emit("updateImage", { userId: userId, mimeType: mimeType });
  };

  followUser = (userId: number): void => {
    this.socket.emit("followUser", { userId: userId });
  };

  unfollowUser = (userId: number): void => {
    this.socket.emit("unfollowUser", { userId: userId });
  };

  blockUser = (userId: number): void => {
    this.socket.emit("blockUser", { userId: userId });
  };
}

export default UserRepository;
