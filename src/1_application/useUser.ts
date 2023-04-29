import { meState } from "@root/2_domain/recoil/userAtom";
import { useRecoilState } from "recoil";
import { HttpUserRepository } from "@infrastructure/HttpUserRepository";

const useUser = () => {
  const [me, setMe] = useRecoilState(meState);
  const userRepository = HttpUserRepository();
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
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { login, getMyProfile, getUserProfileById };
};

export default useUser;
