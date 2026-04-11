import { type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Routes that embed their own navigation header
const SELF_HEADED_ROUTES = ["/", "/diensten", "/projecten", "/contact", "/over-ons"];

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const showHeader =
    !SELF_HEADED_ROUTES.includes(pathname) && !pathname.startsWith("/projecten/");

  return (
    <div className="flex min-h-screen flex-col">
      {showHeader && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
