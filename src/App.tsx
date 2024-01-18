import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import './App.css';
import Resume from './components/resume';
import registerFonts from './static/register-fonts';
import { ChakraProvider } from '@chakra-ui/react';
import LanguageSelector from './components/language-selector';
import Lang from './models/lang';
import i18next from 'i18next';
import { useState } from 'react';
import { initReactI18next } from 'react-i18next';
import translation from './static/translation.json';

const styles = StyleSheet.create({
  viewer: {
    flexGrow: 1
  },
})

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: translation,
  interpolation: {
    escapeValue: false
  }
});


export default function App() {
  registerFonts();
  const [lang, setLang] = useState<Lang>("en");

  const onLanguageSwitch = (lang: Lang) => {
    setLang(lang);
    i18next.changeLanguage(lang);
  }

  return (
    <ChakraProvider>
      <LanguageSelector onLanguageSwitch={onLanguageSwitch} />
      <PDFViewer style={styles.viewer}>
        <Resume lang={lang} />
      </PDFViewer>
    </ChakraProvider>
  )
}