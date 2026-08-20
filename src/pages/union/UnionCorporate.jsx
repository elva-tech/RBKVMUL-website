import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

/* Source: GST Registration Certificate, GSTIN 29AACAR9912P1ZP (issued 04/02/2019).
   Labels and values both live in the translation files so the table follows
   the language toggle. */
const fields = [
  "legalName",
  "tradeName",
  "constitution",
  "gstin",
  // "pan",
  "registrationType",
  "dateOfLiability",
  "certificateIssued",
  "headOffice"
];

export default function UnionCorporate() {
  const { t } = useTranslation();

  const places = t("unionCorporate.places", { returnObjects: true });
  const additionalPlaces = Array.isArray(places) ? places : [];

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("unionCorporate.title")}</h1>

        <div className="about-block">
          <table className="custom-table">
            <tbody>
              {fields.map((key, index) => (
                <tr key={key}>
                  {/* LEFT BIG COLUMN */}
                  {index === 0 && (
                    <td
                      rowSpan={fields.length + 1}
                      style={{
                        fontWeight: "600",
                        width: "25%",
                        verticalAlign: "top"
                      }}
                    >
                      {t("unionCorporate.title")}
                    </td>
                  )}

                  <td style={{ width: "30%", fontWeight: "500" }}>
                    {t(`unionCorporate.fields.${key}`)}
                  </td>
                  <td>{t(`unionCorporate.values.${key}`)}</td>
                </tr>
              ))}

              <tr>
                <td style={{ width: "30%", fontWeight: "500" }}>
                  {t("unionCorporate.fields.additionalPlaces")}
                </td>
                <td>
                  <ol style={{ paddingLeft: "18px", lineHeight: "1.8" }}>
                    {additionalPlaces.map((place) => (
                      <li key={place}>{place}</li>
                    ))}
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
