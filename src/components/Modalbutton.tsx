import React from "react";
import MyModal from "./MyModal";
import { useModal } from "../hooks/useModal";

interface ButtonProps {
  text: string;
  className: string;
  children?: any;
}

function ModalButton({ text, className, children }: ButtonProps) {
  const { openModal, modalDataState } = useModal();
  return (
    <div>
      <button className={className} onClick={() => openModal(modalDataState)}>
        {children}
        {text}
      </button>
      <MyModal />
    </div>
  );
}

export default ModalButton;
