import React, { FormEvent, ChangeEvent } from "react";
import useModal from "@root/1_application/useModal";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import Input from "../components/common/Input";
import { useState } from "react";
import Button from "../components/common/Button";
import useUserService from "@root/1_application/useUserService";

const TwoFactorSettingModal = () => {
  const { hideModal, showModal } = useModal();
  const [code, setCode] = useState("");
  const { updateTwoFactor } = useUserService();

  const onClose = () => {
    hideModal();
  };

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isCodeSet = await updateTwoFactor(code);
    if (isCodeSet) {
      alert("Two Factor Code 설정 성공");
    } else {
      alert("설정 실패");
    }
    showModal({ modalType: "UserSettingModal" });
  };

  return (
    <Modal>
      <ModalBody>
        <h1>Set TwoFactor Code</h1>
        <form onSubmit={handleSubmit}>
          <label>Code:</label>
          <Input name="search" value={code} onChange={handleCodeChange} />
          <Button name="modal-round-common" type="submit">
            submit
          </Button>
        </form>
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default TwoFactorSettingModal;
