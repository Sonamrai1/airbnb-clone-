"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { listing } from "../../data/listing";

export default function MapSection() {
  const [zoom, setZoom] = useState(13);
  const { lat, lng } = listing.coordinates;
  const span = 0.03 * (13 / zoom);
  const bbox = `${lng - span},${lat - span * 0.75},${lng + span},${lat + span * 0.75}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div id="location" className="py-8 border-b border-hairline">
      <h2 className="text-[22px] font-semibold text-ink mb-1">Where you&apos;ll be</h2>
      <p className="text-base text-ink mb-4">{listing.location}</p>
      <div className="relative rounded-2xl overflow-hidden h-[480px] border border-hairline">
        <iframe title="Listing location map" src={src} className="w-full h-full" loading="lazy" />
        <div className="absolute top-4 right-4 flex flex-col rounded-lg shadow-card overflow-hidden bg-white">
          <button
            onClick={() => setZoom((z) => Math.min(18, z + 1))}
            aria-label="Zoom in"
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 border-b border-hairline focus-ring"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(3, z - 1))}
            aria-label="Zoom out"
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 focus-ring"
          >
            <Minus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
