import React from "react";

interface ButtonProps {
    text: string;
    className: string;
}

function ModalButton({text, className}: ButtonProps) {
    return <button className={className}>{text}</button>;
}

export default ModalButton;