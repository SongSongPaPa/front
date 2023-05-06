import { meState, detailState, userListState } from "@root/2_domain/recoil/userAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import UserRepository from "@root/3_infrastructure/UserRepository";

const useUserService = () => {
  const [me, setMe] = useRecoilState(meState);
  const setOther = useSetRecoilState(detailState);

  const getMyProfile = async () => {
    try {
      const data = await UserRepository.getMyProfile();
      setMe(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfileById = async (id: number) => {
    try {
      const data = await UserRepository.getUserProfileById(id);
      setOther(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDisplayName = (name: string) => {
    try {
      UserRepository.updateDisplayName(name);
    } catch (error) {
      console.log(error);
    }
  };

  const updateImage = (image: string, mimeType: string) => {
    console.log("in updateImage");
    try {
      UserRepository.updateImage(image, mimeType);
    } catch (error) {
      console.log(error);
    }
  };

  const followUser = (userId: number) => {
    try {
      UserRepository.followUser(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowUser = (userId: number) => {
    try {
      UserRepository.unfollowUser(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const blockUser = (userId: number) => {
    try {
      UserRepository.blockUser(userId);
    } catch (error) {
      console.log(error);
    }
  };
  return { getMyProfile, getUserProfileById, updateDisplayName, updateImage, followUser, unfollowUser, blockUser };
};

export default useUserService;
