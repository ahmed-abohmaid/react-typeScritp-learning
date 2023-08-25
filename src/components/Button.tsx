import { ButtonProps } from './types/Button.types';

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(e) => handleClick(e)}>Button</button>;
};

export default Button;
