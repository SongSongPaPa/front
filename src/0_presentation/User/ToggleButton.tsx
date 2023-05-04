import { userListFilterState } from "@root/2_domain/recoil/userAtom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";

interface ToggleButtonProps {
  onText: string;
  offText: string;
}

const userStyles = css`
  font-family: "Bouncy";
  width: 306px;
  background-color: #e9e9e9;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  padding: 2px;
  height: 55px;
  position: relative;
`;

const dialogButtonStyles = css`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
  min-width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 49px;
  line-height: 49px;
  position: absolute;
  left: 153px;
  top: 5px;
  transition: all 0.3s ease;

  &.disabled {
    background-color: #ffffff;
    color: #000000;
    left: 2px;
  }
`;

const twofactorStyles = css`
  outline: none;
  border: none;
  width: 780px;
  font-size: 14px;
  line-height: 30px;
  margin-left: 15px;
`;

const ToggleButtonWrapper = styled.div`
  ${userStyles}
`;

const DialogButton = styled.div`
  ${dialogButtonStyles}
`;

const TwoFactor = styled.input.attrs({ type: "text" })`
  ${twofactorStyles}
`;

const ToggleButton = ({ onText, offText }: ToggleButtonProps) => {
  const [selected, setSelected] = useRecoilState(userListFilterState);
  return (
    <ToggleButtonWrapper onClick={() => setSelected(!selected)}>
      <DialogButton className={selected ? "" : "disabled"}>{selected ? onText : offText}</DialogButton>
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
