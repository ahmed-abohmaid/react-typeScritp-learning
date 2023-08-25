import { ChangeEvent, useState } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Section from './components/Section';
import { AuthUser } from './components/types/User.types';

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
    </>
  );
}

export default App;
