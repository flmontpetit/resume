import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Lang from "../models/lang";


interface LanguageSelectorProps {
  onLanguageSwitch: (lang: Lang) => void
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  let [lang, setLang] = useState<Lang>("en");

  const onClick = () => {
    const newLang = lang == "en" ? "fr" : "en";
    props.onLanguageSwitch(newLang);
    setLang(newLang);
  }

  return (
    <Button onClick={onClick}>
      {lang == "en" ? "Afficher en français" : "Switch to English"}
    </Button>
  );
}

export default LanguageSelector;