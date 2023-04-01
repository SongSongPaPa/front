import useModal from "../hooks/useModal";
import { ModalType } from "../recoil/modal";

type ShowModal = (modal: ModalType) => void;

export const handleClickAlertModal = (showModal: ShowModal) => {
  showModal({
    modalType: "AlertModal",
    modalProps: {
      message: "Success!",
    },
  });
};

export const handleClickConfirmModal = (showModal: ShowModal) => {
  showModal({
    modalType: "ConfirmModal",
    modalProps: {
      message: "Yes or No",
      confirmText: "Yes",
      cancelText: "No",
      handleConfirm: () => {
        console.log("Yes!");
      },
      handleClose: () => {
        console.log("No!");
      },
    },
  });
};
