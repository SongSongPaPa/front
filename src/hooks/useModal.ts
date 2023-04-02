import { useRecoilState } from "recoil";
import { ModalType, modalState } from "../recoil/modal";

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = ({ modalType }: ModalType) => {
    console.log("hey");
    setModal({ modalType });
  };

  const hideModal = () => {
    setModal(null);
  };

  console.log("modal state:", modal);

  return {
    modal,
    setModal,
    showModal,
    hideModal,
  };
}
