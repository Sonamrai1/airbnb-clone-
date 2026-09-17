"use client";
import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "../../data/listing";
import { useScrollLock } from "../hooks/useScrollLock";
import { useFocusTrap } from "../hooks/useFocusTrap";

interface Props {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

export default function Lightbox({ photos, index, onClose, onIndexChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollLock(true);
  useFocusTrap(true, containerRef);

  const goPrev = () => onIndexChange((index - 1 + photos.length) % photos.length);
  const goNext = () => onIndexChange((index + 1) % photos.length);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const photo = photos[index];

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] bg-white flex flex-col animate-fade-in"
    >
      <div className="h-20 flex items-center justify-between px-6 border-b border-hairline">
        <button
          onClick={onClose}
          aria-label="Close photo viewer"
          className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 ease-airbnb focus-ring"
        >
          <X size={16} />
        </button>
        <span className="text-sm font-medium text-ink absolute left-1/2 -translate-x-1/2">
          {index + 1}/{photos.length}
        </span>
        <div className="w-8" />
      </div>

      <div className="flex-1 relative flex items-center justify-center px-20">
        {photos.length > 1 && (
          <button
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-hairline shadow-card flex items-center justify-center hover:scale-105 transition-transform duration-200 ease-airbnb focus-ring"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <img
          key={photo.id}
          src={photo.url}
          alt={photo.alt}
          className="max-h-[80vh] max-w-full object-contain animate-scale-in"
        />

        {photos.length > 1 && (
          <button
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-hairline shadow-card flex items-center justify-center hover:scale-105 transition-transform duration-200 ease-airbnb focus-ring"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
