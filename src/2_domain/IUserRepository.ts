import { UserInfo } from "./User";

export interface IUserRepository {
  getMyProfile(): Promise<UserInfo>;
  getUserProfileById(id: number): Promise<UserInfo>;
  updateDisplayName(name: string): void;
  updateImage(image: string, mimeType: string): void;
  followUser(userId: number): void;
  unfollowUser(userId: number): void;
  blockUser(userId: number): void;
}
