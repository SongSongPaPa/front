import React from 'react';
import PropTypes from 'prop-types';
import './ToggleButton.css'

interface ToggleButtonProps {
  selected: boolean;
  toggleSelected: () => void;
  onText: string;
  offText: string;
}

const ToggleButton = ({ selected, toggleSelected, onText, offText}: ToggleButtonProps) => {
  return (
    <div className="toggle-container" onClick={toggleSelected}>
      <div className={`dialog-button ${selected ? "" : "disabled"}`}>
        {selected ? onText : offText}
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};

export default ToggleButton;
