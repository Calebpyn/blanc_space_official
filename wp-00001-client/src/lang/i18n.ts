import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//All translations
const resources = {
  es: {
    translation: {
      //Common
      send: "Enviar",
      unsuccess_message: "Oops, algo salió mal...",
      unsuccess_info_jobs: "Contáctanos a jobs@blncspace.com",
      unsuccess_info_info: "Contáctanos a info@blncspace.com",
      other: "Otro",

      //Navbar
      about_us: "Sobre Nosotros",
      who_we_are: "Quiénes somos",
      what_we_do: "Qué hacemos",
      work_with_us: "Trabaja con nosotros",
      contact: "Contacto",

      //Home
      //  Section 1
      sass_provider: "Proveedor de SASS",
      and_custom_sw: "& software personalizado",
      //  Section 2
      your_vision_our: "TU VISIÓN, NUESTRA",
      innovation: "INNOVACIÓN.",
      contact_us_to_upgrade: "Contáctanos para mejorar tu marca.",
      //  Section 3
      about_us_header: "SOBRE NOSOTROS",
      about_us_p1:
        "Fundada en 2024, Blancspace nació de una pasión compartida por fusionar un diseño excepcional con un desarrollo de software de alta calidad. Dirigida por el CEO Caleb Payán, quien aporta experiencia en empresas internacionales y proyectos en las industrias de la moda y el cold brew, Blancspace se impulsa por un profundo amor por el arte, el diseño y la tecnología. Nuestro CTO, Adrián Fernández, aprovecha su experiencia obtenida en pasantías en Meta para garantizar que nuestras soluciones sean no solo innovadoras, sino también robustas y escalables.",

      about_us_p2:
        "En Blancspace, creemos que el software debe ser más que funcional, debe ser una experiencia. Nuestra misión es crear soluciones que destaquen con diseños únicos e intuitivos y un rendimiento de primer nivel, asegurando que cada proyecto refleje nuestro compromiso tanto con la estética como con la tecnología.",

      //  Section 4
      who_we_are_title: "QUIÉNES SOMOS",
      section4_content:
        "Somos una empresa de software especializada en soluciones SaaS y desarrollo de software personalizado, con un fuerte énfasis en el diseño.",
      caleb_content: "Este es Caleb Payán, nuestro CEO y cofundador.",
      adrian_content: "Este es Adrián Fernández, nuestro CTO y cofundador.",

      //Section 5
      what_we_do_title: "QUÉ HACEMOS",
      what_we_do_content:
        "En Blancspace, no solo creamos software, creamos experiencias que no se ven ni se sienten como software típico. Ya sea una plataforma SaaS única o una aplicación personalizada, nuestras soluciones están diseñadas para destacar con una calidad excepcional y un enfoque en un gran diseño. Creemos que el software debe ser intuitivo, visualmente impactante y todo menos común. Con un profundo compromiso con el servicio al cliente, trabajamos de cerca contigo para entregar productos tan distintivos como tu marca.",

      //  Section 6
      company: "empresa",
      message: "mensaje",
      upgrade_your_brand: "MEJORA TU MARCA",
      contact_us: "CONTÁCTANOS",

      success_message_info: "Mensaje Enviado",

      //Jobs
      //  Section 1
      name: "nombre",
      email: "correo electrónico",
      position: "puesto",
      resume: "currículum",
      designer: "Diseñador",

      success_message: "Solicitud Enviada",

      //Footer
      //  Only section
      content_ft_s1_1: "© 2024 Blancspace. Todos los derechos reservados.",
      content_ft_s1_2:
        "Privacidad: Respetamos tu privacidad y estamos comprometidos a proteger tu información personal. Para más detalles, revisa nuestra Política de Privacidad.",
      content_ft_s1_3:
        "Blancspace es una marca registrada. Todas las demás marcas son propiedad de sus respectivos dueños.",
    },
  },
  en: {
    translation: {
      //Common
      send: "Send",
      unsuccess_message: "Oops, something went wrong...",
      unsuccess_info_jobs: "Contact us to jobs@blncspace.com",
      unsuccess_info_info: "Contact us to info@blncspace.com",
      other: "Other",

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
      //  Section 3
      about_us_header: "ABOUT US",
      about_us_p1:
        "Founded in 2024, Blancspace was born from a shared passion for merging exceptional design with high-quality software development. Led by CEO Caleb Payán, who brings experience from international companies and ventures in the fashion and cold brew industries, Blancspace is driven by a deep love for art, design, and technology. Our CTO, Adrián Fernández, leverages his expertise gained from internships at Meta to ensure our solutions are not only innovative but also robust and scalable.",
      about_us_p2:
        "At Blancspace, we believe software should be more than just functional—it should be an experience. Our mission is to create solutions that stand out with unique, intuitive designs and top-tier performance, ensuring every project reflects our commitment to both aesthetics and technology.",

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

      success_message_info: "Message Sent",

      //Jobs
      //  Section 1
      name: "name",
      email: "email",
      position: "position",
      resume: "resume",
      designer: "Designer",

      success_message: "Application Submited",

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
