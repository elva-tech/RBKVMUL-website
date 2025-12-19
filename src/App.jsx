import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Router from "./AppRouter";
import AppRouter from "./AppRouter";


export default function App() {
  return (
    <>
      <Navbar />
      <AppRouter/>
      <Footer />
    </>
  );
}
