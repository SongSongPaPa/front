import React from "react";
import { InputStyle } from "./InputStyle";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
}

const Input = ({ name, ...rest }: InputProps) => {
  const style = InputStyle[name];
  return <input style={style} {...rest}></input>;
};

export default Input;
