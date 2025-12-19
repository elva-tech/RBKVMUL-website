import "../../styles/pages.css";

/* ===== BOARD MEMBERS DATA ===== */
/* 
  To add a new member:
  - Add one object here
  - DO NOT touch JSX below
*/

const boardMembers = [
  {
    name: "Shri K. Raghavendra hitnal",
    role: "President R.B.C.O. Milk Union and M.L.A",
    contact: "president@example.com",
    city:"Koppal Assembly Constituency",
    image: "/public/board/1.png",
  },
  {
    name: "Mr. N Satyanarayana",
    role: "Vice President",
    contact: "director1@example.com",
    image: "/public/board/2.png",
  },
  {
    name: "Shri L.B.P Bheemanayaka",
    role: "Director and Former M.L.A,",
    contact: "director2@example.com",
    city: " H.B Halli",
    image: "/public/board/3.png",
  },
  {
    name: "Shri Amargundappa",
    role: "Director",
    contact: "director3@example.com",
    image: "/public/board/4.png",
  },
  {
    name: "Shri Bheemanagouda",
    role: " Director",
    contact: "nominated@example.com",
    image: "/public/board/5.png",
  },
  {
    name: "Shri H. Muralasidappa",
    role: "Director",
    contact: "md@example.com",
    image: "/public/board/6.png",
  },
  {
    name: "Shrimati N. Sitaramalakshmi",
    role: "Director",
    contact: "nominated@example.com",
    image: "/public/board/7.png",
  },
  {
    name: "Shri Krishna Reddy",
    role: "Director",
    contact: "md@example.com",
    image: "/public/board/8.png",
  },
];

export default function Board() {
  return (
    <section className="about-page">

      {/* Top Banner */}
      <div className="about-banner">
        <img
          src="/images/Raichur Dairy photo.jpg"
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
                <p className="board-role">{member.city}</p>
                {/* <p className="board-contact">{member.contact}</p> */}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
