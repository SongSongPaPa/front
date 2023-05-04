import styled, { css, CSSProperties } from "styled-components";

type ButtonStyleType = {
  [key: string]: string;
};

export const ButtonStyle: ButtonStyleType = {
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
    color: #000000; 
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
    color: #000000; 
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
    color: #000000; 
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
  "user-banner": `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-family: Bouncy;
  font-size: 14px;
  background-color: #fcfcfc;
  width: 140px;
  height: 40px;
  margin-top: 10px;
  cursor: pointer;
  color:black;
  gap:10px;
}`,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ className }) => ButtonStyle[className]};
`;

// export const StyledIcon = styled.div`
//   ${({ className }) => IconStyle[className]};
// `;

// export const IconStyle = {
//   "setting-icon": `
//     background-color: #6c757d;
//     color: white;
//   `,
//   "menu-icon": `
//     background-color: #6c757d;
//     color: white;
//   `,
//   "back-icon": `
//     background-color: #6c757d;
//     color: white;
//   `,
//   "send-icon": `
//     background-color: #6c757d;
//     color: white;
//   `,
//   "crown-silver-icon": `
//     background-color: #6c757d;
//     color: white;
//   `,
//   "crown-silver-icon": `
//     background-color: #6c757d;
//     color: white;
//   `,
//   "dot-green": `
//   width: 8px;
//   height: 8px;
//   background-color: #bfff8c;
//   border-radius: 50%;
//   border: none;
// `,
//   "dot-gray": `
//   width: 8px;
//   height: 8px;
//   background-color: #e9e9e9;
//   border-radius: 50%;
//   border: none;
// `,
//   "dot-yellow": `
//   width: 8px;
//   height: 8px;
//   background-color: #fbe38f;
//   border-radius: 50%;
//   border: none;
// `,
// };
