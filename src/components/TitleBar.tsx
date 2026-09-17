import { Share, Heart } from "lucide-react";
import { listing } from "../../data/listing";

export default function TitleBar() {
  return (
    <div className="pt-6 flex items-start justify-between">
      <div>
        <h1 className="text-[26px] font-semibold text-ink leading-tight">{listing.title}</h1>
        <p className="text-body mt-1">{listing.subtitle}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button className="flex items-center gap-2 rounded-full border border-ink px-[15px] py-[7px] text-sm font-medium hover:bg-gray-100 transition-colors duration-200 ease-airbnb focus-ring">
          <Share size={16} />
          Share
        </button>
        <button className="flex items-center gap-2 rounded-full border border-ink px-[15px] py-[7px] text-sm font-medium hover:bg-gray-100 transition-colors duration-200 ease-airbnb focus-ring">
          <Heart size={16} />
          Save
        </button>
      </div>
    </div>
  );
}
