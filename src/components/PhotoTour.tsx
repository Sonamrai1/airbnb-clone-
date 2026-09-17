"use client";
import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import type { Photo } from "../../data/listing";
import { useScrollLock } from "../hooks/useScrollLock";
import { useFocusTrap } from "../hooks/useFocusTrap";
import Lightbox from "./Lightbox";

interface Props {
  photos: Photo[];
  onClose: () => void;
}

export default function PhotoTour({ photos, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useScrollLock(true);
  useFocusTrap(true, containerRef);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // Esc only closes the tour back to the main page when the lightbox
      // isn't open on top of it; otherwise Lightbox handles its own Esc.
      if (e.key === "Escape" && lightboxIndex === null) onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, onClose]);

  const grouped = photos.reduce<Record<string, Photo[]>>((acc, p) => {
    acc[p.category] = acc[p.category] ? [...acc[p.category], p] : [p];
    return acc;
  }, {});

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in"
    >
      <div className="h-20 border-b border-hairline flex items-center justify-between px-6 sticky top-0 bg-white z-10">
        <p className="text-base font-semibold text-ink">Photo tour</p>
        <button
          onClick={onClose}
          aria-label="Close photo tour"
          className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 ease-airbnb focus-ring"
        >
          <X size={16} />
        </button>
      </div>

      <div className="max-w-page mx-auto px-6 py-10 space-y-10">
        {Object.entries(grouped).map(([category, catPhotos]) => (
          <section key={category}>
            <h3 className="text-[22px] font-semibold text-ink mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-8">
              {catPhotos.map((p) => {
                const globalIndex = photos.findIndex((ph) => ph.id === p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="rounded-xl overflow-hidden focus-ring"
                  >
                    <img
                      src={p.url}
                      alt={p.alt}
                      className="w-full h-auto hover:opacity-90 transition-opacity duration-200 ease-airbnb"
                    />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
