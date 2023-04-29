import styled from "styled-components";

export const RoomListContainer = styled.div`
  display: flex;
  width: 864px;
  height: 332px;
  background-color: #fcfcfc;
  border-radius: 25px;
  top: 10px;
  left: 10px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;

  & > * {
    margin-left: 10px;
  }
`;
