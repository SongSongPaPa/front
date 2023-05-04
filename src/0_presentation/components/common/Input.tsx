import React from "react";
import { InputStyle } from "./InputStyle";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type: string;
}

const Input = ({ type, ...rest }: InputProps) => {
  const style = InputStyle[type];
  return <input style={style} {...rest}></input>;
};

export default Input;
