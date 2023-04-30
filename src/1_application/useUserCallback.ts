import { useRecoilCallback } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";

const useUserCallback = {
  onUpdateDisplayName: useRecoilCallback(({ set }) => (userId: number, name: string) => {
    set(meState, (oldMe) => {
      if (oldMe.id === userId) {
        return { ...oldMe, name: name };
      } else {
        return oldMe;
      }
    });
  }),
};

export default useUserCallback;
