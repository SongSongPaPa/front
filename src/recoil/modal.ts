import { atom } from "recoil";
import { MODAL_TYPES } from "../components/GlobalModal";

const { ConfirmModal, AlertModal, ChatRoomModal } = MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof ConfirmModal;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
}

export interface ChatRoomModalType {
  modalType: typeof ChatRoomModal;
}

export type ModalType = ConfirmModalType | AlertModalType | ChatRoomModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
