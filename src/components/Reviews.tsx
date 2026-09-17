"use client";
import { useState } from "react";
import { Sparkles, Check, Key, MessageCircle, MapPin, Tag, type LucideIcon } from "lucide-react";
import { listing } from "../../data/listing";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  check: Check,
  key: Key,
  message: MessageCircle,
  "map-pin": MapPin,
  tag: Tag,
};

export default function Reviews() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div id="reviews" className="py-8 border-b border-hairline">
      {/* Guest favourite hero */}
      <div className="text-center max-w-[400px] mx-auto mb-8">
        <p className="text-[72px] font-bold leading-none text-ink">{listing.rating}</p>
        <p className="text-xl font-semibold text-ink mt-2">Guest favourite</p>
        <p className="text-sm text-muted mt-2">
          This home is a guest favourite based on ratings, reviews and reliability.
        </p>
        <button className="text-sm font-semibold underline mt-2 hover:text-body transition-colors duration-200 ease-airbnb focus-ring">
          How reviews work
        </button>
      </div>

      {/* Ratings breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-y border-hairline">
        <div className="border-r border-hairline py-6 px-4">
          <p className="text-sm font-semibold text-ink mb-2">Overall rating</p>
          {listing.overallDistribution.map((row) => (
            <div key={row.stars} className="flex items-center gap-2 text-xs text-muted mb-1">
              <span className="w-2">{row.stars}</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-ink rounded-full" style={{ width: `${row.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        {listing.ratingBreakdown.map((r) => {
          const Icon = iconMap[r.icon];
          return (
            <div key={r.label} className="border-r border-hairline last:border-r-0 py-6 px-4 flex flex-col items-start justify-between">
              <span className="text-sm text-body">{r.label}</span>
              <div className="flex items-center gap-2 font-medium text-ink">
                {r.value.toFixed(1)}
                <Icon size={16} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tags */}
      <div className="flex gap-3 overflow-x-auto py-6">
        {listing.reviewTags.map((t) => (
          <span
            key={t}
            className="whitespace-nowrap rounded-full border border-hairline py-2 px-4 text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-8">
        {listing.reviews.map((r) => {
          const isLong = r.text.length > 120;
          const expanded = expandedId === r.id;
          return (
            <div key={r.id}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#EBE6E0] flex items-center justify-center font-semibold text-ink">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink text-base">{r.name}</p>
                  <p className="text-sm text-muted">{r.monthsOnAirbnb} months on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-body mb-2">
                {"★".repeat(r.rating)} <span className="text-muted">· {r.date}</span>
              </div>
              <p className="text-base leading-6 text-ink">
                {expanded || !isLong ? r.text : `${r.text.slice(0, 120)}...`}
              </p>
              {isLong && (
                <button
                  onClick={() => setExpandedId(expanded ? null : r.id)}
                  className="mt-1 text-sm font-semibold underline hover:text-body transition-colors duration-200 ease-airbnb focus-ring"
                >
                  {expanded ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button className="mt-6 border border-ink rounded-lg px-6 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-200 ease-airbnb focus-ring">
        Show all {listing.reviewCount} reviews
      </button>
    </div>
  );
}
