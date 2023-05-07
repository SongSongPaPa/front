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

const Image = styled.img`
  width: 49px;
  height: 49px;
`;

const UserProfileModal = () => {
  const { hideModal } = useModal();
  const { followUser, unFollowUser, blockUser, unBlockUser } = useUserService();
  const { inviteUser } = useChatService();
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
  if (!detail) {
    return <div>Loading...</div>;
  }

  const handleClickBlock = () => {
    blockUser(detail.id);
  };

  const handleClickUnBlock = () => {
    unBlockUser(detail.id);
  };
  const handleClickInvite = () => {
    inviteUser(detail.id);
  };
  console.log("in modal", detail);
  return (
    <Modal>
      <ModalBody>
        <Image src={detail.profile} />
        <p>
          Lv.{detail.level}
          {detail.nickname}
        </p>
        <div>Achievements</div>
        <div>
          {detail.achievements.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
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
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default UserProfileModal;
