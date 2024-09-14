//Description: Common Footer

//Hooks
import { useEffect } from "react";

//Assets
import mainBg from "../../assets/common/footer-asset.png";

//Translation
import { useTranslation } from "react-i18next";

function Footer() {
  //Translation
  const { t } = useTranslation();

  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${mainBg})` }}
      className="w-full h-[200px] bg-cover bg-top text-white font-gopherRegular p-5 flex flex-col gap-6"
    >
      <span className="flex flex-col">
        <span>{t("content_ft_s1_1")}</span>
        <span>{t("content_ft_s1_3")}</span>
      </span>
      <span>{t("content_ft_s1_2")}</span>
    </div>
  );
}

export default Footer;
