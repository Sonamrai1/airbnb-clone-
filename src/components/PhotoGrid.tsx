"use client";
import { Grid2x2 } from "lucide-react";
import type { Photo } from "../../data/listing";

interface Props {
  photos: Photo[];
  onOpenTour: () => void;
  onOpenLightbox: (index: number) => void;
}

export default function PhotoGrid({ photos, onOpenTour, onOpenLightbox }: Props) {
  const main = photos[0];
  const side = photos.slice(1, 5);

  return (
    <div id="photos" className="relative mt-6">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[480px] rounded-xl overflow-hidden">
        <button onClick={() => onOpenLightbox(0)} className="col-span-2 row-span-2 rounded-l-xl overflow-hidden focus-ring">
          <img src={main.url} alt={main.alt} className="w-full h-full object-cover hover:brightness-90 transition-all duration-200 ease-airbnb" />
        </button>
        {side.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onOpenLightbox(i + 1)}
            className={`focus-ring overflow-hidden ${i === 3 ? "rounded-r-xl" : ""}`}
          >
            <img src={p.url} alt={p.alt} className="w-full h-full object-cover hover:brightness-90 transition-all duration-200 ease-airbnb" />
          </button>
        ))}
      </div>

      <button
        onClick={onOpenTour}
        className="absolute bottom-4 right-4 bg-white text-ink text-sm font-medium px-4 py-2 rounded-lg shadow-card flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200 ease-airbnb focus-ring"
      >
        <Grid2x2 size={16} />
        Show all photos
      </button>
    </div>
  );
}
