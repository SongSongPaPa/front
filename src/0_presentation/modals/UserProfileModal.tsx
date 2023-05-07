import React from "react";
import useModal from "@root/1_application/useModal";
import { useRecoilValue } from "recoil";
import { detailState, meState } from "@root/2_domain/recoil/userAtom";
import { Modal, ModalBody, Overlay } from "./ModalStyle";
import styled from "styled-components";
import Button from "@presentation/components/common/Button";
import useUserService from "@root/1_application/useUserService";

const Image = styled.img`
  width: 49px;
  height: 49px;
`;

const UserProfileModal = () => {
  const { hideModal } = useModal();
  const { followUser, unFollowUser, blockUser, unBlockUser } = useUserService();
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
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default UserProfileModal;
