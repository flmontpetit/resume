import { Text, Link, StyleSheet } from "@react-pdf/renderer"
import palette from "../static/palette";

const styles = StyleSheet.create({
  footer: {
    fontSize: '10',
    color: palette.light,
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default () => {
  return (
    <Text style={styles.footer}>
      {'This CV was made with '}
      <Link src="https://react-pdf.org/">{'react-pdf.'}</Link>
      {' View the source code '}
      <Link src="https://github.com/flmontpetit/resume">{'here!'}</Link>
    </Text>
  )
}