import { StyledButton } from "./ButtonStyle";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button = ({ name, children, ...rest }: ButtonProps) => {
  return (
    <StyledButton className={name} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

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
