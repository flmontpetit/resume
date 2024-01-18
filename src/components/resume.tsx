import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import englishData from '../data/data.en';
import frenchData from '../data/data.fr';
import Header from "./header";
import palette from "../static/palette";
import ExperienceSection from "./experience-section";
import Footer from "./footer";
import TechnicalSkills from "./technical-skills-section";
import Education from "./education-section";
import Lang from "../models/lang";
import { useEffect, useState } from "react";
import { ResumeData } from "../models/resume-data";

const styles = StyleSheet.create({
  document: {
    fontFamily: 'Kameron'
  },
  page: {
    backgroundColor: palette.background
  },
});

const Resume = (props: { lang: Lang }) => {
  let [resumeData, setResumeData] = useState<ResumeData>(englishData);

  useEffect(() => {
    if (props.lang == "en")
      setResumeData(englishData);
    else
      setResumeData(frenchData);
  }, [props.lang]);

  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <Header data={resumeData.header} />
        <ExperienceSection positions={resumeData.positions} />
        <TechnicalSkills skills={resumeData.technicalSkills} />
      </Page>
      <Page>
        <Header data={resumeData.header} />
        <Education education={resumeData.education} />
        <Footer />
      </Page>
    </Document>
  );
}

export default Resume;