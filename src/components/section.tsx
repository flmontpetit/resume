import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import Separator from "./separator";
import palette from "../static/palette";

interface SectionProps {
  title: string;
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  title: {
    color: palette.main,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
});

const Section = (props: PropsWithChildren<SectionProps>) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.title}</Text>
      <Separator />
      <View style={styles.content}>{props.children}</View>
    </View>
  );
};

export default Section;
