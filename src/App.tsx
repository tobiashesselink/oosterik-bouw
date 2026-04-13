import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PageTransitionProvider from "./components/PageTransitionProvider";
import Layout from "./layouts/Layout";
import Contact from "./pages/Contact";
import Diensten from "./pages/Diensten";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OverOns from "./pages/OverOns";
import ProjectDetail from "./pages/ProjectDetail";
import Projecten from "./pages/Projecten";
import Werkwijze from "./pages/Werkwijze";

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
      <PageTransitionProvider>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </PageTransitionProvider>
    </BrowserRouter>
  );
}
