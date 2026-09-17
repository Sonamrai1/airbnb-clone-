"use client";
import { useState } from "react";
import Header from "@/components/Header";
import TitleBar from "@/components/TitleBar";
import PhotoGrid from "@/components/PhotoGrid";
import HostRow from "@/components/HostRow";
import Highlights from "@/components/Highlights";
import Description from "@/components/Description";
import SleepingArrangements from "@/components/SleepingArrangements";
import Amenities from "@/components/Amenities";
import CalendarSection from "@/components/CalendarSection";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import NeighbourhoodSection from "@/components/NeighbourhoodSection";
import MeetHost from "@/components/MeetHost";
import ThingsToKnow from "@/components/ThingsToKnow";
import NearbyStays from "@/components/NearbyStays";
import Footer from "@/components/Footer";
import BookingCard from "@/components/BookingCard";
import PhotoTour from "@/components/PhotoTour";
import Lightbox from "@/components/Lightbox";
import { photos } from "../../data/listing";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-page mx-auto px-6 lg:px-10">
        <TitleBar />
        <PhotoGrid
          photos={photos}
          onOpenTour={() => setTourOpen(true)}
          onOpenLightbox={(i) => setLightboxIndex(i)}
        />

        <div className="flex gap-16 mt-6">
          <div className="flex-1 min-w-0">
            <HostRow />
            <Highlights />
            <Description />
            <SleepingArrangements />
            <Amenities />
            <CalendarSection />
            <Reviews />
            <MapSection />
            <NeighbourhoodSection />
            <MeetHost />
            <ThingsToKnow />
          </div>

          <BookingCard />
        </div>

        <NearbyStays />
      </main>

      <Footer />

      {tourOpen && <PhotoTour photos={photos} onClose={() => setTourOpen(false)} />}

      {lightboxIndex !== null && !tourOpen && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
