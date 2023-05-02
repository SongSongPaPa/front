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
  messasge: `
  outline: none;
  border: none;
  width: 780px;
  font-size: 14px;
  line-height: 30px;
  margin-left: 15px;
  `,
};

export const StyledInput = styled.input`
  ${({ className }) => InputStyle[className]};
`;
