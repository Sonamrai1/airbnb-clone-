export interface Photo {
  id: string;
  url: string;
  alt: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  monthsOnAirbnb: number;
  rating: number;
  date: string;
  text: string;
}

export const photos: Photo[] = [
  { id: "p1", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80", alt: "Living room with grey sofa", category: "Living room" },
  { id: "p2", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80", alt: "Bedroom with king bed", category: "Bedroom" },
  { id: "p3", url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80", alt: "Kitchen with island", category: "Kitchen" },
  { id: "p4", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80", alt: "Bathroom with tub", category: "Bathroom" },
  { id: "p5", url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80", alt: "Building exterior", category: "Exterior" },
  { id: "p6", url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80", alt: "Second bedroom", category: "Bedroom" },
  { id: "p7", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Dining area", category: "Living room" },
  { id: "p8", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Balcony pool view", category: "Pool" },
  { id: "p9", url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80", alt: "Pool view", category: "Pool" },
  { id: "p10", url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80", alt: "Second living room sofa bed", category: "Living room" },
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim - Pool View",
  subtitle: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  rating: 4.95,
  reviewCount: 19,
  nights: 5,
  totalForStay: 28499,
  pricePerNight: 5699,
  cleaningFee: 800,
  airbnbFee: 2000,
  checkIn: "18 Oct 2026",
  checkOut: "23 Oct 2026",
  dateRangeLabel: "18-23 Oct 2026",
  guests: 4,
  host: {
    name: "Mirashya Homes",
    isSuperhost: true,
    yearsHosting: 2,
    responseRate: 100,
    responseTime: "within an hour",
    coHosts: [
      { name: "Rahul", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80" },
      { name: "Sana", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" },
      { name: "Ajay", avatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=100&q=80" },
    ],
  },
  highlights: [
    { icon: "hut", title: "Peaceful escape", text: "Guests say this home is in a calm, quiet area." },
    { icon: "snowflake", title: "Designed for staying cool", text: "Guests love this home's air conditioning during warm months." },
    { icon: "door", title: "Self check-in", text: "Check yourself in with the smart lock." },
  ],
  description:
    "Tucked away in a quiet lane of Candolim, this 1BHK apartment blends warm wood tones with soft, laid-back Goan charm. Wake up to pool views, spend the day at the beach five minutes away, and unwind in the private jacuzzi after dinner.\n\nThe kitchen is fully stocked for anyone who wants to cook, and the living room opens onto a small balcony that catches the evening breeze. It's an easy walk to cafes, restaurants and the beach shacks Candolim is known for.",
  sleepingArrangements: [
    { room: "Bedroom 1", detail: "1 double bed", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80" },
    { room: "Living room", detail: "1 sofa bed", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  ],
  amenities: [
    { id: "a1", label: "Pool", icon: "waves" },
    { id: "a2", label: "Kitchen", icon: "kitchen" },
    { id: "a3", label: "Wifi", icon: "wifi" },
    { id: "a4", label: "Free parking on premises", icon: "car" },
    { id: "a5", label: "Air conditioning", icon: "snowflake" },
    { id: "a6", label: "Washing machine", icon: "washer" },
    { id: "a7", label: "TV", icon: "tv" },
    { id: "a8", label: "Dedicated workspace", icon: "briefcase" },
    { id: "a9", label: "Jacuzzi", icon: "bath" },
    { id: "a10", label: "Balcony", icon: "door-open" },
  ],
  amenitiesCount: 32,
  ratingBreakdown: [
    { label: "Cleanliness", value: 4.9, icon: "sparkles" },
    { label: "Accuracy", value: 4.9, icon: "check" },
    { label: "Check-in", value: 5.0, icon: "key" },
    { label: "Communication", value: 5.0, icon: "message" },
    { label: "Location", value: 4.9, icon: "map-pin" },
    { label: "Value", value: 4.8, icon: "tag" },
  ],
  overallDistribution: [
    { stars: 5, pct: 88 },
    { stars: 4, pct: 9 },
    { stars: 3, pct: 2 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ],
  reviewTags: ["Comfort · 6", "Accuracy · 5", "Hot tub · 5", "Location · 4", "Cleanliness · 4", "Value · 3"],
  reviews: [
    { id: "r1", name: "Ananya", monthsOnAirbnb: 2, rating: 5, date: "September 2026", text: "Loved the place. The jacuzzi was such a nice surprise and the host responded within minutes every time we messaged." },
    { id: "r2", name: "Rohan", monthsOnAirbnb: 8, rating: 5, date: "August 2026", text: "Great location, quiet street but close to everything. Bed was comfortable and the kitchen had everything we needed." },
    { id: "r3", name: "Priya", monthsOnAirbnb: 14, rating: 4, date: "July 2026", text: "Exactly like the photos. Check-in was smooth with the smart lock instructions sent in advance." },
    { id: "r4", name: "Karan", monthsOnAirbnb: 5, rating: 5, date: "June 2026", text: "Beautiful apartment, five minute walk to the beach. Host gave great restaurant recommendations nearby." },
  ] as Review[],
  neighbourhoodText:
    "Candolim is known for its long stretch of beach, laid-back shacks and easy access to Calangute and Baga nearby. Plenty of cafes and restaurants within walking distance.",
  thingsToKnow: [
    { icon: "clock", title: "Check-in after 2:00 PM", text: "Check out before 11:00 AM. Self check-in with smart lock." },
    { icon: "shield", title: "House rules", text: "No smoking, no parties or events, pets allowed on request." },
    { icon: "info", title: "Safety & property", text: "Carbon monoxide alarm, smoke alarm installed." },
  ],
  coordinates: { lat: 15.5185, lng: 73.7638 },
};

export interface NearbyStay {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export const nearbyStays: NearbyStay[] = [
  { id: "n1", title: "Cozy Studio near Calangute Beach", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80", price: 3200, rating: 4.88 },
  { id: "n2", title: "Sea View Apartment in Baga", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80", price: 4500, rating: 4.92 },
  { id: "n3", title: "Boutique Villa with Private Pool", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", price: 6800, rating: 4.97 },
  { id: "n4", title: "Modern 1BHK in Candolim", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80", price: 3900, rating: 4.85 },
];

export const sections = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];
