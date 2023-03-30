import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal = ({ isOpen, onClose }: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <h2>Alert</h2>
      <button onClick={onClose}>close</button>
    </Modal>
  );
};

export default AlertModal;
