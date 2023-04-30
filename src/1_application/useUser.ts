import { meState, otherState } from "@root/2_domain/recoil/userAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import UserRepository from "@root/3_infrastructure/UserRepository";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";

const useUser = () => {
  const [me, setMe] = useRecoilState(meState);
  const setOther = useSetRecoilState(otherState);
  const userRepository = new UserRepository(GlobalSocket.getChatSocket());

  const login = async () => {
    try {
      await userRepository.login();
    } catch (error) {
      console.log(error);
    }
  };

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
  return { login, getMyProfile, getUserProfileById, updateDisplayName };
};

export default useUser;
