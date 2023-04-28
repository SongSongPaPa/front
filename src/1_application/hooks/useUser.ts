import Http from "@infrastructure/Http";
import { User } from "@domain/models/User";

const repo = new Http();

export const useUserProfile = async (): Promise<User> => {
  const userProfileData = repo.getUserDetail();
  return userProfileData;
};

export const getUserDetailById = async (id: number) => {
  const userProfile = await repo.getUserDetailById(id);
  return userProfile;
};
