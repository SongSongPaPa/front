import { IUserRepository } from "@domain/IUserRepository";
import { PrivateUserInfo } from "@domain/User";
import customAxios from "@root/lib/customAxios";

export const HttpUserRepository = (): IUserRepository => {
  const login = async (): Promise<void> => {
    await customAxios.get("/auth/login");
  };

  const getMyProfile = async (): Promise<PrivateUserInfo> => {
    const me = await customAxios.get("/user/detail");
    return me.data;
  };

  const getUserProfileById = async (id: number): Promise<PrivateUserInfo> => {
    const user = await customAxios.get(`/user/detail/${id}`);
    return user.data;
  };

  return { login, getMyProfile, getUserProfileById };
};
