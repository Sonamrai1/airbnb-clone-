"use client";
import { useState } from "react";
import { listing } from "../../data/listing";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function getMonthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

// Default range matches the reference: 18-23 Oct 2026
const DEFAULT_START = new Date(2026, 9, 18);
const DEFAULT_END = new Date(2026, 9, 23);

export default function CalendarSection() {
  const [checkIn, setCheckIn] = useState<Date | null>(DEFAULT_START);
  const [checkOut, setCheckOut] = useState<Date | null>(DEFAULT_END);
  const [viewYear] = useState(2026);
  const [viewMonth] = useState(9); // October

  function isSameDay(a: Date | null, b: Date | null) {
    return !!a && !!b && a.toDateString() === b.toDateString();
  }

  function inRange(day: Date) {
    return !!checkIn && !!checkOut && day > checkIn && day < checkOut;
  }

  function handleSelect(day: Date) {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(day);
      setCheckOut(null);
    } else if (day < checkIn) {
      setCheckOut(checkIn);
      setCheckIn(day);
    } else {
      setCheckOut(day);
    }
  }

  function renderMonth(year: number, month: number) {
    const cells = getMonthMatrix(year, month);
    const label = new Date(year, month).toLocaleDateString("en-US", { month: "long", year: "numeric" });

    return (
      <div className="flex-1">
        <p className="text-center font-medium mb-4">{label}</p>
        <div className="grid grid-cols-7 text-xs text-muted mb-2">
          {WEEKDAYS.map((w, i) => (
            <div key={i} className="text-center">{w}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const selected = isSameDay(day, checkIn) || isSameDay(day, checkOut);
            const ranged = inRange(day);
            return (
              <button
                key={i}
                onClick={() => handleSelect(day)}
                className={`h-9 text-sm rounded-full transition-colors duration-200 ease-airbnb focus-ring hover:border hover:border-ink
                  ${selected ? "bg-ink text-white" : ""}
                  ${ranged ? "bg-gray-100 rounded-none" : ""}
                `}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const nextMonthIdx = viewMonth === 11 ? 0 : viewMonth + 1;
  const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  return (
    <div id="calendar" className="py-6 border-b border-hairline">
      <h2 className="text-[22px] font-semibold text-ink">{listing.nights} nights in Candolim</h2>
      <p className="text-muted mb-6">{listing.dateRangeLabel}</p>

      <div className="border border-hairline rounded-xl p-6">
        <div className="flex gap-10">
          {renderMonth(viewYear, viewMonth)}
          {renderMonth(nextYear, nextMonthIdx)}
        </div>
        <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-hairline">
          <button
            onClick={() => { setCheckIn(null); setCheckOut(null); }}
            className="text-sm font-semibold underline hover:text-body transition-colors duration-200 ease-airbnb focus-ring"
          >
            Clear dates
          </button>
          <button className="bg-ink text-white text-sm font-semibold px-5 py-3 rounded-lg hover:brightness-110 transition-all duration-200 ease-airbnb focus-ring">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
