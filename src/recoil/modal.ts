import { atom } from "recoil";
import { MODAL_TYPES } from "../0_presentation/components/modals/GlobalModal";

const {
  ConfirmModal,
  AlertModal,
  ChatRoomModal,
  ChatRoomInfoModal,
  ChatRoomPopover,
} = MODAL_TYPES;

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

export interface ChatRoomPopoverType {
  modalType: typeof ChatRoomPopover;
}

export type ModalType =
  | ConfirmModalType
  | AlertModalType
  | ChatRoomModalType
  | ChatRoomInfoModalType
  | ChatRoomPopoverType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
