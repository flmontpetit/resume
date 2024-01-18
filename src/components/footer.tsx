import { Text, Link, StyleSheet } from "@react-pdf/renderer"
import palette from "../static/palette";
import { useTranslation } from "react-i18next";

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

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Text style={styles.footer}>
      {t('footer.madeWith')}
      <Link src="https://react-pdf.org/">{'react-pdf.'}</Link>
      {' '}
      {t('footer.viewSourceCode')}
      <Link src="https://github.com/flmontpetit/resume">{t('footer.here')}</Link>
    </Text>
  )
}

export default Footer;