import React, { useState } from "react";
import "./CreateRoomModal.css";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import useModal from "../hooks/useModal";

export interface ConfirmModalProps {
  title?: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
  handleClose?: (...arg: any[]) => any;
  handleConfirm?: (...arg: any[]) => any;
}

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
}

function CheckboxGroup(props: CheckboxGroupProps) {
  const { options } = props;
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="checkbox"
              checked={selectedValue === option.value}
              onChange={() => handleOptionSelect(option.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

const ConfirmModal = ({
  title,
  message,
  cancelText = "취소",
  confirmText = "확인",
  handleClose,
  handleConfirm,
}: ConfirmModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
    hideModal();
  };

  const onConfirm = async () => {
    if (handleConfirm) {
      await handleConfirm();
    }
    hideModal();
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  /*return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
      sx={{ whiteSpace: "break-spaces" }}
    >
      <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelText}</Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );*/
  return (
    <div className="Modal">
      <div className="modalBody">
        <button onClick={onClose}>close</button>
        <button onClick={onConfirm}>ok</button>
        <input></input>
        <CheckboxGroup options={options}></CheckboxGroup>
      </div>
    </div>
  );
};

export default ConfirmModal;
