"use client";
import { useState } from "react";
import { listing } from "../../data/listing";

export default function NeighbourhoodSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="py-6 border-b border-hairline">
      <h2 className="text-xl font-semibold text-ink mb-3">Neighbourhood highlights</h2>
      <p className="text-base text-ink leading-6">
        {expanded ? listing.neighbourhoodText : `${listing.neighbourhoodText.slice(0, 90)}...`}
      </p>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 text-base font-semibold text-ink underline hover:text-body transition-colors duration-200 ease-airbnb focus-ring"
      >
        {expanded ? "Show less" : "Show more"} &gt;
      </button>
    </div>
  );
}
