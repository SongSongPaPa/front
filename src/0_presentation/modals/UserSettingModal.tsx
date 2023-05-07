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

const Image = styled.img`
  width: 83px;
  height: 83px;
`;

const UserSettingModal = () => {
  const { hideModal } = useModal();
  const me = useRecoilValue(meState);
  const [nickname, setNickname] = useState(me.nickname);
  const [code, setCode] = useState("");
  const { updateImage, updateDisplayName, updateTwoFactor } = useUserService();

  const onClose = () => {
    hideModal();
  };

  const handleOnImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //const socket = GlobalSocket.getSocket();
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (curr) => {
      const base64 = curr.target!.result;
      updateImage(base64 as string);
      //socket.emit("updateImage", { image: base64 });
    };
  };

  const handleNicknameChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDisplayName(nickname);
  };

  const handleTwoFactorChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await updateTwoFactor(+code);
    if (result === true) {
      alert("잘 바뀌었단다.");
    } else {
      alert("엣큥, 비밀번호를 설정하지 못했어");
    }
  };

  return (
    <Modal>
      <ModalBody>
        <Image src={me.profile} />
        <input type="file" accept="image/*" onChange={handleOnImageFileChange} />
        <form onSubmit={handleNicknameChange}>
          <Input
            name="search"
            value={nickname}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
          />
          <Button name="" type="submit" />
        </form>
        <div></div>
        <div>2차 비밀번호 설정</div>
        <form onSubmit={handleTwoFactorChange}>
          숫자 6자리를 입력하세요 :
          <br />
          <Input
            style={{ width: 100 }}
            type="number"
            value={code}
            name="code"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
          />
          <br />
          <Button name="code" type="submit" />
        </form>
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default UserSettingModal;
