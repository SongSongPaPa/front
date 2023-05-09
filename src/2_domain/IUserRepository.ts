import { UserDetailDto } from "@root/3_infrastructure/dto/api/user.dto";
import { UserInfo } from "./User";

export interface IUserRepository {
  getMyProfile(): Promise<UserDetailDto>;
  getUserProfileById(id: number): Promise<UserDetailDto>;
  doubleCheckNickname(nickname: string): void;
  firstAccess(): Promise<void>;
  checkTwoFactor(code: string): Promise<boolean>;
  updateTwoFactor(code: string): Promise<boolean>;
  updateDisplayName(name: string): void;
  updateImage(image: string, mimeType: string): void;
  followUser(userId: number): void;
  unFollowUser(userId: number): void;
  blockUser(userId: number): void;
  unBlockUser(userId: number): void;
}
