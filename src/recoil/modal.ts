import { atom } from "recoil";
import { MODAL_TYPES } from "../components/GlobalModal";

const { ConfirmModal, AlertModal, ChatRoomModal, ChatRoomInfoModal } =
  MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof ConfirmModal;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
}

export interface ChatRoomModalType {
  modalType: typeof ChatRoomModal;
}

export interface ChatRoomInfoModalType {
  modalType: typeof ChatRoomInfoModal;
}

export type ModalType =
  | ConfirmModalType
  | AlertModalType
  | ChatRoomModalType
  | ChatRoomInfoModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
