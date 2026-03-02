import "../../styles/pages.css";
import { useTranslation } from "react-i18next";

export default function Board() {
  const { t } = useTranslation();
  const members = t("board.members", { returnObjects: true }) || [];

  const boardImages = [
    "/board/1.png","/board/2.png","/board/3.png","/board/4.png",
    "/board/5.png","/board/6.png","/board/7.png","/board/8.png",
    "/board/9.png","/board/10.png","/board/11.png","/board/12.png",
    "/board/13.png","/board/14.png","/board/15.png","/board/16.png",
    "/board/17.png","/board/18.png"
  ];

  return (
    <section className="about-page">

      <div className="about-banner">
        <img src="/images/Raichur Dairy photo.jpg" alt="Board" />
      </div>

      <div className="about-container">
        <h1>{t("board.title")}</h1>

        <div className="board-grid">
          {members.map((member, index) => (
            <div className="board-card" key={index}>

              <div className="board-image">
                <img src={boardImages[index]} alt={member.name} />
              </div>

              <div className="board-info">
                <h3>{member.name}</h3>
                <p className="board-role">{member.role}</p>
                {member.city && (
                  <p className="board-role">{member.city}</p>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}