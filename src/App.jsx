import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Router from "./AppRouter";
import AppRouter from "./AppRouter";
import TopInfoBar from "./components/TopInfoBar";
import PopupBanner from "./components/PopupBanner";


export default function App() {
  return (
    <>
    <PopupBanner />
    <TopInfoBar />
      <Navbar />
      <AppRouter/>
      <Footer />
    </>
  );
}
