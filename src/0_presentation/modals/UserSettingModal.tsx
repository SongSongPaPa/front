import useModal from "@root/1_application/useModal";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import React, { ChangeEvent, FormEvent } from "react";
import { useRecoilValue } from "recoil";
import { meState } from "@root/2_domain/recoil/userAtom";
import useUserService from "@root/1_application/useUserService";
import styled from "styled-components";
import Input from "../components/common/Input";
import { useState } from "react";
import Button from "../components/common/Button";
import GameLogs from "../User/GameLogs";

const Image = styled.img`
  width: 83px;
  height: 83px;
`;

const UserSettingModal = () => {
  const { hideModal, showModal } = useModal();
  const me = useRecoilValue(meState);
  const [nickname, setNickname] = useState(me.nickname);
  const { updateImage, updateDisplayName } = useUserService();

  const onClose = () => {
    hideModal();
  };

  const handleOnImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (curr) => {
      const base64 = curr.target!.result;
      updateImage(base64 as string);
    };
  };

  const handleNicknameChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDisplayName(nickname);
  };

  const handleClickTwoFactor = () => {
    showModal({ modalType: "TwoFactorSettingModal" });
  };
  return (
    <Modal>
      <ModalBody>
        <Image src={me.profile} />
        <input type="file" accept="image/*" onChange={handleOnImageFileChange} />
        <form onSubmit={handleNicknameChange}>
          <label>CHANGE NICKNAME</label>
          <input value={nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)} />
          <Button name="" type="submit">
            닉넴변경
          </Button>
        </form>
        <div>TWO-FACTOR AUTHENTICATE</div>
        <TwoFactorSettingButton onClick={handleClickTwoFactor}>2FA</TwoFactorSettingButton>
        <div>MATCH HISTORY</div>
        <GameLogs />
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default UserSettingModal;

const TwoFactorSettingButton = styled.button`
  font-family: "bitbit";
  width: 50px;
  height: 33px;
  background-color: #7abfff;
  border-radius: 10px;
  border: none;
`;
