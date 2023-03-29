import React from "react";

interface SocketButtonProps {
  text: string;
  className: string;
  children?: any;
}

function SocketButton({ text, className, children }: SocketButtonProps) {
  return (
    <button className={className}>
      {children}
      <span>{text}</span>
    </button>
  );
}

export default SocketButton;
