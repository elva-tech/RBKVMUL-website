import { useTranslation } from "react-i18next";
import "../styles/navbar.css";

export default function TopInfoBar() {
  const { t } = useTranslation();

  return (
    <div className="top-info-bar">
      {t("topInfoBar.unionName")}
    </div>
  );
}
