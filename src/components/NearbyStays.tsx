"use client";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { nearbyStays } from "../../data/listing";

export default function NearbyStays() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const next = Math.max(0, Math.min(nearbyStays.length - 1, index + dir));
    setIndex(next);
    trackRef.current?.scrollTo({ left: next * 224, behavior: "smooth" });
  }

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-semibold text-ink">More stays near Candolim</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            {index + 1}/{nearbyStays.length}
          </span>
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous stays"
            className="w-8 h-8 rounded-full border border-hairline bg-white flex items-center justify-center hover:shadow-card transition-shadow duration-200 ease-airbnb focus-ring disabled:opacity-30"
            disabled={index === 0}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next stays"
            className="w-8 h-8 rounded-full border border-hairline bg-white flex items-center justify-center hover:shadow-card transition-shadow duration-200 ease-airbnb focus-ring disabled:opacity-30"
            disabled={index === nearbyStays.length - 1}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-4 overflow-hidden">
        {nearbyStays.map((s) => (
          <div key={s.id} className="w-[208px] shrink-0">
            <img src={s.image} alt={s.title} className="w-[208px] h-[197px] object-cover rounded-xl mb-2" />
            <p className="text-sm font-medium text-ink line-clamp-2 h-10">{s.title}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-semibold text-ink">₹{s.price.toLocaleString("en-IN")}</span>
              <span className="flex items-center gap-1 text-sm text-body">
                <Star size={12} className="fill-ink" /> {s.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
