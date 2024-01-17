import Position from "../models/position";
import JobInfo from "./job-info";
import Section from "./section";

export default (props: { positions: Position[] }) => {
  return (
    <Section title="Experience">
      {props.positions.map(position =>
        <JobInfo key={position.index} position={position} />
      )}
    </Section>
  );
}