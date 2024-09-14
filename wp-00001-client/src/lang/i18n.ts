import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//All translations
const resources = {
  es: {
    translation: {
      //Common
      send: "Enviar",

      //Navbar
      about_us: "Sobre Nosotros",
      who_we_are: "Quiénes Somos",
      what_we_do: "Qué hacemos",
      work_with_us: "Trabaja con Nosotros",
      contact: "Contáctanos",

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

      //  Section 6
      company: "compañia",
      message: "mensaje",
      upgrade_your_brand: "UPGRADE YOUR BRAND",
      contact_us: "CONTACT US",

      //Jobs
      //  Section 1
      name: "nombre",
      email: "correo",
      position: "posición",
      resume: "cv",
      designer: "Diseñador",

      //Footer
      //  Only sectionn
      content_ft_s1_1: "© 2024 Blancspace. Todos los derechos reservados.",
      content_ft_s1_2:
        "Privacidad: Respetamos su privacidad y estamos comprometidos a proteger su información personal. Para más detalles, consulte nuestra Política de Privacidad.",
      content_ft_s1_3:
        "Blancspace es una marca registrada. Todas las demás marcas son propiedad de sus respectivos dueños.",
    },
  },
  en: {
    translation: {
      //Common
      send: "Send",

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

      //Section 5
      what_we_do_title: "WHAT WE DO",
      what_we_do_content:
        "At Blancspace, we don’t just create software—we craft experiences that don’t look or feel like typical software. Whether it’s a unique SaaS platform or a custom app, our solutions are designed to stand out with exceptional quality and a focus on great design. We believe software should be intuitive, visually stunning, and anything but average. With a deep commitment to customer service, we work closely with you to deliver products that are as distinctive as your brand.",

      //  Section 6
      company: "company",
      message: "message",
      upgrade_your_brand: "UPGRADE YOUR BRAND",
      contact_us: "CONTACT US",

      //Jobs
      //  Section 1
      name: "name",
      email: "email",
      position: "position",
      resume: "resume",
      designer: "Designer",

      //Footer
      //  Only sectionn
      content_ft_s1_1: "© 2024 Blancspace. All rights reserved.",
      content_ft_s1_2:
        "Privacy: We respect your privacy and are committed to protecting your personal information. For more details, please review our Privacy Policy.",
      content_ft_s1_3:
        "Blancspace is a registered trademark. All other trademarks are the property of their respective owners.",
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
