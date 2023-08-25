import { ChangeEvent } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Section from './components/Section';

function App() {
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
    </>
  );
}

export default App;
