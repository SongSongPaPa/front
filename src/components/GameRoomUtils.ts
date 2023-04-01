import { useModal } from "../hooks/useModal";
import { testCallback } from "./callbacks";
import { modalState } from "../recoil/modal";
import { useCallback } from "react";

/*export const handleCreateRoomClick = useCallback(() => {
  const { openModal } = useModal();
  openModal({
    title: "asdfads",
    content: (
      <div>
        Content with callback function:{" "}
        <button onClick={testCallback}>Click me</button>
      </div>
    ),
    callback: testCallback,
  });
}, [openModal]);*/

/*export const handleCreateRoomClick = (openModal: modalState) => {
  openModal({
    title: "asdfads",
    content: (
      <div>
        Content with callback function:{" "}
        <button onClick={testCallback}>Click me</button>
      </div>
    ),
    callback: testCallback,
  });
};*/

/*export const handleCreateRoomClick = () => {
  const { openModal } = useModal();
  openModal({
    title: "asdfads",
    content: "asdfasdfadfadf",
    callback: testCallback,
  });
};*/
