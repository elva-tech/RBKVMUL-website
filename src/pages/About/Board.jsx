import "../../styles/pages.css";

/* ===== BOARD MEMBERS DATA ===== */
/* 
  To add a new member:
  - Add one object here
  - DO NOT touch JSX below
*/

const boardMembers = [
  {
    name: "Shri K. Raghavendra Hitnal",
    role: "President R.B.C.O. Milk Union and M.L.A",
    contact: "president@example.com",
    city:"Koppal Assembly Constituency",
    image: "/board/1.png",
  },
  {
    name: "Mr. N Satyanarayana",
    role: "Vice President",
    contact: "director1@example.com",
    image: "/board/2.png",
  },
  {
    name: "Shri L.B.P Bheemanayaka",
    role: "Director and Former M.L.A,",
    contact: "director2@example.com",
    city: " H.B Halli",
    image: "/board/3.png",
  },
  {
    name: "Shri Amargundappa",
    role: "Director",
    contact: "director3@example.com",
    image: "/board/4.png",
  },
  {
    name: "Shri Bheemanagouda",
    role: " Director",
    contact: "nominated@example.com",
    image: "/board/5.png",
  },
  {
    name: "Shri H. Muralasidappa",
    role: "Director",
    contact: "md@example.com",
    image: "/board/6.png",
  },
  {
    name: "Shrimati N. Sitaramalakshmi",
    role: "Director",
    contact: "nominated@example.com",
    image: "/board/7.png",
  },
  {
    name: "Shri Krishna Reddy",
    role: "Director",
    contact: "md@example.com",
    image: "/board/8.png",
  },


   {
    name: "Shri Bhaghola Chidananda",
    role: "Director",
    contact: "director3@example.com",
    image: "/board/9.png",
  },
  {
    name: "Shri Praveenakumara",
    role: " Director",
    contact: "nominated@example.com",
    image: "/board/10.png",
  },
  {
    name: "Shri Manjunadha",
    role: "Director",
    contact: "md@example.com",
    image: "/board/11.png",
  },
  {
    name: "Shrimati H. Ratnamma",
    role: "Director",
    contact: "nominated@example.com",
    image: "/board/12.png",
  },
  {
    name: "Shrimati Kamalavva ",
    role: "Director",
    contact: "md@example.com",
    image: "/board/13.png",
  },
   {
    name: "Shri Vishwanath Mahanthappa Malakuda",
    role: "Director",
    contact: "director3@example.com",
    image: "/board/14.png",
  },
  {
    name: "Shri Dhawal Paanchal",
    role: " Director",
    contact: "nominated@example.com",
    image: "/board/15.png",
  },
  {
    name: "Shri P. Ramakrushappa",
    role: "Director",
    contact: "md@example.com",
    image: "/board/16.png",
  },
  {
    name: "Dr. Hanumantha Naik",
    role: "Director",
    contact: "nominated@example.com",
    image: "/board/17.png",
  },
  {
    name: "Shri  B.R Prabhushankar",
    role: "Managing Director",
    contact: "md@example.com",
    image: "/board/18.png",
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
