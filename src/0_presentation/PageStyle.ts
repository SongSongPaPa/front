import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    margin-bottom: 20px;
  }
`;

export const UserInterfaceWrapper = styled.div`
  margin-left: 20px;
`;

export const RoomListContainer = styled.div`
  display: flex;
  position: relative;
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

export const LoginWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  > a {
    text-decoration: none;
    color: #000000;
    font-family: Bouncy;
    font-size: 36px;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    border: none;
    background-color: #e2e2e2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    bottom: 25%;
    left: auto;
    width: 205px;
    height: 77px;
    line-height: 77px;
    border-radius: 25px;
  }
`;
