import Education from "./education";
import HeaderData from "./header-data";
import Position from "./position";
import TechnicalSkills from "./technical-skills";

export interface ResumeData {
  header: HeaderData;
  positions: Position[];
  technicalSkills: TechnicalSkills[];
  education: Education[];
}
