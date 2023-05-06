import React from "react";
import useModal from "@root/1_application/useModal";
import { useRecoilValue } from "recoil";
import { otherState } from "@root/2_domain/recoil/userAtom";
import { Modal, ModalBody, Overlay } from "./ModalStyle";

const UserProfileModal = () => {
  const { hideModal } = useModal();
  const profile = useRecoilValue(otherState);

  const onClose = () => {
    hideModal();
  };
  //if (!profile) {
  //  return <div>Loading...</div>;
  //}
  return (
    <Modal>
      <ModalBody>
        <p>{profile ? profile.name : "Loading..."}</p>
      </ModalBody>
      <Overlay onClick={onClose} />
    </Modal>
  );
};

export default UserProfileModal;
