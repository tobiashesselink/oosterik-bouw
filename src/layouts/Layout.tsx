import { type ReactNode } from "react";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
