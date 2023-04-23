import React from "react";
import useModal from "@application/hooks/useModal";

const AlertModal = () => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };

  const onConfirm = async () => {
    hideModal();
  };

  return (
    <div>
      <div>Alert Modal</div>
      <button onClick={onConfirm}>ok</button>
      <button onClick={onClose}>cancel</button>
    </div>
  );
};

export default AlertModal;
