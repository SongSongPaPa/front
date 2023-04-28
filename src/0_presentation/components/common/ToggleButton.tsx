import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToggleButton.css";
import { UserListState } from "@root/2_domain/recoil/test";
import { useRecoilState } from "recoil";

interface ToggleButtonProps {
  onText: string;
  offText: string;
}

const ToggleButton = ({ onText, offText }: ToggleButtonProps) => {
  const [selected, setSelected] = useRecoilState(UserListState);
  return (
    <div className="toggle-container" onClick={() => setSelected(!selected)}>
      <div className={`dialog-button ${selected ? "" : "disabled"}`}>
        {selected ? onText : offText}
      </div>
    </div>
  );
};

export default ToggleButton;
