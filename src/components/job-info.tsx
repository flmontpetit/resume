import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Position from "../models/position";
import palette from "../static/palette";
import RightAligned from "./right-aligned";

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: '10px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '4px',
    paddingRight: '4px',
    borderRadius: '3px'
  },
  company: {
    color: palette.main,
    fontWeight: 'bold'
  },
  title: {
    color: palette.light,
    fontSize: '16'
  },
  dateRange: {
    fontSize: '14'
  },
  location: {
    fontSize: '12'
  },
  summarySection: {
    marginLeft: '10px'
  },
  summaryLine: {
    fontSize: '12'
  },
});

export default (props: { position: Position }) => {
  const position = props.position;
  const dateFormat = new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={[styles.headerRow, { backgroundColor: palette.section }]}>
          <Text style={styles.company}>{position.company}</Text>
          <RightAligned>
            <Text style={styles.dateRange}>
              {dateFormat.format(position.startDate)}
              {' - '}
              {position.endDate ? dateFormat.format(position.endDate) : 'Present'}
            </Text>
          </RightAligned>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{position.title}</Text>
          <RightAligned>
            <Text style={styles.location}>
              {position.location}
            </Text>
          </RightAligned>
        </View>
      </View>
      <View style={styles.summarySection}>
        {position.summary.map(tac =>
          <Text style={styles.summaryLine} key={tac}>• {tac}</Text>)}
      </View>
    </View >
  );
}