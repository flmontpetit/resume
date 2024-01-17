import { View, StyleSheet } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";

const styles = StyleSheet.create({
  rightAligned: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center'
  }
});

// Regular approaches to right-alignment don't seem to work with react-pdf 
// So this should do in the meantime
const RightAligned = (props: PropsWithChildren) => {
  return (
    <View style={styles.rightAligned}>
      {props.children}
    </View>
  );
}

export default RightAligned;