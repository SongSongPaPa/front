import useChatService from "@root/1_application/useChatService";
import styled from "styled-components";
import Button from "../components/common/Button";
import { Overlay } from "../modals/ModalStyle";

const PopoverWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  width: 50px;
  height: 60px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  z-index: 104;
`;

const Popover = ({ onClose, userId }: { onClose: () => void; userId: number }) => {
  const { kickUser, muteUser, setAdmin } = useChatService();
  const handleClickKick = () => {
    kickUser(userId);
  };

  const handleClickMute = () => {
    muteUser(userId);
  };

  const handleClickAdmin = () => {
    setAdmin(userId);
  };
  return (
    <div>
      <PopoverWrapper>
        <Button name="asdf" onClick={handleClickKick}>
          kick
        </Button>
        <Button name="asdf" onClick={handleClickMute}>
          mute
        </Button>
        <Button name="asdf" onClick={handleClickAdmin}>
          admin
        </Button>
      </PopoverWrapper>
      <Overlay onClick={onClose} />
    </div>
  );
};

export default Popover;
