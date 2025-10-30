"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type NavPopover = {
  label: string;
  items: { title: string; description: string }[];
};

type Slide = {
  id: number;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
};

type CollectionCard = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  action: string;
};

type SignatureExperience = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
};

type JourneyPackage = {
  id: number;
  title: string;
  destination: string;
  description: string;
  price: string;
  duration: string;
  availability: string;
  partner: string;
  image: string;
  alt: string;
};

type Testimonial = {
  id: number;
  quote: string;
  guest: string;
  title: string;
  image: string;
  alt: string;
};

const navMenu: NavPopover[] = [
  {
    label: "Destinations",
    items: [
      {
        title: "Mediterranean Riviera",
        description: "Sun-drenched coasts from Monaco to Santorini with private villas.",
      },
      {
        title: "Japanese Archipelago",
        description: "Tailored journeys through Kyoto, Naoshima, and Hokkaido retreats.",
      },
      {
        title: "Patagonian Wilderness",
        description: "Helicopter-access lodges amid glaciers and endless skies.",
      },
    ],
  },
  {
    label: "Travel Styles",
    items: [
      {
        title: "Adventure Expeditions",
        description: "Luxury safaris, polar voyages, and bespoke alpine ascents.",
      },
      {
        title: "Holistic Wellness",
        description: "Restorative spa circuits and private island sanctuaries.",
      },
      {
        title: "Culinary Trails",
        description: "Chef-led tasting tours and cellars reserved for our guests only.",
      },
    ],
  },
  {
    label: "Exclusive Offers",
    items: [
      {
        title: "Four Seasons Private Jet",
        description: "Around-the-world itinerary with Michelin-starred in-flight dining.",
      },
      {
        title: "Aurum Yacht Collections",
        description: "Charter mega-yachts with onboard sommeliers and wellness suites.",
      },
      {
        title: "Iconic Suites",
        description: "Preferential access to penthouses in Paris, Dubai, and New York.",
      },
    ],
  },
];

const heroSlides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1534820607886-087c56e2e1fb?auto=format&fit=crop&w=2000&q=80",
    alt: "Sunset over Santorini with infinity pool overlooking the Aegean Sea",
    eyebrow: "Signature Escapes",
    title: "Curated Journeys Beyond Imagination",
    description:
      "Immerse yourself in handcrafted itineraries where private yachts, Michelin experiences, and secluded sanctuaries are simply the beginning.",
    ctaLabel: "Design My Journey",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=80",
    alt: "Desert resort beneath a star-filled night sky in Arabia",
    eyebrow: "Celestial Nights",
    title: "Under Desert Stars in Private Oasis",
    description:
      "Experience restorative rituals, stargazing with astrophysicists, and gourmet dining amid dunes reserved exclusively for you.",
    ctaLabel: "Reserve the Oasis",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=2000&q=80",
    alt: "Luxury yacht cruising along a dramatic coastline",
    eyebrow: "Ocean Reveries",
    title: "Sail the World in Floating Palaces",
    description:
      "From Amalfi to the Seychelles, indulge in personalized voyages with onboard concierges, spa suites, and private chefs.",
    ctaLabel: "Explore Yacht Voyages",
  },
];

const curatedCollections: CollectionCard[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    alt: "Infinity pool overlooking tropical turquoise waters",
    title: "Azure Island Retreats",
    description: "Overwater villas and private islands designed for tranquil seclusion.",
    action: "Explore",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=1200&q=80",
    alt: "Hot air balloons floating over Cappadocia at sunrise",
    title: "Epic Horizons",
    description: "Balloon flights, glacial hikes, and polar lights with luxury basecamps.",
    action: "Learn More",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80",
    alt: "Fine dining table with plated gourmet meal",
    title: "Gastronomy Legends",
    description: "Indulge in chef's table exclusives and hidden cellar tastings worldwide.",
    action: "Book a Tasting",
  },
];

const signatureExperiences: SignatureExperience[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80",
    alt: "Couple enjoying a private safari at sunset",
    title: "Aurum Conservation Safaris",
    description:
      "Travel by private aircraft to boutique lodges supporting wildlife preservation, guided by conservationists and award-winning trackers.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80",
    alt: "Private spa suite with panoramic mountain views",
    title: "Wellness Residences",
    description:
      "Reset with medical-grade wellness programs overseen by world-renowned physicians, complemented by bespoke nutrition and movement therapies.",
  },
];

