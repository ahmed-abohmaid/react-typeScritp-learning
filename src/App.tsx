import { ChangeEvent, useState } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Section from './components/Section';
import { AuthUser } from './components/types/User.types';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Boxs from './components/context/Boxs';

// type counterAction = {
//   type: 'increment' | 'dcreament' | 'reset';
//   payload?: number;
// };

// const initialState = { count: 0 };

// function reducer(state: { count: number }, action: counterAction) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + (action.payload || 0) };
//     // To fix action.payload problem we can make this or make separate type for reset action which not need a payload and remove "?"
//     case 'dcreament':
//       return { count: state.count - (action.payload || 0) };
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }

function App() {
  const [user, setUSer] = useState<AuthUser | null>(null);

  const handleChange = (e: ChangeEvent): void => {
    console.log(e);
  };

  return (
    <>
      <Heading title="Hello!" />
      <Section msgCount={1}>This is section description</Section>
      <Button
        handleClick={(e) => {
          console.log('Clicked', e);
        }}
      />
      <input onChange={(e) => handleChange(e)} />
      <br />
      <Button
        handleClick={() => {
          setUSer({
            name: 'Ahmed',
            email: 'ahmed@gmail.com',
          });
        }}
      />
      <div>
        <p>User: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>

      <ThemeContextProvider>
        <Boxs />
      </ThemeContextProvider>
    </>
  );
}

export default App;
