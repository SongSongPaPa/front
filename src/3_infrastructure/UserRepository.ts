import { IUserRepository } from "@domain/IUserRepository";
import { UserInfo } from "@domain/User";
import customAxios from "@root/lib/customAxios";
import { Socket } from "socket.io-client";
import { UserDetailDto } from "./dto/api/user.dto";
import GlobalSocket from "./GlobalSocket";

class UserRepository implements IUserRepository {
  private socket: Socket = GlobalSocket.getSocket();

  getMyProfile = async (): Promise<UserDetailDto> => {
    const me = await customAxios.get("/user/detail");
    return me.data;
  };

  getUserProfileById = async (id: number): Promise<UserDetailDto> => {
    const user = await customAxios.get(`/user/detail/${id}`);
    return user.data;
  };

  /////////////

  checkTwoFactor = async (code: string): Promise<boolean> => {
    const result = await customAxios.post(`/auth/two-factor`, { code: code });
    return result.status === 201;
  };

  updateTwoFactor = async (code: string): Promise<boolean> => {
    const result = await customAxios.patch(`/auth/two-factor`, { code: code });
    return result.status === 201;
  };

  ///////////

  updateDisplayName = (name: string): void => {
    console.log("emit update display name");
    console.log(this.socket);
    this.socket.emit("updateDisplayName", { name: name });
  };

  updateImage = (image: string): void => {
    this.socket.emit("updateImage", { image: image });
  };

  followUser = (userId: number): void => {
    console.log(userId);
    this.socket.emit("followUser", { userId: userId });
  };

  unFollowUser = (userId: number): void => {
    this.socket.emit("unFollowUser", { userId: userId });
  };

  blockUser = (userId: number): void => {
    this.socket.emit("blockUser", { userId: userId });
  };

  unBlockUser = (userId: number): void => {
    this.socket.emit("unBlockUser", { userId: userId });
  };
}

export default new UserRepository();
