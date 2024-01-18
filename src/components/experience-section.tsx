import Position from "../models/position";
import JobInfo from "./job-info";
import Section from "./section";

const ExperienceSection = (props: { positions: Position[] }) => {
  return (
    <Section title="Experience">
      {props.positions.map(position =>
        <JobInfo key={position.index} position={position} />
      )}
    </Section>
  );
}

export default ExperienceSection;