const journeyPackages: JourneyPackage[] = [
  {
    id: 1,
    title: "Kyoto & Naoshima Art Voyage",
    destination: "Japan",
    description:
      "Ten nights blending ryokan serenity with private museum openings and Michelin-starred kaiseki masterclasses.",
    price: "From $18,200 per guest",
    duration: "10 nights",
    availability: "Available April - June 2025",
    partner: "In partnership with Aman Kyoto",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9891a28bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional Japanese inn surrounded by lush forest",
  },
  {
    id: 2,
    title: "Patagonia Glacier Odyssey",
    destination: "Chile & Argentina",
    description:
      "Heli-hiking across untouched glaciers with expert glaciologists, complemented by Relais & Châteaux lodging.",
    price: "From $22,450 per guest",
    duration: "12 nights",
    availability: "Select departures Nov 2024 - Feb 2025",
    partner: "Featuring Explora & Awasi",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    alt: "Lake surrounded by snow-capped mountains in Patagonia",
  },
  {
    id: 3,
    title: "Mediterranean Grand Yacht Residency",
    destination: "Italy & Greece",
    description:
      "Residency aboard a 90m superyacht with rotating ports, curated shore excursions, and sommeliers at sea.",
    price: "From $34,600 per suite",
    duration: "7 nights",
    availability: "Weekly sailings May - September 2025",
    partner: "Chartered via Lürssen Private Fleet",
    image:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury yacht anchored near dramatic coastline at sunset",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Every moment felt orchestrated yet effortless—the private art viewing in Florence was beyond anything we imagined.",
    guest: "Elena Marques",
    title: "Founder, Marques Atelier",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    alt: "Portrait of a smiling luxury traveler",
  },
  {
    id: 2,
    quote:
      "Our family safari balanced conservation insights with indulgent comfort. The kids still talk about tracking rhinos at dawn.",
    guest: "The Ibrahim Family",
    title: "Doha",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    alt: "Portrait of a satisfied traveler",
  },
  {
    id: 3,
    quote:
      "From the chartered jet to our private riad, Lumé's team anticipated every detail with grace and expertise.",
    guest: "James & Aria Chen",
    title: "Singapore",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    alt: "Portrait of a couple smiling at the camera",
  },
];

