import { Clock, Shield, Info, type LucideIcon } from "lucide-react";
import { listing } from "../../data/listing";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  shield: Shield,
  info: Info,
};

export default function ThingsToKnow() {
  return (
    <div className="py-8 border-b border-hairline pb-12">
      <h2 className="text-[22px] font-semibold text-ink mb-6">Things to know</h2>
      <div className="grid grid-cols-3 gap-10">
        {listing.thingsToKnow.map((t) => {
          const Icon = iconMap[t.icon];
          return (
            <div key={t.title}>
              <Icon size={32} />
              <p className="font-semibold text-ink mt-3 mb-1">{t.title}</p>
              <p className="text-sm text-ink">{t.text}</p>
              <button className="text-sm font-semibold underline mt-2 hover:text-body transition-colors duration-200 ease-airbnb focus-ring">
                Learn more
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
