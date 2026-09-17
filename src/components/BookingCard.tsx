"use client";
import { useState } from "react";
import { Star, Flag, Minus, Plus } from "lucide-react";
import { listing } from "../../data/listing";

export default function BookingCard() {
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState(2);

  const total = listing.pricePerNight * listing.nights + listing.cleaningFee + listing.airbnbFee;

  return (
    <aside className="sticky top-[100px] w-[372px] shrink-0">
      <div className="border border-hairline shadow-xl rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-[22px] font-semibold text-ink underline decoration-transparent">
              ₹{listing.pricePerNight.toLocaleString("en-IN")}
            </span>
            <span className="text-base text-ink">night</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-ink">
            <Star size={12} className="fill-ink" />
            <span className="font-medium">{listing.rating}</span>
            <span className="text-muted underline">· {listing.reviewCount} reviews</span>
          </div>
        </div>

        <div className="border border-hairline rounded-lg relative">
          <div className="grid grid-cols-2 rounded-t-lg overflow-hidden">
            <div className="p-3 border-r border-b border-hairline">
              <p className="text-[10px] font-bold uppercase text-ink">Check-in</p>
              <p className="text-sm text-body">{listing.checkIn}</p>
            </div>
            <div className="p-3 border-b border-hairline">
              <p className="text-[10px] font-bold uppercase text-ink">Checkout</p>
              <p className="text-sm text-body">{listing.checkOut}</p>
            </div>
          </div>
          <div className="rounded-b-lg relative">
            <button onClick={() => setShowGuests((v) => !v)} className="w-full text-left p-3 focus-ring">
              <p className="text-[10px] font-bold uppercase text-ink">Guests</p>
              <p className="text-sm text-body">{guests} guests</p>
            </button>

            {showGuests && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-hairline rounded-xl shadow-card p-4 z-20 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">Guests</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      aria-label="Decrease guests"
                      disabled={guests <= 1}
                      className="w-7 h-7 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors duration-200 ease-airbnb focus-ring disabled:opacity-30"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-4 text-center text-sm">{guests}</span>
                    <button
                      onClick={() => setGuests((g) => Math.min(listing.guests, g + 1))}
                      aria-label="Increase guests"
                      disabled={guests >= listing.guests}
                      className="w-7 h-7 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors duration-200 ease-airbnb focus-ring disabled:opacity-30"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="w-full mt-4 text-white text-base font-semibold py-3 rounded-lg hover:brightness-105 transition-all duration-200 ease-airbnb focus-ring bg-gradient-to-r from-rausch2 to-rausch3">
          Reserve
        </button>

        <p className="text-center text-sm text-ink mt-3">You won&apos;t be charged yet</p>

        <div className="mt-6 space-y-3 text-base text-ink">
          <div className="flex justify-between">
            <span className="underline">
              ₹{listing.pricePerNight.toLocaleString("en-IN")} x {listing.nights} nights
            </span>
            <span>₹{(listing.pricePerNight * listing.nights).toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>₹{listing.cleaningFee.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>₹{listing.airbnbFee.toLocaleString("en-IN")}</span>
          </div>
          <div className="border-t border-hairline pt-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 mt-4 text-sm text-muted underline hover:text-ink transition-colors duration-200 ease-airbnb focus-ring">
        <Flag size={14} />
        Report this listing
      </button>
    </aside>
  );
}
