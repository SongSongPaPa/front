import { useRecoilCallback } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";

const useUserCallback = () => {
  // const onUpdateDisplayName = useRecoilCallback(({ set }) => (data: { userId: number; name: string }) => {
  //   console.log("change Name", data.userId, data.name);
  //   set(meState, (oldMe) => {
  //     if (oldMe.id === data.userId) {
  //       return { ...oldMe, name: data.name };
  //     } else {
  //       return oldMe;
  //     }
  //   });
  // });
  const onUpdateDisplayName = (data: { userId: number; name: string }) => {
    console.log(data);
  };

  const onUpdateImage = useRecoilCallback(({ set }) => (userId: number, imageUrl: string) => {
    console.log("update image", userId, imageUrl);
    set(meState, (oldMe) => {
      if (oldMe.id === userId) {
        return { ...oldMe, profile: imageUrl };
      } else {
        return oldMe;
      }
    });
  });

  const onFollowUser = useRecoilCallback(({ set }) => (userId: number) => {
    console.log("add friend", userId);
    set(meState, (oldMe) => ({
      ...oldMe,
      friends: [...oldMe.friends, userId],
    }));
  });

  const onUnfollowUser = useRecoilCallback(({ set }) => (userId: number) => {
    console.log("remove friend", userId);
    set(meState, (prevState) => ({
      ...prevState,
      friends: prevState.friends.filter((friendId) => friendId !== userId),
    }));
  });

  const onBlockUser = useRecoilCallback(({ set }) => (userId: number) => {
    console.log("block friend", userId);
    set(meState, (oldMe) => ({
      ...oldMe,
      blocks: [...oldMe.blocks, userId],
    }));
  });
  return { onUpdateDisplayName, onUpdateImage, onFollowUser, onUnfollowUser, onBlockUser };
};

export default useUserCallback;
