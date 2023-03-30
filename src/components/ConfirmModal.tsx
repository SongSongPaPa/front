import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmModal = ({ isOpen, onClose }: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <h2>Confirm</h2>
      <button onClick={onClose}>close</button>
    </Modal>
  );
};

export default ConfirmModal;
