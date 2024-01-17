import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import './App.css';
import Resume from './components/resume';
import registerFonts from './static/register-fonts';

const styles = StyleSheet.create({
  viewer: {
    flexGrow: 1
  },
})

export default function App() {
  registerFonts();

  return (
    <PDFViewer style={styles.viewer}>
      <Resume />
    </PDFViewer>
  )
}