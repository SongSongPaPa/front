import React from "react";
//import "./Message.css";

export interface MessageProps {
  name: string;
  content: string;
}

const Message = (props: MessageProps) => {
  const { name, content } = props;
  const isSentByCurrentUser = name === "sohan";
  return (
    <div className={`message ${isSentByCurrentUser ? "sent" : "received"}`}>
      {name} : {content}
    </div>
  );
};

export default React.memo(Message);
