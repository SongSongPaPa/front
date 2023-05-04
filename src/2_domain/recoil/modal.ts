import { atom } from "recoil";
import { MODAL_TYPES } from "@root/0_presentation/modals/GlobalModal";

const { GameRoomCreateModal, AlertModal, ChatRoomCreateModal, ChatRoomInfoModal, ChatRoomPopover } = MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof GameRoomCreateModal;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
}

export interface ChatRoomCreateModalType {
  modalType: typeof ChatRoomCreateModal;
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
  | ChatRoomCreateModalType
  | ChatRoomInfoModalType
  | ChatRoomPopoverType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
