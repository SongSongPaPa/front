import React from "react";
import useModal from "@root/1_application/useModal";
import { useRecoilValue } from "recoil";
import { detailState, meState } from "@root/2_domain/recoil/userAtom";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import styled from "styled-components";
import Button from "@presentation/components/common/Button";
import useUserService from "@root/1_application/useUserService";
import useChatService from "@root/1_application/useChatService";
import { UserStateType } from "@root/2_domain/User";
import useGameService from "@root/1_application/useGameService";

const UserProfileModal = () => {
  const { hideModal } = useModal();
  const { followUser, unFollowUser, blockUser, unBlockUser } = useUserService();
  const { inviteUser } = useChatService();
  const { inviteGame } = useGameService();
  const detail = useRecoilValue(detailState);
  const me = useRecoilValue(meState);
  const isFriend = me.friends.find((item) => item.id === detail.id);
  const isBlocked = me.blocks.find((item) => item.id === detail.id);
  const onClose = () => {
    hideModal();
  };

  const handleClickFollow = () => {
    followUser(detail.id);
  };

  const handleClickUnfollow = () => {
    unFollowUser(detail.id);
  };

  const handleClickBlock = () => {
    blockUser(detail.id);
  };

  const handleClickUnBlock = () => {
    unBlockUser(detail.id);
  };
  const handleClickInvite = () => {
    inviteUser(detail.id);
    hideModal();
  };
  const handleClickInviteGame = () => {
    inviteGame(detail.id);
    hideModal();
  };
  console.log("in modal", detail);
  console.log("in modal me", me);
  if (!detail) {
    return <div>Loading...</div>;
  }
  return (
    <Modal>
      <ModalBody>
        <Image src={detail.profile} />
        <p>
          Lv.{detail.level} {detail.nickname}
        </p>
        {isFriend === undefined ? (
          <Button name="modal-round-common" onClick={handleClickFollow}>
            follow
          </Button>
        ) : (
          <Button name="modal-round-common" onClick={handleClickUnfollow}>
            unfollow
          </Button>
        )}
        {isBlocked === undefined ? (
          <Button name="modal-round-common" onClick={handleClickBlock}>
            block
          </Button>
        ) : (
          <Button name="modal-round-common" onClick={handleClickUnBlock}>
            unblock
          </Button>
        )}
        {me.state === UserStateType.INCHAT && (
          <Button name="modal-round-common" onClick={handleClickInvite}>
            chat invite
          </Button>
        )}
        {
          <Button name="modal-round-common" onClick={handleClickInviteGame}>
            game invite
          </Button>
        }
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default UserProfileModal;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 0.5px solid #d9d9d9;
`;
