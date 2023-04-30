import styled from "styled-components";
import { ButtonStyle } from "./ButtonStyle";

interface ButtonProps {
  type: string;
  children: string | JSX.Element;
}

/*const StyledButton = styled.button<ButtonProps>`
  ${({ type }) => ButtonStyle[type]};
`;

const Button = ({ type, children, ...rest }: ButtonProps) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
*/
