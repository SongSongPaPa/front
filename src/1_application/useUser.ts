import { meState, otherState } from "@root/2_domain/recoil/userAtom";
import { useRecoilState } from "recoil";
import { HttpUserRepository } from "@infrastructure/HttpUserRepository";

const useUser = () => {
  const [me, setMe] = useRecoilState(meState);
  const [other, setOther] = useRecoilState(otherState);
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
      setOther(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { login, getMyProfile, getUserProfileById };
};

export default useUser;
