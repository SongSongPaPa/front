import React from "react";
import MyModal from "./MyModal";
import { useModal } from "../hooks/useModal";

interface ButtonProps {
  text: string;
  className: string;
  children?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ModalButton({ text, className, children, onClick }: ButtonProps) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
        {text}
      </button>
      <MyModal />
    </div>
  );
}

export default ModalButton;
