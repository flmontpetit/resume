import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Section from "./section";
import Education from "../models/education";
import palette from "../static/palette";
import RightAligned from "./right-aligned";

const styles = StyleSheet.create({
  entry: {
    marginBottom: '10px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  establishment: {
    fontSize: '14',
    color: palette.light
  },
  yearRange: {
    fontSize: '12',
    color: palette.link
  },
  program: {
    fontSize: '12'
  },
  note: {
    fontSize: '10'
  }
});

const EducationSection = (props: { education: Education[] }) => {
  return (
    <Section title="Education">
      {props.education.map(ed => (
        <View style={styles.entry} key={ed.establishment}>
          <View style={styles.row}>
            <Text style={styles.establishment}>{ed.establishment}</Text>
            <RightAligned>
              <Text style={styles.yearRange}>{ed.startYear}{' - '}{ed.endYear}</Text>
            </RightAligned>
          </View>
          <Text style={styles.program}>{ed.program}</Text>
          {ed.note && <Text style={styles.note}>{ed.note}</Text>}
        </View>
      ))}
    </Section>
  );
}

export default EducationSection;