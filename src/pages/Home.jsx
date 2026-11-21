// import AboutPreview from "../sections/AboutPreview";
import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import NewsPreview from "../sections/NewsPreview";
import NotificationsPreview from "../sections/NotificationsPreview";
import ProductsPreview from "../sections/ProductsPreview";
import Stats from "../sections/Stats";
import TopBanner from "../sections/TopBanner";
import AboutOverview from "./About/AboutOverview";
import { useLocation } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  // const location = useLocation();

  // console.log("ROUTE CHANGED:", location.pathname, location.key);
  return (
    <>
    <TopBanner/>
      <Hero />
      <Highlights />
      {/* <AboutPreview/> */}
      <AboutOverview />
      <ProductsPreview />
      <Stats />
      {/* <NewsPreview /> */}
      {/* <Notifications/> */}
    </>
  );
}