const searchSuggestions = [
  "Santorini Caldera Retreat",
  "Private Sahara Oasis",
  "Patagonia Glacier Voyage",
  "Kyoto Tea Ceremony",
  "Seychelles Yacht Charter",
  "Iceland Aurora Suite",
  "Culinary Tour of Amalfi",
  "Wellness Retreat in Bali",
  "Swiss Alpine Chalet",
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const filteredSuggestions = useMemo(() => {
    if (!query.trim()) return [];
    return searchSuggestions
      .filter((suggestion) =>
        suggestion.toLowerCase().includes(query.trim().toLowerCase()),
      )
      .slice(0, 5);
  }, [query]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-32">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-gradient-luxury" />
        <div className="absolute -right-24 top-12 h-64 w-64 rounded-full bg-aurum/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-indigoDusk/50 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-30 bg-indigoDusk/70 backdrop-luxury border-b border-ivory/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link href="#" className="text-2xl font-display tracking-[0.35em] uppercase">
              Lumé
            </Link>
            <nav className="hidden items-center gap-12 lg:flex">
              {navMenu.map((menu) => (
                <div key={menu.label} className="relative group">
                  <button
                    className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-mist transition-colors duration-300 group-hover:text-ivory"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {menu.label}
                    <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <div className="pointer-events-none absolute left-0 mt-4 w-80 rounded-3xl border border-ivory/10 bg-indigoDusk/95 p-6 opacity-0 shadow-soft-xl transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                    <ul className="space-y-4">
                      {menu.items.map((item) => (
                        <li key={item.title}>
                          <p className="text-sm font-semibold text-ivory">
                            {item.title}
                          </p>
                          <p className="text-sm text-mist/80">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <Link
                href="#booking"
                className="rounded-full border border-aurum/50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-aurum transition duration-300 hover:bg-aurum hover:text-midnight"
              >
                Bookings
              </Link>
            </nav>
            <button className="lg:hidden rounded-full border border-ivory/20 p-2 text-ivory/80">
              <span className="sr-only">Open menu</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </header>

        <section className="relative min-h-[90vh] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== activeSlide}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-overlay" aria-hidden="true" />
            </div>
          ))}

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center gap-10 px-6 py-20">
            <div className="max-w-2xl space-y-6 animate-fadeIn">
              <span className="inline-flex items-center gap-2 rounded-full border border-aurum/50 bg-midnight/40 px-4 py-2 text-xs uppercase tracking-[0.6em] text-aurum">
                <SparklesIcon className="h-4 w-4" aria-hidden="true" />
                Elevated Journeys
              </span>
              <p className="font-display text-sm uppercase tracking-[0.6em] text-aurum/80">
                {heroSlides[activeSlide].eyebrow}
              </p>
              <h1 className="text-balance text-4xl leading-tight text-ivory drop-shadow-gold sm:text-5xl md:text-6xl">
                {heroSlides[activeSlide].title}
              </h1>
              <p className="max-w-xl text-lg text-mist">
                {heroSlides[activeSlide].description}
              </p>
            </div>

            <div className="w-full max-w-2xl">
              <form
                className="relative w-full rounded-full border border-ivory/20 bg-midnight/70 p-2 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-aurum/80"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 120)}
                    placeholder="Search destinations, experiences, or partners"
                    className="w-full bg-transparent text-sm text-ivory placeholder:text-mist focus:outline-none"
                    aria-label="Search luxury journeys"
                    aria-autocomplete="list"
                    aria-expanded={isFocused && filteredSuggestions.length > 0}
                    aria-controls="search-suggestions"
                    role="combobox"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-full bg-aurum px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-midnight transition duration-300 hover:bg-aurum/90"
                  >
                    Discover
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                {isFocused && filteredSuggestions.length > 0 && (
                  <ul
                    id="search-suggestions"
                    role="listbox"
                    className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-3xl border border-ivory/15 bg-indigoDusk/95 shadow-soft-xl"
                  >
                    {filteredSuggestions.map((suggestion) => (
                      <li key={suggestion}>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-2 px-4 py-3 text-sm text-mist transition hover:bg-royal/40 hover:text-ivory"
                          onMouseDown={() => {
                            setQuery(suggestion);
                            setIsFocused(false);
                          }}
                          role="option"
                          aria-selected={false}
                        >
                          {suggestion}
                          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </form>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-mist/80">
                <span>Concierge Response in 2 Hours</span>
                <span className="hidden h-1 w-1 rounded-full bg-aurum md:inline-block" aria-hidden="true" />
                <span>Access to 120+ Private Partners</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`h-1 w-16 rounded-full transition-all ${
                    index === activeSlide ? "bg-aurum" : "bg-ivory/30"
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-24 max-w-7xl px-6" aria-labelledby="collections">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-aurum/70">
                Curated Collections
              </p>
              <h2 id="collections" className="mt-2 text-3xl md:text-4xl">
                Crafted Themes for Discerning Travelers
              </h2>
            </div>
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 font-semibold text-aurum transition hover:text-aurum/80"
            >
              View all itineraries
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {curatedCollections.map((collection) => (
              <article
                key={collection.id}
                className="group relative overflow-hidden rounded-4xl border border-ivory/10 bg-indigoDusk/70 shadow-soft-xl transition duration-500 hover:-translate-y-2 hover:border-aurum/40 hover:shadow-glow-gold"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent" aria-hidden="true" />
                </div>
                <div className="space-y-4 p-8">
                  <h3 className="text-xl font-semibold">{collection.title}</h3>
                  <p className="text-sm text-mist">{collection.description}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-aurum transition duration-300 group-hover:gap-3">
                    {collection.action}
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-32 max-w-7xl space-y-16 px-6" aria-labelledby="signatures">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-aurum/70">
                Signature Experiences
              </p>
              <h2 id="signatures" className="mt-2 text-3xl md:text-4xl">
                Moments that Redefine Luxury Travel
              </h2>
            </div>
            <p className="max-w-xl text-sm text-mist">
              Partnering with globally renowned brands and boutique partners, we
              orchestrate immersive experiences that leave a legacy.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {signatureExperiences.map((experience) => (
              <article
                key={experience.id}
                className="relative overflow-hidden rounded-4xl border border-ivory/10 bg-indigoDusk/80"
              >
                <div
                  className="relative h-[420px] bg-cover bg-center bg-no-repeat bg-fixed"
                  style={{ backgroundImage: `url(${experience.image})` }}
                  role="img"
                  aria-label={experience.alt}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/40 to-midnight/95" />
                </div>
                <div className="absolute inset-0" aria-hidden="true" />
                <div className="relative space-y-4 p-10">
                  <h3 className="text-2xl font-semibold">{experience.title}</h3>
                  <p className="text-sm text-mist">{experience.description}</p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-aurum transition hover:text-aurum/80"
                  >
                    Speak with a curator
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="booking"
          className="relative z-10 mx-auto mt-32 max-w-7xl px-6"
          aria-labelledby="booking-title"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-aurum/70">
                Booking Studio
              </p>
              <h2 id="booking-title" className="mt-2 text-3xl md:text-4xl">
                Reserve with Transparent Pricing & Real-Time Availability
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-mist">
              <CalendarIcon className="h-5 w-5 text-aurum" aria-hidden="true" />
              <span>Verified with affiliate partners every 12 hours</span>
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {journeyPackages.map((journey) => (
              <article
                key={journey.id}
                className="flex h-full flex-col overflow-hidden rounded-4xl border border-ivory/10 bg-indigoDusk/70 shadow-soft-xl transition duration-500 hover:-translate-y-2 hover:border-aurum/40"
              >
                <div className="relative h-60">
                  <Image
                    src={journey.image}
                    alt={journey.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-aurum/80">
                      {journey.destination}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ivory">
                      {journey.title}
                    </h3>
                  </div>
                  <p className="text-sm text-mist flex-1">{journey.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-aurum font-semibold">{journey.price}</p>
                    <p className="text-mist/80">{journey.duration}</p>
                    <p className="text-mist/80">{journey.availability}</p>
                    <p className="text-mist/60">{journey.partner}</p>
                  </div>
                  <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-aurum/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-aurum transition duration-300 hover:bg-aurum hover:text-midnight">
                    View availability
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="relative z-10 mx-auto mt-32 max-w-6xl px-6"
          aria-labelledby="testimonials"
        >
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-aurum/70">
                Voices of Trust
              </p>
              <h2 id="testimonials" className="mt-2 text-3xl md:text-4xl">
                Testimonials from Our Guests
              </h2>
            </div>
            <p className="max-w-xl text-sm text-mist">
              Each review is verified and sourced directly from journeys curated
              with our affiliate partners.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="relative flex h-full flex-col gap-6 rounded-4xl border border-ivory/10 bg-indigoDusk/70 p-8 shadow-soft-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-aurum/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ivory">{testimonial.guest}</p>
                    <p className="text-sm text-mist/70">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-mist">
                  “{testimonial.quote}”
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="sticky bottom-0 z-30 mt-32 border-t border-ivory/10 bg-indigoDusk/90 backdrop-luxury">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.6em] text-aurum/70">
                Stay Informed
              </p>
              <h2 className="font-display text-2xl text-ivory">
                Receive seasonal dossiers and invitation-only offers.
              </h2>
            </div>
            <form className="w-full max-w-xl rounded-full border border-ivory/20 bg-midnight/60 p-2">
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-transparent text-sm text-ivory placeholder:text-mist focus:outline-none"
                  aria-label="Subscribe to newsletter"
                />
                <button
                  type="submit"
                  className="rounded-full bg-aurum px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-midnight transition hover:bg-aurum/90"
                >
                  Join
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.4em] text-mist/80">
              <Link href="https://www.instagram.com" className="hover:text-aurum">
                Instagram
              </Link>
              <Link href="https://www.pinterest.com" className="hover:text-aurum">
                Pinterest
              </Link>
              <Link href="https://www.linkedin.com" className="hover:text-aurum">
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="border-t border-ivory/10 py-6 text-center text-xs text-mist/60">
            © {new Date().getFullYear()} Lumé Luxe Travel. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
