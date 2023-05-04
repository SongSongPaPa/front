import { meState, otherState } from "@root/2_domain/recoil/userAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import UserRepository from "@root/3_infrastructure/UserRepository";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";

const useUserService = () => {
  const [me, setMe] = useRecoilState(meState);
  const setOther = useSetRecoilState(otherState);
  const userRepository = new UserRepository(GlobalSocket.getUserSocket());

  const getMyProfile = async () => {
    try {
      const data = await userRepository.getMyProfile();
      setMe(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfileById = async (id: number) => {
    try {
      const data = await userRepository.getUserProfileById(id);
      setOther(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDisplayName = (name: string) => {
    try {
      userRepository.updateDisplayName(name);
    } catch (error) {
      console.log(error);
    }
  };

  const updateImage = (image: string, mimeType: string) => {
    console.log("in updateImage");
    try {
      userRepository.updateImage(image, mimeType);
    } catch (error) {
      console.log(error);
    }
  };

  const followUser = (userId: number) => {
    try {
      userRepository.followUser(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowUser = (userId: number) => {
    try {
      userRepository.unfollowUser(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const blockUser = (userId: number) => {
    try {
      userRepository.blockUser(userId);
    } catch (error) {
      console.log(error);
    }
  };
  return { getMyProfile, getUserProfileById, updateDisplayName, updateImage, followUser, unfollowUser, blockUser };
};

export default useUserService;
