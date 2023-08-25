import { MouseEvent } from 'react';

type ButtonProps = {
  handleClick: (event: MouseEvent) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(e) => handleClick(e)}>Button</button>;
};

export default Button;
