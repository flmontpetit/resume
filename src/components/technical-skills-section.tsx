import { StyleSheet, View, Text } from "@react-pdf/renderer"
import TechnicalSkills from "../models/technical-skills";
import palette from "../static/palette";
import Section from "./section";

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px'
  },
  category: {
    display: 'flex',
    flexDirection: 'row'
  },
  categoryName: {
    minWidth: '140px',
    fontSize: '12px',
    color: palette.light,
  },
  categoryEntries: {
    color: palette.link,
    flexGrow: 1,
    fontSize: '12px'
  }
});

const TechnicalSkillsSection = (props: { skills: TechnicalSkills[] }) => {
  return (
    <Section title="Technical skills">
      {props.skills.map(ts => (
        <View key={ts.category} style={styles.category}>
          <Text style={styles.categoryName}>{ts.category}:</Text>
          <Text style={styles.categoryEntries}>{ts.entries.join(', ')}</Text>
        </View>
      ))}
    </Section>
  );
}

export default TechnicalSkillsSection;