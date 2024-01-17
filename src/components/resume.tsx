import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import resumeData from "../data/data.en";
import Header from "./header";
import palette from "../static/palette";
import Experience from "./experience";
import Footer from "./footer";
import TechnicalSkills from "./technical-skills";
import Education from "./education";

const styles = StyleSheet.create({
  document: {
    fontFamily: 'Kameron'
  },
  page: {
    backgroundColor: palette.background
  },
});

export default () => {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <Header data={resumeData.header} />
        <Experience positions={resumeData.positions} />
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