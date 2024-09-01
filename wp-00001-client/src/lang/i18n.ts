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
      contact_us_to_upgrade: "Contáctanos para mejorar tu marca.",
      //  Section 4
      who_we_are_title: "QUIÉNES SOMOS",
      section4_content:
        "Somos una empresa de software especializada en soluciones SaaS y desarrollo de software a la medida, con un fuerte enfoque en el diseño.",
      caleb_content: "Este es Caleb Payán, nuestro CEO y cofundador.",
      adrian_content: "Este es Adrián Fernández, nuestro CTO y cofundador.",
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
      contact_us_to_upgrade: "Contact us to upgrade your brand.",
      //  Section 4
      who_we_are_title: "WHO WE ARE",
      section4_content:
        "We are a software company specializing in SaaS solutions and custom software development, with a strong emphasis on design.",
      caleb_content: "This is Caleb Payan, our CEO and Co-Founder.",
      adrian_content: "This is Adrián Fernández, our CTO and Co-Founder.",
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
