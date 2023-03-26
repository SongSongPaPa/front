import React from "react";

interface SocketButtonProps {
    text: string;
    className: string;
}

function SocketButton({text, className}: SocketButtonProps) {
    return <button className={className}>{text}</button>;
}

export default SocketButton;