import React from "react";
import { useRecoilState } from "recoil";
import AlertModal from "./AlertModal";
import ChatRoomCreateModal from "./ChatRoomCreateModal";
import GameRoomCreateModal from "./GameRoomCreateModal";
import ChatUserInfoModal from "./ChatUserInfoModal";
import UserProfileModal from "./UserProfileModal";
import UserSettingModal from "./UserSettingModal";
import { modalState } from "@root/2_domain/recoil/modal";

export const MODAL_TYPES = {
  GameRoomCreateModal: "GameRoomCreateModal",
  AlertModal: "AlertModal",
  ChatRoomCreateModal: "ChatRoomCreateModal",
  ChatUserInfoModal: "ChatUserInfoModal",
  UserProfileModal: "UserProfileModal",
  UserSettingModal: "UserSettingModal",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.GameRoomCreateModal]: GameRoomCreateModal,
  [MODAL_TYPES.AlertModal]: AlertModal,
  [MODAL_TYPES.ChatRoomCreateModal]: ChatRoomCreateModal,
  [MODAL_TYPES.ChatUserInfoModal]: ChatUserInfoModal,
  [MODAL_TYPES.UserProfileModal]: UserProfileModal,
  [MODAL_TYPES.UserSettingModal]: UserSettingModal,
};

const GlobalModal = () => {
  const { modalType } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;
