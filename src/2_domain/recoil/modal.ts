import { atom } from "recoil";
import { MODAL_TYPES } from "@root/0_presentation/modals/GlobalModal";

const {
  GameRoomCreateModal,
  AlertModal,
  ChatRoomCreateModal,
  ChatUserInfoModal,
  UserProfileModal,
  UserSettingModal,
  ChatPasswordModal,
} = MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof GameRoomCreateModal;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
}

export interface GameRoomCreateModalType {
  modalType: typeof GameRoomCreateModal;
}

export interface ChatRoomCreateModalType {
  modalType: typeof ChatRoomCreateModal;
}

export interface ChatUserInfoModalType {
  modalType: typeof ChatUserInfoModal;
}

export interface UserProfileModalType {
  modalType: typeof UserProfileModal;
}

export interface UserSettingModalType {
  modalType: typeof UserSettingModal;
}

export interface ChatPasswordModalType {
  modalType: typeof ChatPasswordModal;
}

export type ModalType =
  | GameRoomCreateModalType
  | AlertModalType
  | ChatRoomCreateModalType
  | ChatUserInfoModalType
  | UserProfileModalType
  | UserSettingModalType
  | ChatPasswordModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
