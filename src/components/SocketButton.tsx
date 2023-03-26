import React from "react";

interface SocketButtonProps {
    text: string;
    className: string;
    children?: any;
}

function SocketButton({text, className}: SocketButtonProps) {
    return <button className={className}>{text}</button>;
}

export default SocketButton;