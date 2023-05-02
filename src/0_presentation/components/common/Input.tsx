import React from "react";
import { StyledInput } from "./InputStyle";
import styled from "styled-components";

export const InputStyle = {
  search: `
  position: relative;
  width: 306px;
  height: 39px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  line-height: 39px;
  outline: none;
  font-size: 16px;
  top: 30%;
  `,
  message: `
  outline: none;
  border: none;
  width: 780px;
  font-size: 14px;
  line-height: 30px;
  margin-left: 15px;
  `,
};

const StyledInput = styled.input<InputProps>`
  ${({ className }) => InputStyle["message"]};
`;
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type: string;
}

const Input = ({ type, ...rest }: InputProps) => {
  return <input className={() => InputStyle[className]} {...rest}></input>;
};

export default Input;
