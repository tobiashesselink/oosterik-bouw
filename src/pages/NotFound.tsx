import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero minimal />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: 404 number */}
            <div className="select-none text-center lg:text-left">
              <span
                className="font-display font-black leading-none text-brand/10"
                style={{ fontSize: "clamp(8rem, 25vw, 16rem)" }}>
                404
              </span>
            </div>

            {/* Right: message + links */}
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Deze pagina bestaat niet
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-dark-lighter">
                De pagina die je zoekt is verplaatst, verwijderd of bestaat niet. Ga terug naar de homepage of bekijk
                onze projecten en diensten.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
                  <ArrowLeft size={16} />
                  Naar de homepage
                </Link>
                <Link
                  to="/projecten"
                  className="inline-flex items-center gap-2 rounded-full border border-dark/10 px-7 py-3 text-sm font-semibold text-dark transition-all duration-200 hover:border-dark/20 hover:bg-gray-50 active:scale-[0.97]">
                  Bekijk projecten
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
