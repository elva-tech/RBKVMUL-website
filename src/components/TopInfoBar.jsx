import { useTranslation } from "react-i18next";
import "../styles/navbar.css";

export default function TopInfoBar() {
  const { t } = useTranslation();

  return (
    <div className="top-info-bar">
      <img
        src="/images/siddanagowda patil.png"
        alt=""
        className="topbar-img"
      />

      <span className="topbar-text">
        {t("topInfoBar.unionName")}
      </span>

      <img
        src="/images/founder-of-milk verghese Kurien Photo.png"
        alt=""
        className="topbar-img"
      />
    </div>
  );
}
