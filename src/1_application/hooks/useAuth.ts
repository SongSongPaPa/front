import Http from "@infrastructure/Http";

const repo = new Http();

export const useUserProfile = async () => {
  await repo.getUserDetail();
};

export const getUserDetailById = async (id: number) => {
  const userProfile = await repo.getUserDetailById(id);
  return userProfile;
};
