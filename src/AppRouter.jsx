import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/* ABOUT */
import CompanyProfile from "./pages/About/CompanyProfile";
import MissionVision from "./pages/About/MissionVision";
import Board from "./pages/About/Board";
import SectionHeads from "./pages/About/SectionHeads";
import HumanResources from "./pages/About/HumanResources";
import Objectives from "./pages/About/Objectives";
import QualityPolicies from "./pages/About/QualityPolicies";
import Milestones from "./pages/About/Milestones";
import Activities from "./pages/About/Activities";

/* PRODUCTS */
import AllProducts from "./pages/Products/AllProducts";

import RBKVMUL from "./pages/Products/RBKVMUL/RBKVMUL";
import Milk from "./pages/Products/RBKVMUL/Milk";
import Curd from "./pages/Products/RBKVMUL/Curd";

import KMF from "./pages/Products/KMF/KMF";
import Ghee from "./pages/Products/KMF/Ghee";
import Butter from "./pages/Products/KMF/Butter";
import Paneer from "./pages/Products/KMF/Paneer";

/* OTHER */
import Units from "./pages/Units";
import News from "./pages/News";
import Notifications from "./pages/Notifications";
import Contact from "./pages/Contact";

/* LEGAL */
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Refund from "./pages/Legal/Refund";
import AnimalHealthServices from "./pages/About/AnimalHealthServices";
import ArtificialInsemination from "./pages/About/ArtificialInsemination";
import FodderActivity from "./pages/About/FooderActivity";
import STEPAndProcessing from "./pages/About/STEPAndProcessing";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* ABOUT */}
      <Route path="/about/company-profile" element={<CompanyProfile />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/about/board" element={<Board />} />
      <Route path="/about/section-heads" element={<SectionHeads />} />
      <Route path="/about/human-resources" element={<HumanResources />} />
      <Route path="/about/objectives" element={<Objectives />} />
      <Route path="/about/quality-policies" element={<QualityPolicies />} />
      <Route path="/about/milestones" element={<Milestones />} />


      <Route path="/about/activities" element={<Activities />} />
      <Route
        path="/about/animal-health-services"
        element={<AnimalHealthServices />}
      />
      <Route
        path="/about/artificial-insemination"
        element={<ArtificialInsemination />}
      />

      <Route
        path="/about/fodder-activity"
        element={<FodderActivity />}
      />

      <Route
        path="/about/step-processing"
        element={<STEPAndProcessing />}
      />



      {/* PRODUCTS */}
      <Route path="/products" element={<AllProducts />} />

      <Route path="/products/rbkvmul" element={<RBKVMUL />} />
      <Route path="/products/rbkvmul/milk" element={<Milk />} />
      <Route path="/products/rbkvmul/curd" element={<Curd />} />

      <Route path="/products/kmf" element={<KMF />} />
      <Route path="/products/kmf/ghee" element={<Ghee />} />
      <Route path="/products/kmf/butter" element={<Butter />} />
      <Route path="/products/kmf/paneer" element={<Paneer />} />

      {/* OTHER */}
      <Route path="/units" element={<Units />} />
      <Route path="/news" element={<News />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/contact" element={<Contact />} />

      {/* LEGAL */}
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refund-policy" element={<Refund />} />
    </Routes>
  );
}
