import { useTranslation } from "react-i18next";
import "../styles/ticker.css";

const RECRUITMENT_URL = "https://virtualofficeerp.com/rbkmul2023/interview_login";

export default function RecruitmentTicker() {
  const { t } = useTranslation();

  const item = (key) => (
    <a
      key={key}
      className="recruit-ticker__link"
      href={RECRUITMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{t("recruitmentTicker.text")}</span>
      <span className="recruit-ticker__cta">{t("recruitmentTicker.cta")}</span>
    </a>
  );

  return (
    <div className="recruit-ticker">
      <span className="recruit-ticker__badge">{t("recruitmentTicker.badge")}</span>

      <div className="recruit-ticker__viewport">
        <div className="recruit-ticker__track">
          {item("a")}
          {item("b")}
        </div>
      </div>
    </div>
  );
}
