"use client";
import { useState } from "react";
import {
  Waves, ChefHat, Wifi, Car, Snowflake, WashingMachine, Tv, Briefcase, Bath, DoorOpen, X,
  type LucideIcon,
} from "lucide-react";
import { listing } from "../../data/listing";
import { useScrollLock } from "../hooks/useScrollLock";

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  kitchen: ChefHat,
  wifi: Wifi,
  car: Car,
  snowflake: Snowflake,
  washer: WashingMachine,
  tv: Tv,
  briefcase: Briefcase,
  bath: Bath,
  "door-open": DoorOpen,
};

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const visible = listing.amenities.slice(0, 6);

  return (
    <div id="amenities" className="py-6 border-b border-hairline">
      <h2 className="text-xl font-semibold text-ink mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 gap-4">
        {visible.map((a) => {
          const Icon = iconMap[a.icon];
          return (
            <div key={a.id} className="flex items-center gap-4 text-body">
              <Icon size={22} />
              <span>{a.label}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setShowAll(true)}
        className="mt-6 border border-ink rounded-lg px-5 py-3 text-sm font-medium hover:bg-gray-100 transition-colors duration-200 ease-airbnb focus-ring"
      >
        Show all {listing.amenitiesCount} amenities
      </button>

      {showAll && <AmenitiesModal onClose={() => setShowAll(false)} />}
    </div>
  );
}

function AmenitiesModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All amenities"
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-lg max-h-[80vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white flex items-center px-6 py-4 border-b border-hairline">
          <button
            onClick={onClose}
            aria-label="Close amenities"
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 ease-airbnb focus-ring"
          >
            <X size={18} />
          </button>
          <h3 className="ml-4 font-semibold text-ink">What this place offers</h3>
        </div>
        <div className="p-6 space-y-5">
          {listing.amenities.map((a) => {
            const Icon = iconMap[a.icon];
            return (
              <div key={a.id} className="flex items-center gap-4 text-body">
                <Icon size={22} />
                <span>{a.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
