import "../../styles/pages.css";

const milestones = [
  {
    year: "1988",
    points: [
      "Newly expanded 60 TLPD capacity Chilling Centre at Chamarajanagar.",
      "Training centre, Mysore handed over to MYMUL.",
    ],
  },
  {
    year: "1993",
    points: [
      "Cluster AI centers started in MYMUL, first time in Karnataka.",
      "IBP prepared at MYMUL for the first time in Karnataka.",
    ],
  },
  {
    year: "1998",
    points: [
      "Kollegal Chilling Centre commissioned.",
      "10 TL capacity Liquid Nitrogen Storage Tank installed.",
    ],
  },
  {
    year: "1999",
    points: [
      "‘NANDINI SALES DEPOT’ started at Chamarajanagar.",
      "Planted trees in 10 Acres land under social forestry scheme at Alanahally Farm.",
      "First Place at national level in construction of Smokeless Chullas.",
    ],
  },
  {
    year: "2000",
    points: [
      "Preparation of IBP in the Primary Dairy Cooperatives.",
    ],
  },
  {
    year: "2001",
    points: [
      "Production of Mysore Pak started.",
    ],
  },
  {
    year: "2002",
    points: [
      "Adopted ‘Mnemonic Symbol’ through NDDB.",
    ],
  },
  {
    year: "2003",
    points: [
      "Released Full Cream Milk in 500 ml & Toned Milk in 250 ml packets.",
      "Production of Flavored Milk started.",
    ],
  },
  {
    year: "2004",
    points: [
      "3 Nos each BMCs started in Gundlupet and KR Nagar taluk.",
      "MYMUL Raitha Kalyana Trust Started.",
    ],
  },
  {
    year: "2005",
    points: [
      "ISO 9001-2000 Certification obtained through TUV Rheinland.",
      "Received National Energy Conservation Award from Dr. A.P.J. Abdul Kalam, President of India.",
    ],
  },
  {
    year: "2006",
    points: [
      "Production of Badam Burfy and Cashew Burfy started.",
      "Released ghee in 50 ml and 100 ml packets.",
      "Ghee sales in PET jars started in Kerala.",
      "Auditorium at Chamarajanagara CC inaugurated and named Dr. Rajkumar Ksheera Bhavana.",
    ],
  },
  {
    year: "2007",
    points: [
      "Received National and State Energy Conservation Awards.",
      "Released 5 Litre Toned Milk packet and 100 g Peda packets.",
    ],
  },
  {
    year: "2008",
    points: [
      "Installation of 10 LPH Homogenizer.",
    ],
  },
  {
    year: "2009",
    points: [
      "ISO 9000-2008 Certification obtained.",
      "State Energy Conservation Award received.",
      "5 KLPH capacity RO Plant commissioned.",
      "Processing capacity expanded from 1.8 to 3.0 LLPD.",
      "Hunsur CC capacity expanded from 30,000 to 60,000 LPD.",
      "Installed Continuous Butter Making Machine (CBMM).",
      "Launched Nandini Homogenized Cow Milk and Shubham Milk.",
      "Introduced Kesar Peda, Nandini Bite, Khova, Paneer and Ghee PET jars.",
    ],
  },
  {
    year: "2010",
    points: [
      "Installation of Walk-in Cold Stores at Chamarajanagar and Kollegal.",
      "Installation of 3 Ton capacity multi-fuel boiler.",
      "Construction of Lal Bahadur Shastri Auditorium and Kurein Auditorium.",
    ],
  },
  {
    year: "2011",
    points: [
      "Installation of 5000 Liters capacity curd pasteurizer.",
      "Received National and State Energy Conservation Awards.",
    ],
  },
  {
    year: "2012",
    points: [
      "Launched 100 g Cashew Burfi and Mysore Pak.",
      "Commissioned Fodder densification unit at Monachanahally.",
      "Installation of 1010 KVA Diesel Generator.",
      "Installed fully automated refrigeration plant for 5 LLPD milk handling.",
      "Established IMCU at H.D. Kote Taluk.",
      "Supply of 1,10,000 fodder tree saplings to producers.",
      "Achieved peak milk procurement of 6,24,813 kgs.",
    ],
  },
  {
    year: "2013",
    points: [
      "New walk-in cold stores at H.D. Kote and Piriyapatna.",
    ],
  },
  {
    year: "2014",
    points: [
      "Establishment of walk-in cold stores at H.D. Kote and Piriyapatna.",
    ],
  },
  {
    year: "2015",
    points: [
      "Bifurcation into Mysore and Chamarajanagar Milk Unions.",
      "Expansion of Hunsur CC with capacity of 1 LLPD.",
      "Foundation stone laid for Mega Dairy at Alanahally.",
    ],
  },
  {
    year: "2016",
    points: [
      "New Nandini Scoopy Parlour inaugurated.",
    ],
  },
  {
    year: "2017",
    points: [
      "Successful implementation of ISO 22000-2005.",
    ],
  },
  {
    year: "2018",
    points: [
      "1 Liter UHT brick production (co-packing) at SKA Dairy.",
    ],
  },
];

export default function Milestones() {
  return (
    <section className="about-page">

      {/* Banner */}
      <div className="about-banner">
        <img
          src="/images/about-cow-2.b8e1a0b1.png"
          alt="Milestones"
        />
      </div>

      <div className="about-container">
        <h1>Milestones</h1>

        <div className="timeline">
          {milestones.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div>
              <ul className="timeline-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
