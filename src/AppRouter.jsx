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
import Cultural from "./pages/About/Cultural"

/* PRODUCTS */
import AllProducts from "./pages/Products/AllProducts";

import RBKVMUL from "./pages/Products/RBKVMUL/RBKVMUL";
import Milk from "./pages/Products/RBKVMUL/Milk";
import Curd from "./pages/Products/RBKVMUL/Curd";

import KMF from "./pages/Products/KMF/KMF";
// import Ghee from "./pages/Products/KMF/Ghee";
// import Butter from "./pages/Products/KMF/Butter";
// import Paneer from "./pages/Products/KMF/Paneer";

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
import UnionProfile from "./pages/union/UnionProfile";
import UnionObjectives from "./pages/union/UnionObjectives";
import QualityPolicy from "./pages/union/QualityPolicy";
import Programs from "./pages/About/Programs";
import UnionCorporate from "./pages/union/UnionCorporate";
import Procurement from "./pages/operations/Procurement";
import DairyEngineering from "./pages/operations/DairyEngineering";
import Marketing from "./pages/operations/Marketing";
import Finance from "./pages/operations/Finance";
import RaichurDairy from "./pages/unit/RaichurDairy";
import BudhagumpaDairy from "./pages/unit/BudhagumpaDairy";
import ChillingCenters from "./pages/unit/ChillingCenters";
import BallariDairy from "./pages/unit/BallariDairy";
import PresidentMessage from "./pages/About/PresidentMessage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* ABOUT */}
      <Route path="/about/company-profile" element={<CompanyProfile />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/about/board" element={<Board />} />
      {/* <Route path="/about/section-heads" element={<SectionHeads />} /> */}
      <Route path="/about/objectives" element={<Objectives />} />
      <Route path="/about/quality-policies" element={<QualityPolicies />} />
      <Route path="/about/milestones" element={<Milestones />} />
      <Route path="/about/culture" element={<Cultural />} />
      <Route path="/management/president-message" element={<PresidentMessage />} />



      <Route path="/about/activities" element={<Activities />} />
      <Route
        path="/about/animal-health-services"
        element={<AnimalHealthServices />}
      />
      <Route
        path="/about/artificial-insemination"
        element={<ArtificialInsemination />}
      />
      <Route path="/activities/human-resources" element={<HumanResources />} />


      <Route
        path="/about/fodder-activity"
        element={<FodderActivity />}
      />

      <Route
        path="/about/step-processing"
        element={<STEPAndProcessing />}
      />
      <Route path="/activities/programs" element={<Programs />} />


      {/* PRODUCTS */}
      {/* <Route path="/products" element={<AllProducts />} /> */}

      <Route path="/products/rbkvmul" element={<RBKVMUL />} />
      {/* <Route path="/products/rbkvmul/milk" element={<Milk />} />
      <Route path="/products/rbkvmul/curd" element={<Curd />} /> */}

      <Route path="/products/kmf" element={<KMF />} />
      {/* <Route path="/products/kmf/ghee" element={<Ghee />} /> */}
      {/* <Route path="/products/kmf/butter" element={<Butter />} /> */}
      {/* <Route path="/products/kmf/paneer" element={<Paneer />} /> */}

      {/* OTHER */}
      <Route path="/units" element={<Units />} />
      <Route path="/news" element={<News />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/contact" element={<Contact />} />

      {/* LEGAL */}
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refund-policy" element={<Refund />} />


      {/* UNION  */}
      <Route path="/union/profile" element={<UnionProfile />} />
      <Route path="/union/objectives" element={<UnionObjectives />} />
      <Route path="/union/quality-policy" element={<QualityPolicy />} />
      <Route path="/union/corporate" element={<UnionCorporate />} />



      {/* OTHER */}
      <Route path="/operations/procurement" element={<Procurement />} />
<Route path="/operations/dairy-engineering" element={<DairyEngineering />} />
<Route path="/operations/marketing" element={<Marketing />} />
<Route path="/operations/finance" element={<Finance />} />

<Route path="/unit/raichur-dairy" element={<RaichurDairy />} />
<Route path="/unit/budhagumpa-dairy" element={<BudhagumpaDairy />} />
<Route path="/unit/chilling-centers" element={<ChillingCenters />} />
<Route path="/unit/ballari-dairy" element={<BallariDairy />} />
    </Routes>
  );
}
