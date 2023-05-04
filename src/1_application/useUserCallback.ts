import { useRecoilCallback } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";

const useUserCallback = () => {
  const onUpdateDisplayName = useRecoilCallback(({ set }) => (data: { userId: number; name: string }) => {
    console.log(data);
    console.log("change Name", data.userId, data.name);
    set(meState, (oldMe) => {
      if (oldMe.id === data.userId) {
        return { ...oldMe, name: data.name };
      } else {
        return oldMe;
      }
    });
  });

  const onUpdateImage = useRecoilCallback(({ set }) => (data: { userId: number; imageUrl: string }) => {
    console.log(data);
    console.log("update image", data.userId, data.imageUrl);
    set(meState, (oldMe) => {
      if (oldMe.id === data.userId) {
        return { ...oldMe, profile: data.imageUrl };
      } else {
        return oldMe;
      }
    });
  });

  const onFollowUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("add friend", data.userId);
    set(meState, (oldMe) => ({
      ...oldMe,
      friends: [...oldMe.friends, data.userId],
    }));
  });

  const onUnfollowUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("remove friend", data.userId);
    set(meState, (prevState) => ({
      ...prevState,
      friends: prevState.friends.filter((friendId) => friendId !== data.userId),
    }));
  });

  const onBlockUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("block friend", data.userId);
    set(meState, (oldMe) => ({
      ...oldMe,
      blocks: [...oldMe.blocks, data.userId],
    }));
  });
  return { onUpdateDisplayName, onUpdateImage, onFollowUser, onUnfollowUser, onBlockUser };
};

export default useUserCallback;
