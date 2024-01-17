import { Font } from "@react-pdf/renderer";

export default () => {
  Font.registerEmojiSource({
    format: "png",
    url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
  });

  Font.register({
    family: "Kameron",
    src: "https://raw.githubusercontent.com/google/fonts/main/ofl/kameron/Kameron%5Bwght%5D.ttf",
  });
};
