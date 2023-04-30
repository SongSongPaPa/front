import { PrivateUserInfo } from "./User";

export interface IUserRepository {
  getMyProfile(): Promise<PrivateUserInfo>;
  getUserProfileById(id: number): Promise<PrivateUserInfo>;
  updateDisplayName(name: string): void;
  updateImage(userId: number, mimeType: string): void;
  followUser(userId: number): void;
  unfollowUser(userId: number): void;
  blockUser(userId: number): void;
}
