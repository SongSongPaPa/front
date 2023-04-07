import { useRecoilState } from "recoil";
import { PopoverState } from "../recoil/test";
import "./ChatRoomPopover.css";

const ChatRoomPopover = ({ onClose }: { onClose: () => void }) => {
  const [showPopover, setShowPopover] = useRecoilState(PopoverState);
  return (
    <div className="popover">
      <button>kick</button>
      <button>mute</button>
      <button>staff</button>
      <div className="overlay" onClick={onClose}></div>
    </div>
  );
};

export default ChatRoomPopover;
