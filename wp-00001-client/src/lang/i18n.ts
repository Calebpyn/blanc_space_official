import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//All translations
const resources = {
  es: {
    translation: {
      //Navbar
      about_us: "About Us",
      who_we_are: "Who we are",
      what_we_do: "What we do",
      work_with_us: "Work with us",
      contact: "Contact",

      //Home
      //  Section 1
      sass_provider: "SASS provider",
      and_custom_sw: "& custom software",
      //  Section 2
      your_vision_our: "TU VISIÓN, NUESTRA",
      innovation: "INNOVACIÓN.",
      contact_us_to_upgrade: "Contáctanos para mejorar tu",
      brand: "marca."
    },
  },
  en: {
    translation: {
      //Navbar
      about_us: "About Us",
      who_we_are: "Who we are",
      what_we_do: "What we do",
      work_with_us: "Work with us",
      contact: "Contact",

      //Home
      //  Section 1
      sass_provider: "SASS provider",
      and_custom_sw: "& custom software",
      //  Section 2
      your_vision_our: "YOUR VISION, OUR",
      innovation: "INNOVATION.",
      contact_us_to_upgrade: "Contact us to upgrade your",
      brand: "brand."
    },
  },
};

//i18n Init
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
