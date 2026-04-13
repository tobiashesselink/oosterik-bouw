import { type ReactNode } from "react";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import StickyHeader from "../components/StickyHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyHeader />
      <MobileMenu />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
