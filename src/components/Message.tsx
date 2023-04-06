import React from "react";

export interface MessageProps {
  name: string;
  content: string;
}

const Message = (props: MessageProps) => {
  const { name, content } = props;
  return (
    <div>
      {name} : {content}
    </div>
  );
};

export default React.memo(Message);
