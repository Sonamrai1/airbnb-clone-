import { listing } from "../../data/listing";

export default function MeetHost() {
  return (
    <div className="py-8 border-b border-hairline">
      <h2 className="text-[22px] font-semibold text-ink mb-6">Meet your host</h2>
      <div className="flex gap-10">
        <div className="w-[380px] shrink-0 border border-hairline rounded-xl p-6 shadow-card">
          <div className="flex flex-col items-center text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-[#0A3D2E] text-white flex items-center justify-center font-serif text-2xl mb-3">
              {listing.host.name.charAt(0)}
            </div>
            {listing.host.isSuperhost && (
              <span className="bg-[#FFE8EE] text-rausch text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Superhost
              </span>
            )}
            <p className="text-xl font-semibold text-ink">{listing.host.name}</p>
          </div>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-hairline pb-3">
              <span className="text-muted">Response rate</span>
              <span className="font-semibold text-ink">{listing.host.responseRate}%</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-muted">Responds</span>
              <span className="font-semibold text-ink">{listing.host.responseTime}</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="font-medium text-ink mb-4">Co-hosts</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {listing.host.coHosts.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm text-ink">{c.name}</span>
              </div>
            ))}
          </div>
          <button className="bg-panel text-ink text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 ease-airbnb focus-ring">
            Message host
          </button>
        </div>
      </div>
    </div>
  );
}
