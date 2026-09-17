"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { listing, sections } from "../../data/listing";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 160) current = s.id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={`sticky top-0 z-30 bg-white border-b border-hairline transition-opacity duration-200 ease-airbnb ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-page mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <nav className="flex items-center gap-8 text-sm font-medium text-body">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`h-full flex items-center border-b-2 transition-colors duration-200 ease-airbnb focus-ring ${
                active === s.id ? "border-ink text-ink" : "border-transparent hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="text-sm font-semibold text-ink flex items-center gap-1">
            <span>
              {listing.pricePerNight >= 1000 ? "₹" : ""}
              {listing.totalForStay.toLocaleString("en-IN")} for {listing.nights} nights
            </span>
            <span className="text-muted font-normal mx-1">•</span>
            <Star size={12} className="fill-ink" />
            <span>{listing.rating}</span>
            <span className="text-muted font-normal">· {listing.reviewCount} reviews</span>
          </div>
          <button className="bg-rausch text-white text-base font-semibold px-6 py-3 rounded-full hover:brightness-95 transition-all duration-200 ease-airbnb focus-ring">
            Reserve
          </button>
        </div>
      </div>
    </header>
  );
}
