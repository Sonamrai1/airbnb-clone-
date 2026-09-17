import { listing } from "../../data/listing";

export default function SleepingArrangements() {
  return (
    <div className="py-6 border-b border-hairline">
      <h2 className="text-xl font-semibold text-ink mb-4">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {listing.sleepingArrangements.map((r) => (
          <div key={r.room} className="border border-hairline rounded-xl p-6">
            <img src={r.image} alt={r.room} className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="font-semibold text-ink">{r.room}</p>
            <p className="text-sm text-muted">{r.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
