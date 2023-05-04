import React from "react";

type InputStyleType = {
  [key: string]: React.CSSProperties;
};

export const InputStyle: InputStyleType = {
  search: {
    position: "relative",
    width: "306px",
    height: "39px",
    background: "#ffffff",
    border: "1px solid #d9d9d9",
    borderRadius: "10px",
    lineHeight: "39px",
    outline: "none",
    fontSize: "16px",
  } as React.CSSProperties,

  message: {
    outline: "none",
    border: "none",
    width: "780px",
    fontSize: "14px",
    lineHeight: "30px",
    marginLeft: "15px",
  } as React.CSSProperties,
};
