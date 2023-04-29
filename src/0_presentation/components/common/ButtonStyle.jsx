import styled from "styled-components";

export const ButtonStyle = {
  "lobby-small-common": `
    font-family: Bouncy;
    font-size: 15px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 25px;
    color: #000000;
    cursor: pointer;
    width: 116px;
    height: 28px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  `,
  "join-chat": `
    font-family: Bouncy;
    font-size: 16px;
    width: 98px;
    height: 106px;
    background-color: #7abfff;
    border-radius: 25px 0px 0px 25px;
    border: none;
    position: absolute;
    top: 0px;
  `,
  "join-game": `
    font-family: Bouncy;
    font-size: 16px;
    width: 98px;
    height: 53px;
    background-color: #bfff8c;
    border-radius: 25px 0px 0px 0px;
    border: none;
    position: absolute;
    top: 0%;
    cursor: pointer;
  `,
  "watch-game": `
    font-family: Bouncy;
    font-size: 16px;
    width: 98px;
    height: 53px;
    background-color: #fbe38f;
    border-radius: 0px 0px 0px 25px;
    border: none;
    position: absolute;
    bottom: 0%;
    cursor: pointer;
  `,
  "modal-sqaure-common": `
    background-color: #6c757d;
    color: white;
  `,
  "modal-round-common": `
    background-color: #6c757d;
    color: white;
  `,
  "invite-text-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "invite-confirm": `
    background-color: #6c757d;
    color: white;
  `,
};

export const StyledButton = styled.button`
  ${({ type }) => ButtonStyle[type]};
`;

const IconStyle = {
  "setting-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "menu-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "back-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "send-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "crown-silver-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "crown-silver-icon": `
    background-color: #6c757d;
    color: white;
  `,
  "dot-green": `
  width: 8px;
  height: 8px;
  background-color: #bfff8c;
  border-radius: 50%;
  border: none;
`,
  "dot-gray": `
  width: 8px;
  height: 8px;
  background-color: #e9e9e9;
  border-radius: 50%;
  border: none;
`,
  "dot-yellow": `
  width: 8px;
  height: 8px;
  background-color: #fbe38f;
  border-radius: 50%;
  border: none;
`,
};