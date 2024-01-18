import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import resumeData from "../data/data.fr";
import Header from "./header";
import palette from "../static/palette";
import ExperienceSection from "./experience-section";
import Footer from "./footer";
import TechnicalSkills from "./technical-skills-section";
import Education from "./education-section";

const styles = StyleSheet.create({
  document: {
    fontFamily: 'Kameron'
  },
  page: {
    backgroundColor: palette.background
  },
});

const Resume = () => {
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