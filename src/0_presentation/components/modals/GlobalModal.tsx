import React from "react";
import { useRecoilState } from "recoil";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import ChatRoomCreateModal from "./ChatRoomCreateModal";
import ChatRoomInfoModal from "./ChatRoomInfoModal";
import ChatRoomPopover from "./ChatRoomPopover";
import { modalState } from "@domain/recoil/modal";

export const MODAL_TYPES = {
  ConfirmModal: "ConfirmModal",
  AlertModal: "AlertModal",
  ChatRoomCreateModal: "ChatRoomCreateModal",
  ChatRoomInfoModal: "ChatRoomInfoModal",
  ChatRoomPopover: "ChatRoomPopover",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.ConfirmModal]: ConfirmModal,
  [MODAL_TYPES.AlertModal]: AlertModal,
  [MODAL_TYPES.ChatRoomCreateModal]: ChatRoomCreateModal,
  [MODAL_TYPES.ChatRoomInfoModal]: ChatRoomInfoModal,
  [MODAL_TYPES.ChatRoomPopover]: ChatRoomPopover,
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
