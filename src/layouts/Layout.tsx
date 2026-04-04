import { type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      {!isHome && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
