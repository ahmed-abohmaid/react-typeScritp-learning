import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Boxs = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme Context
    </div>
  );
};

export default Boxs;
