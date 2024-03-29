import { meState, detailState, userListState } from "@root/2_domain/recoil/userAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import UserRepository from "@root/3_infrastructure/UserRepository";
import { UserInfo, UserStateType } from "@root/2_domain/User";

const useUserService = () => {
  const [me, setMe] = useRecoilState(meState);
  const [other, setOther] = useRecoilState(detailState);

  const getMyProfile = async (): Promise<void> => {
    try {
      const data = await UserRepository.getMyProfile();
      //
      const friendList = data.friends.map((e) => {
        return { id: e.id, nickname: e.nickname, state: UserStateType.OFFLINE, profile: e.profile };
      });
      const blockList = data.blocks.map((e) => {
        return { id: e.id, nickname: e.nickname, state: UserStateType.OFFLINE, profile: e.profile };
      });
      setMe({
        id: data.id,
        state: UserStateType.ONLINE,
        name: data.name,
        nickname: data.nickname,
        level: data.level,
        profile: data.profile,
        achievements: data.achivements.map((e) => e.achivementTitle),
        friends: friendList,
        blocks: blockList,
        firstAccess: data.firstAccess,
        gameHistory: data.userLogs,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfileById = async (id: number, state: UserStateType) => {
    try {
      const data = await UserRepository.getUserProfileById(id);
      const friendList = data.friends.map((e) => {
        return { id: e.id, nickname: e.nickname, state: UserStateType.OFFLINE, profile: e.profile };
      });
      const blockList = data.blocks.map((e) => {
        return { id: e.id, nickname: e.nickname, state: UserStateType.OFFLINE, profile: e.profile };
      });
      console.log("int userservice : ", data);
      setOther({
        id: data.id,
        state: state,
        name: data.name,
        nickname: data.nickname,
        level: data.level,
        profile: data.profile,
        achievements: data.achivements.map((e) => e.achivementTitle),
        friends: friendList,
        blocks: blockList,
        firstAccess: data.firstAccess,
        gameHistory: data.userLogs,
      });
      //setOther(data);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (nickname: string, image: string): Promise<boolean> => {
    try {
      await UserRepository.signUp(nickname, image);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const checkTwoFactor = async (code: string): Promise<boolean> => {
    try {
      const result = await UserRepository.checkTwoFactor(code);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updateTwoFactor = async (code: string): Promise<boolean> => {
    try {
      const result = await UserRepository.updateTwoFactor(code);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updateDisplayName = (name: string) => {
    try {
      UserRepository.updateDisplayName(name);
    } catch (error) {
      console.log(error);
    }
  };

  const updateImage = (image: string) => {
    console.log("in updateImage");
    try {
      UserRepository.updateImage(image);
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

  const unFollowUser = (userId: number) => {
    try {
      UserRepository.unFollowUser(userId);
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

  const unBlockUser = (userId: number) => {
    try {
      UserRepository.unBlockUser(userId);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getMyProfile,
    getUserProfileById,
    signUp,
    checkTwoFactor,
    updateTwoFactor,
    updateDisplayName,
    updateImage,
    followUser,
    unFollowUser,
    blockUser,
    unBlockUser,
  };
};

export default useUserService;
