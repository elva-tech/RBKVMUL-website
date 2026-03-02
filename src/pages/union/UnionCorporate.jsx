import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function UnionCorporate() {
  const { t } = useTranslation();

  const fields = [
    "corporate",
    "registration",
    "headOffice",
    "gstin",
    "pan",
    "documents"
  ];

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("unionCorporate.title")}</h1>

        <div className="about-block">
          <table className="custom-table">
            <tbody>
              <tr>
                {/* LEFT BIG COLUMN */}
                <td
                  rowSpan={fields.length}
                  style={{
                    fontWeight: "600",
                    width: "25%",
                    verticalAlign: "top"
                  }}
                >
                  {t("unionCorporate.title")}
                </td>

                {/* FIRST ROW (dynamic) */}
                <td style={{ width: "30%", fontWeight: "500" }}>
                  {t(`unionCorporate.fields.${fields[0]}`)}
                </td>
                <td>
                  {t("unionCorporate.placeholder")}
                </td>
              </tr>

              {/* REST ROWS */}
              {fields.slice(1).map((key) => (
                <tr key={key}>
                  <td style={{ fontWeight: "500" }}>
                    {t(`unionCorporate.fields.${key}`)}
                  </td>
                  <td>
                    {t("unionCorporate.placeholder")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}