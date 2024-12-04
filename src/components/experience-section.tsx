import { useTranslation } from "react-i18next";
import Position from "../models/position";
import JobInfo from "./job-info";
import Section from "./section";

const ExperienceSection = (props: { positions: Position[] }) => {
  const { t } = useTranslation();

  return (
    <Section title={t("experience")}>
      {props.positions.map((position) => (
        <JobInfo key={position.index} position={position} />
      ))}
    </Section>
  );
};

export default ExperienceSection;
