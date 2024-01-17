import { StyleSheet, View, Text, Image, Link } from "@react-pdf/renderer";
import HeaderData from "../models/header-data";
import linkedInLogo from "../static/LinkedIn_logo_initials.png";
import githubLogo from "../static/github-mark.png";
import palette from "../static/palette";
import RightAligned from "./right-aligned";

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px'
  },
  personalInfo: {
    flexGrow: 1,
    flexDirection: 'column'
  },
  contactInfo: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  logo: {
    height: '12px',
    width: '12px',
    marginRight: '2px'
  },
  fullName: {
    color: palette.main,
    fontSize: '20'
  },
  jobTitle: {
    color: palette.light,
    fontSize: '18'
  },
  detail: {
    color: palette.link,
    fontSize: '12'
  }
});

export default (props: { data: HeaderData }) => {
  const { data } = props;

  return (
    <View style={styles.header}>
      <View style={styles.personalInfo}>
        <Text style={styles.fullName}>
          {data.personalInfo.fullName}
        </Text>
        <Text style={styles.jobTitle}>
          {data.personalInfo.jobTitle}
        </Text>
      </View>
      <View style={styles.contactInfo}>
        <RightAligned>
          <Text style={styles.detail}>
            {data.contactInfo.phoneNumber}
          </Text>
        </RightAligned>
        <RightAligned>
          <Text style={styles.detail}>
            {data.contactInfo.emailAddress}
          </Text>
        </RightAligned>
        <RightAligned>
          <Link src={data.contactInfo.linkedInProfileUrl} style={styles.detail}>
            {data.contactInfo.linkedInProfileName}
          </Link>
          <Image src={linkedInLogo} style={styles.logo} />
        </RightAligned>
        <RightAligned>
          <Link src={data.contactInfo.githubProfileUrl} style={styles.detail}>
            {data.contactInfo.githubProfileName}
          </Link>
          <Image src={githubLogo} style={styles.logo} />
        </RightAligned>
      </View>
    </View>
  );
};