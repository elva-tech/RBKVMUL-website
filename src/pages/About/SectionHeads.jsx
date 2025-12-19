import "../../styles/pages.css";

/* ===== SECTION HEADS DATA ===== */
/*
  Add / remove section heads here.
  No JSX changes needed.
*/

const sectionHeads = [
  {
    name: "Shri R. S. Kumar",
    designation: "General Manager",
    department: "Operations",
    image: "/assets/section-heads/gm.jpg",
  },
  {
    name: "Smt. Anitha Rao",
    designation: "Deputy Manager",
    department: "Finance",
    image: "/assets/section-heads/finance.jpg",
  },
  {
    name: "Shri Mahesh P.",
    designation: "Assistant Manager",
    department: "Procurement",
    image: "/assets/section-heads/procurement.jpg",
  },
  {
    name: "Smt. Kavitha S.",
    designation: "Quality Control Officer",
    department: "Quality Assurance",
    image: "/assets/section-heads/quality.jpg",
  },
];

export default function SectionHeads() {
  return (
    <section className="about-page">

      {/* Top Banner */}
      <div className="about-banner">
        <img
          src="/assets/about/section-heads.jpg"
          alt="Section Heads"
        />
      </div>

      <div className="about-container">
        <h1>Section Heads</h1>

        <div className="board-grid">
          {sectionHeads.map((person, index) => (
            <div className="board-card" key={index}>

              <div className="board-image">
                <img
                  src={person.image}
                  alt={person.name}
                />
              </div>

              <div className="board-info">
                <h3>{person.name}</h3>
                <p className="board-role">{person.designation}</p>
                <p className="board-contact">{person.department}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
