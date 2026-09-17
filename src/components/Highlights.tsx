import { Mountain, Snowflake, DoorOpen, type LucideIcon } from "lucide-react";
import { listing } from "../../data/listing";

const iconMap: Record<string, LucideIcon> = {
  hut: Mountain,
  snowflake: Snowflake,
  door: DoorOpen,
};

export default function Highlights() {
  return (
    <div className="py-6 border-b border-hairline space-y-6">
      {listing.highlights.map((h, i) => {
        const Icon = iconMap[h.icon];
        return (
          <div key={i} className="flex gap-4">
            <Icon size={26} />
            <div>
              <p className="text-base font-semibold text-ink">{h.title}</p>
              <p className="text-sm text-[#717171]">{h.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
