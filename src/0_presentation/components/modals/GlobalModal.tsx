import React from "react";
import { useRecoilState } from "recoil";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import ChatRoomModal from "./ChatRoomModal";
import ChatRoomInfoModal from "./ChatRoomInfoModal";
import ChatRoomPopover from "./ChatRoomPopover";
import { modalState } from "../../../recoil/modal";

export const MODAL_TYPES = {
  ConfirmModal: "ConfirmModal",
  AlertModal: "AlertModal",
  ChatRoomModal: "ChatRoomModal",
  ChatRoomInfoModal: "ChatRoomInfoModal",
  ChatRoomPopover: "ChatRoomPopover",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.ConfirmModal]: ConfirmModal,
  [MODAL_TYPES.AlertModal]: AlertModal,
  [MODAL_TYPES.ChatRoomModal]: ChatRoomModal,
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