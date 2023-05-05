import { atom } from "recoil";
import { MODAL_TYPES } from "@root/0_presentation/modals/GlobalModal";

const { GameRoomCreateModal, AlertModal, ChatRoomCreateModal, ChatUserInfoModal, ChatRoomPopover } = MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof GameRoomCreateModal;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
}

export interface ChatRoomCreateModalType {
  modalType: typeof ChatRoomCreateModal;
}

export interface ChatUserInfoModalType {
  modalType: typeof ChatUserInfoModal;
}

export interface ChatRoomPopoverType {
  modalType: typeof ChatRoomPopover;
}

export type ModalType =
  | ConfirmModalType
  | AlertModalType
  | ChatRoomCreateModalType
  | ChatUserInfoModalType
  | ChatRoomPopoverType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
