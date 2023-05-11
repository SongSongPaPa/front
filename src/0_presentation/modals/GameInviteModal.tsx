import React from "react";
import useModal from "@root/1_application/useModal";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import Button from "../components/common/Button";
import useGameService from "@root/1_application/useGameService";
import { useRecoilValue } from "recoil";
import { focusedGameState } from "@root/2_domain/recoil/gameAtom";
import { meState } from "@root/2_domain/recoil/userAtom";
import { chatState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatService";

const GameInviteModal = () => {
  const { hideModal } = useModal();
  const { joinGame } = useGameService();
  const { leaveChat } = useChatService();
  const [gameId, inviteUser] = useRecoilValue(focusedGameState);
  const me = useRecoilValue(meState);
  const chatInfo = useRecoilValue(chatState);

  const onClose = () => {
    hideModal();
  };

  const handleClickAccept = async () => {
    //console.log("invited game id: ", gameId);
    //console.log("invite game meState", me.state);
    //console.log("invite game chatInfo", chatInfo);
    if (chatInfo) {
      leaveChat();
    }
    joinGame(gameId);
    hideModal();
  };

  return (
    <Modal>
      <ModalBody>
        <h1>{inviteUser}에게 초대받음</h1>
        <Button name="modal-round-common" onClick={handleClickAccept}>
          submit
        </Button>
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default GameInviteModal;
