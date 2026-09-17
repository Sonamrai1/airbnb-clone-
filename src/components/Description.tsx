"use client";
import { useState } from "react";
import { listing } from "../../data/listing";

export default function Description() {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = listing.description.split("\n\n");

  return (
    <div className="py-6 border-b border-hairline">
      <p className="text-base leading-6 text-ink whitespace-pre-line">
        {expanded ? paragraphs.join("\n\n") : paragraphs[0]}
      </p>
      {paragraphs.length > 1 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-base font-semibold text-ink underline hover:text-body transition-colors duration-200 ease-airbnb focus-ring"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
