import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  z-index: 101;
`;

export const ModalBody = styled.div`
  position: relative;
  flex-direction: row;
  top: 70px;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  z-index: 102;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatModal = styled.div`
  width: 864px;
  height: 683px;
  background-color: #ffffff;
  position: absolute;
  top: 18px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`;

export const ChatModalBody = styled.div`
  flex-direction: row;
  width: 300px;
  height: 683px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  z-index: 102;
`;
