import { PrivateUserInfo } from "./User";

export interface IUserRepository {
  login(): Promise<void>;
  getMyProfile(): Promise<PrivateUserInfo>;
  getUserProfileById(id: number): Promise<PrivateUserInfo>;
  updateDisplayName(name: string): void;
}
