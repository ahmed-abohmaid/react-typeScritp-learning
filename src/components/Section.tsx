import { SectionProps } from './types/Section.types';

const Section = ({
  title = 'Subheading',
  children,
  msgCount,
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{msgCount}</p>
      <p>{children}</p>
    </section>
  );
};

export default Section;
