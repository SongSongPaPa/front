import React from "react";
import { useRecoilState } from "recoil";
import AlertModal from "./AlertModal";
import ChatRoomCreateModal from "./ChatRoomCreateModal";
import GameRoomCreateModal from "./GameRoomCreateModal";
import ChatUserInfoModal from "./ChatUserInfoModal";
import UserProfileModal from "./UserProfileModal";
import UserSettingModal from "./UserSettingModal";
import ChatPasswordModal from "./ChatPasswordModal";
import ChatInviteModal from "./ChatInviteModal";
import ChatSettingModal from "./ChatSettingModal";
import TwoFactorSettingModal from "./TwoFactorSettingModal";
import { modalState } from "@root/2_domain/recoil/modal";

export const MODAL_TYPES = {
  GameRoomCreateModal: "GameRoomCreateModal",
  AlertModal: "AlertModal",
  ChatRoomCreateModal: "ChatRoomCreateModal",
  ChatUserInfoModal: "ChatUserInfoModal",
  UserProfileModal: "UserProfileModal",
  UserSettingModal: "UserSettingModal",
  ChatPasswordModal: "ChatPasswordModal",
  ChatSettingModal: "ChatSettingModal",
  ChatInviteModal: "ChatInviteModal",
  TwoFactorSettingModal: "TwoFactorSettingModal",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.GameRoomCreateModal]: GameRoomCreateModal,
  [MODAL_TYPES.AlertModal]: AlertModal,
  [MODAL_TYPES.ChatRoomCreateModal]: ChatRoomCreateModal,
  [MODAL_TYPES.ChatUserInfoModal]: ChatUserInfoModal,
  [MODAL_TYPES.UserProfileModal]: UserProfileModal,
  [MODAL_TYPES.UserSettingModal]: UserSettingModal,
  [MODAL_TYPES.ChatPasswordModal]: ChatPasswordModal,
  [MODAL_TYPES.ChatSettingModal]: ChatSettingModal,
  [MODAL_TYPES.ChatInviteModal]: ChatInviteModal,
  [MODAL_TYPES.TwoFactorSettingModal]: TwoFactorSettingModal,
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
