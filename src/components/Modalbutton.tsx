import React from "react";
//import MyModal from "./MyModal";
//import { useModal } from "../hooks/useModal";

/*interface ButtonProps {
  className: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ModalButton({ className, text, children, onClick }: ButtonProps) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
        {text}
      </button>
    </div>
  );
}*/

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  content: (string | JSX.Element)[];
};

function ModalButton({ className, content, onClick }: ButtonProps) {
  return (
    <span className={className} onClick={onClick}>
      {content.map((item, index) => (
        <span key={index}>
          {React.isValidElement(item) ? item : <span>{item}</span>}
        </span>
      ))}
    </span>
  );
}

export default ModalButton;
