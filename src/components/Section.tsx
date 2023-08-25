import { ReactNode } from 'react';

type SectionProps = { title?: string; children: ReactNode; msgCount: number };

const Section = ({ title = 'Subheading', children, msgCount }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{msgCount}</p>
      <p>{children}</p>
    </section>
  );
};

export default Section;
