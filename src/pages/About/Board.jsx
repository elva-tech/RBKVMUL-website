import "../../styles/pages.css";

/* ===== BOARD MEMBERS DATA ===== */
/* 
  To add a new member:
  - Add one object here
  - DO NOT touch JSX below
*/

const boardMembers = [
  {
    name: "Shri R. Chaluvaraju",
    role: "President",
    contact: "president@example.com",
    image: "/assets/board/chaluvaraju.jpg",
  },
  {
    name: "Shri A. T. Somashekar",
    role: "Director",
    contact: "director1@example.com",
    image: "/assets/board/somashekar.jpg",
  },
  {
    name: "Shri K. G. Mahesh",
    role: "Director",
    contact: "director2@example.com",
    image: "/assets/board/mahesh.jpg",
  },
  {
    name: "Smt. B. K. Leela",
    role: "Director",
    contact: "director3@example.com",
    image: "/assets/board/leela.jpg",
  },
  {
    name: "Shri Guruswamy B.",
    role: "Nominated Director",
    contact: "nominated@example.com",
    image: "/assets/board/guruswamy.jpg",
  },
  {
    name: "Shri K. N. Suresh Naik",
    role: "Managing Director",
    contact: "md@example.com",
    image: "/assets/board/sureshnaik.jpg",
  },
];

export default function Board() {
  return (
    <section className="about-page">

      {/* Top Banner */}
      <div className="about-banner">
        <img
          src="/assets/about/board.jpg"
          alt="Board of Directors"
        />
      </div>

      <div className="about-container">
        <h1>Board of Directors</h1>

        <div className="board-grid">
          {boardMembers.map((member, index) => (
            <div className="board-card" key={index}>

              <div className="board-image">
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <div className="board-info">
                <h3>{member.name}</h3>
                <p className="board-role">{member.role}</p>
                <p className="board-contact">{member.contact}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
