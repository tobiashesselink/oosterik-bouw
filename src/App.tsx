import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Diensten from "./pages/Diensten";
import Projecten from "./pages/Projecten";
import ProjectDetail from "./pages/ProjectDetail";
import Werkwijze from "./pages/Werkwijze";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/projecten/:id" element={<ProjectDetail />} />
          <Route path="/werkwijze" element={<Werkwijze />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
