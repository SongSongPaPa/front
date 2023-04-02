import { atom } from "recoil";
import { MODAL_TYPES } from "../components/GlobalModal";

const { ConfirmModal, AlertModal } = MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof ConfirmModal;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
}

export type ModalType = ConfirmModalType | AlertModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
