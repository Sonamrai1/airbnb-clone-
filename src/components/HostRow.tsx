import { listing } from "../../data/listing";

export default function HostRow() {
  return (
    <div className="py-6 border-b border-hairline flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-[#0A3D2E] text-white flex items-center justify-center font-serif text-xl">
        {listing.host.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-ink">Hosted by {listing.host.name}</p>
        <p className="text-sm text-muted">
          {listing.host.isSuperhost ? "Superhost" : "Host"} · {listing.host.yearsHosting} years hosting
        </p>
      </div>
    </div>
  );
}
