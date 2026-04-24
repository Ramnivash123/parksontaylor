"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "./_components/header";
import HeaderTop from "./_components/header_top";
import LeasePortal from "./_components/LeasePortal";

export default function HomeClient() {

  const [tab, setTab] = useState("amenities");
  const [reviewIndex, setReviewIndex] = useState(0);

  const plans = {
    A1: {
      title: "Plan A1 · 1 Bed · 1 Bath",
      price: "$799/mo",
      area: "625 sq ft",
      img: "/webp/plan/a1.webp",
      bed: "1 Bed",
      bath: "1 Bath",
    },
    A2: {
      title: "Plan A2 · 1 Bed · 1 Bath",
      price: "$849/mo",
      area: "724 sq ft",
      img: "/webp/plan/a2.webp",
      bed: "1 Bed",
      bath: "1 Bath",
    },
    A3: {
      title: "Plan A3 · 1 Bed · 1 Bath",
      price: "$849/mo",
      area: "724 sq ft",
      img: "/webp/plan/a3.webp",
      bed: "1 Bed",
      bath: "1 Bath",
    },
    B1: {
      title: "Plan B1 · 2 Bed · 1 Bath",
      price: "$999/mo",
      area: "850 sq ft",
      img: "/webp/plan/b1.webp",
      bed: "2 Bed",
      bath: "1 Bath",
    },
    B2: {
      title: "Plan B2 · 2 Bed · 2 Bath",
      price: "$1049/mo",
      area: "886 sq ft",
      img: "/webp/plan/b2.webp",
      bed: "2 Bed",
      bath: "2 Bath",
    },
    B3: {
      title: "Plan B3 · 2 Bed · 2 Bath",
      price: "$1099/mo",
      area: "1003 sq ft",
      img: "/webp/plan/b3.webp",
      bed: "2 Bed",
      bath: "2 Bath",
    },
  };

  const reviews = [
    {
      name: "John B.",
      role: "2–Bedroom Resident",
      years: "Resident for 3 Years",
      initials: "JB",
      rating: 4,
      text: `The new management team genuinely turned things around here. I was close to leaving after the old issues, but when LiveNJoy took over, maintenance actually showed up same-day and they knew my name within the first week. It's not perfect — nothing is — but the effort is real, and that goes a long way.`
    },
    {
      name: "Maria T.",
      role: "2–Bed Townhome",
      years: "Resident for 2 Years",
      initials: "MT",
      rating: 5,
      text: `We moved in right after the management transition and were a little nervous given some of the old reviews. The team reassured us from day one — fixed our A/C within hours of move-in. Our neighbors who stayed through the change say it's like a completely different community now.`
    },
    {
      name: "DeShawn L.",
      role: "1–Bedroom Resident",
      years: "Resident for 3+ Years",
      initials: "DL",
      rating: 5,
      text: `I'll be honest — I thought about leaving when things weren't great here. But I gave the new team a real chance. Three-plus years later, I'm still here, and genuinely glad I stayed. It finally feels like a real community. The staff actually cares, and you feel that difference every day.`
    }
  ];

  const interiorPhotos = {
    "Living Room": "/webp/amenities/13.webp",
    Bedroom: "/webp/amenities/10.webp",
    Kitchen: "/webp/amenities/5.webp",
    Bathroom: "/webp/amenities/6.webp",
  } as const;

  const amenityPhotos = {
    Pool: "/webp/banner/amenities-banner.webp",
    Fitness: "/webp/banner/plan-banner.webp",
    "Dog Park": "/webp/features/community.webp",
    Laundry: "/webp/features/home.webp",
  } as const;

  type PlanKey = keyof typeof plans;
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("A1");

  const [bedroomType, setBedroomType] = useState<"1bed" | "2bed">("1bed");

  const defaultPreviewImg = "/webp/banner/amenities.webp";

  const [previewCategory, setPreviewCategory] = useState<
    "Living Room" | "Bedroom" | "Kitchen" | "Bathroom"
  >("Living Room");

  const [amenityCategory, setAmenityCategory] = useState<
    "Pool" | "Fitness" | "Dog Park" | "Laundry"
  >("Pool");

  const stories = [
    {
      image: "/webp/amenities/5.webp",
      category: "Local Eats",
      time: "4 min",
      author: "Maya Chen",
      date: "Jan 18",
      title: "The 7 Best Farm-to-Table Spots Near Sherman",
      desc: "From field to fork — the freshest seasonal menus nearby.",
    },
    {
      image: "/webp/landscape/11.webp",
      category: "Outdoors",
      time: "6 min",
      author: "Alex Torres",
      date: "Jan 12",
      title: "Hidden Trails at Eisenhower State Park",
      desc: "Six routes most visitors never find.",
    },
    {
      image: "/webp/landscape/3.webp",
      category: "Community",
      time: "3 min",
      author: "Sara Kim",
      date: "Jan 5",
      title: "Sherman Farmers Market: A Weekend Essential",
      desc: "Every stall worth knowing.",
    },

    // NEXT PAGE (this is what shows on arrow click)
    {
      image: "/webp/amenities/4.webp",
      category: "Local Life",
      time: "5 min",
      author: "James Park",
      date: "Dec 28",
      title: "Best Coffee Spots to Work Remotely",
      desc: "Reliable Wi-Fi and great espresso.",
    },
    {
      image: "/webp/landscape/1.webp",
      category: "Culture",
      time: "7 min",
      author: "Nadia Ali",
      date: "Dec 21",
      title: "5 Architecture & Gallery Tours Worth the Drive",
      desc: "Texas's creative corridor.",
    },
    {
      image: "/webp/landscape/6.webp",
      category: "City Life",
      time: "4 min",
      author: "Chris Moore",
      date: "Dec 15",
      title: "Sunset Views: Taylor's Best Spots",
      desc: "Golden hour perfection.",
    },
  ];
  
  const [storyPage, setStoryPage] = useState(0);
  const totalStoryPages = Math.ceil(stories.length / 3);

  const amenities = [
    {
      title: "Responsive Maintenance",
      tag: "SAME-DAY RESPONSE",
      img: "/webp/amenities/10.webp",
    },
    {
      title: "Convenient On-site Management",
      tag: "MON–SAT · OFFICE ON-SITE",
      img: "/webp/office/3.webp",
    },
    {
      title: "Swimming Pools",
      tag: "2 POOLS · SUNDECK",
      img: "/webp/pool/2.webp",
    },
    {
      title: "Covered Parking",
      tag: "RESERVED · COVERED",
      img: "/webp/landscape/10.webp",
    },
    {
      title: "Dog Park",
      tag: "ON-SITE · FENCED",
      img: "/webp/landscape/12.webp",
    },
    {
      title: "On-Site Laundry",
      tag: "ON-SITE · CONVENIENT",
      img: "/webp/features/community.webp",
    },
  ];
  const [showTopBar, setShowTopBar] = useState(true);

  return (
    <>
      <HeaderTop show={showTopBar} setShow={setShowTopBar} />
      <Header showTopBar={showTopBar} />
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[100vh] w-full">

        <Image
          src="/webp/office/1.webp"
          alt="Parks on Taylor apartments exterior in Sherman TX with modern residential buildings"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 ${
            showTopBar ? "pt-28 md:pt-32" : "pt-20 md:pt-24"
          }`}
        >
          
          <div className="block md:hidden">
            <p className="text-[10px] tracking-[2px] uppercase mb-1 opacity-80 text-[#a49e99]">
              PARKS ON TAYLOR · SHERMAN, TX NOW
            </p>
            <p className="text-[10px] tracking-[2px] uppercase mb-2 opacity-80 text-[#a49e99]">
              LEASING
            </p>
          </div>

          <p className="hidden md:block text-xs tracking-[3px] uppercase mb-4 opacity-80 text-[#a49e99]">
            PARKS ON TAYLOR · SHERMAN, TX · NOW LEASING
          </p>

          <h1
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(3.2rem, 7.2vw, 6.4rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'rgb(245, 242, 237)',
              margin: 0,
              maxWidth: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Affordable, Safe, and
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color: 'rgba(224, 148, 40, 0.92)',
                whiteSpace: 'nowrap',
              }}
            >
              Clean Living in Sherman.
            </em>
          </h1>

          <div className="flex items-center gap-2 my-4 md:my-6">
            <div className="w-6 md:w-10 h-[1px] bg-[#E09428]"></div>
            <span className="text-lg md:text-xl text-[#E09428]">•••</span>
            <div className="w-6 md:w-10 h-[1px] bg-[#E09428]"></div>
          </div>

          <p className="max-w-sm md:max-w-2xl text-sm md:text-lg lg:text-xl opacity-80 leading-relaxed text-[#a49e99]">
            Responsive management and a community you can trust.
            <br className="hidden md:block" />
            Conveniently located near Fairway Park.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full max-w-xs md:max-w-none justify-center">
            
            <a href="/#unit" className="w-full md:w-auto min-h-[52px] flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#1e3872] text-[#f5f2ed] text-[14px] font-bold font-[Plus_Jakarta_Sans] tracking-[0.01em] shadow-[0_4px_22px_rgba(30,56,114,0.5)] hover:bg-[#0c2457] transition-all duration-200">
              View Available Units →
            </a>

            <a
              href="/#unit"
              className="w-full md:w-auto min-h-[52px] flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-transparent text-[rgba(245,242,237,0.78)] text-[14px] font-semibold font-[Plus_Jakarta_Sans] tracking-[0.01em] border-[1.5px] border-[rgba(245,242,237,0.22)] hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              Schedule a Tour
            </a>

          </div>
          
        </div>
        
      </section>

      {/* ================= UNIT OVERVIEW ================= */}
      
      
      <div>
        <LeasePortal />
      </div>
      <section id="unit" className="bg-[#f5f2ee] px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* TOP TEXT ROW */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
            <div>
              <p className="text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase text-[#50627a] mb-2 sm:mb-3 font-semibold">
                UNIT OVERVIEW
              </p>
              <h2 className="text-[34px] sm:text-[46px] md:text-[64px] leading-[0.95] font-[Instrument_Serif] text-[#2d3230]">
                Unified Living Hub
              </h2>
            </div>

            <p className="text-[15px] sm:text-base md:text-[18px] text-[#5a6260] leading-relaxed max-w-[760px] md:pt-2">
              Explore your future home with detailed floor plans, interactive 3D virtual tours, and unit photography — all in one convenient module.
            </p>
          </div>

          {/* ORANGE STRIP */}
          <div className="mt-8 bg-gradient-to-r from-[#df901f] to-[#cf7f14] rounded-[20px] px-4 sm:px-6 md:px-7 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-white/45 text-white px-4 py-2 rounded-full text-[11px] sm:text-xs tracking-[0.08em] font-semibold">
                LOOK &amp; LEASE SPECIAL
              </span>

              <span className="text-white font-[Instrument_Serif] text-[17px] sm:text-[20px] md:text-[22px] leading-none">
                Only $99 Total to Move In
              </span>

              <span className="bg-white/16 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                1BR from $799 · A1–A3
              </span>

              <span className="bg-white/16 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                2BR from $999 · B1–B3
              </span>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 bg-white text-[#b45d2a] px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap">
                <span>📞</span>
                <span>(903) 961–6391</span>
              </span>
            </div>
          </div>

          {/* FILTER ROW */}
          <div className="mt-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            {/* LEFT TABS */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setBedroomType("1bed");
                  setSelectedPlan("A1");
                }}
                className={`min-w-[145px] rounded-[18px] border px-5 py-4 text-left transition ${
                  bedroomType === "1bed"
                    ? "bg-[#1e3872] border-[#1e3872] text-white shadow-[0_8px_20px_rgba(30,56,114,0.22)]"
                    : "bg-[#ece8e1] border-[#d7d1c7] text-[#2d3230]"
                }`}
              >
                <span className="block text-[15px] sm:text-[16px] font-semibold">
                  1 Bedroom
                </span>
                <span className="block text-[12px] sm:text-[13px] mt-1 opacity-85">
                  from $799/mo
                </span>
              </button>

              <button
                onClick={() => {
                  setBedroomType("2bed");
                  setSelectedPlan("B1");
                }}
                className={`min-w-[155px] rounded-[18px] border px-5 py-4 text-left transition ${
                  bedroomType === "2bed"
                    ? "bg-[#1e3872] border-[#1e3872] text-white shadow-[0_8px_20px_rgba(30,56,114,0.22)]"
                    : "bg-[#ece8e1] border-[#d7d1c7] text-[#2d3230]"
                }`}
              >
                <span className="block text-[15px] sm:text-[16px] font-semibold">
                  2 Bedrooms
                </span>
                <span className="block text-[12px] sm:text-[13px] mt-1 opacity-85">
                  from $999/mo
                </span>
              </button>
            </div>

            {/* RIGHT PLAN PILLS */}
            <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {bedroomType === "1bed" ? (
                <>
                  <button
                    onClick={() => setSelectedPlan("A1")}
                    className={`shrink-0 rounded-full border px-5 py-3 text-sm whitespace-nowrap transition ${
                      selectedPlan === "A1"
                        ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                        : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                    }`}
                  >
                    <span className="font-semibold mr-2">A1</span>
                    <span>625 sq ft</span>
                    <span className="ml-3 font-semibold">$799/mo</span>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("A2")}
                    className={`shrink-0 rounded-full border px-5 py-3 text-sm whitespace-nowrap transition ${
                      selectedPlan === "A2"
                        ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                        : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                    }`}
                  >
                    <span className="font-semibold mr-2">A2</span>
                    <span>724 sq ft</span>
                    <span className="ml-3 font-semibold">$849/mo</span>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("A3")}
                    className={`shrink-0 rounded-full border px-5 py-3 text-sm whitespace-nowrap transition ${
                      selectedPlan === "A3"
                        ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                        : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                    }`}
                  >
                    <span className="font-semibold mr-2">A3</span>
                    <span>724 sq ft</span>
                    <span className="ml-3 font-semibold">$849/mo</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setSelectedPlan("B1")}
                    className={`shrink-0 rounded-full border px-5 py-3 text-sm whitespace-nowrap transition ${
                      selectedPlan === "B1"
                        ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                        : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                    }`}
                  >
                    <span className="font-semibold mr-2">B1</span>
                    <span>850 sq ft</span>
                    <span className="ml-3 font-semibold">$999/mo</span>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("B2")}
                    className={`shrink-0 rounded-full border px-5 py-3 text-sm whitespace-nowrap transition ${
                      selectedPlan === "B2"
                        ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                        : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                    }`}
                  >
                    <span className="font-semibold mr-2">B2</span>
                    <span>886 sq ft</span>
                    <span className="ml-3 font-semibold">$1,049/mo</span>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("B3")}
                    className={`shrink-0 rounded-full border px-5 py-3 text-sm whitespace-nowrap transition ${
                      selectedPlan === "B3"
                        ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                        : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                    }`}
                  >
                    <span className="font-semibold mr-2">B3</span>
                    <span>1,003 sq ft</span>
                    <span className="ml-3 font-semibold">$1,099/mo</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* MAIN TWO-CARD LAYOUT */}
          <div className="mt-6 grid xl:grid-cols-[1.55fr_1fr] gap-7 items-stretch">
            {/* LEFT CARD */}
            <div className="rounded-[26px] border border-[#ddd7cc] bg-[#fbfaf7] overflow-hidden shadow-[0_2px_8px_rgba(26,29,27,0.04)]">
              {/* TOP */}
              <div className="flex items-start justify-between gap-4 px-6 md:px-7 py-5 border-b border-[#ddd7cc]">
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#5f6981] font-semibold mb-2">
                    {plans[selectedPlan].title}
                  </p>
                  <h3 className="font-[Instrument_Serif] text-[28px] md:text-[36px] leading-none text-[#2d3230]">
                    {plans[selectedPlan].bed}, {plans[selectedPlan].bath}
                  </h3>
                </div>

                <div className="shrink-0 bg-[#1e3872] text-white px-6 py-3 rounded-full text-[18px] md:text-[20px] font-semibold shadow-[0_8px_18px_rgba(30,56,114,0.22)]">
                  {plans[selectedPlan].price}
                </div>
              </div>

              {/* FLOORPLAN IMAGE */}
              <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] border-b border-[#ddd7cc] bg-[#f5f3ee]">
                <Image
                  src={plans[selectedPlan].img}
                  alt={`${plans[selectedPlan].bed} ${plans[selectedPlan].bath} apartment floor plan ${selectedPlan} at Parks on Taylor Sherman TX`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 60vw"
                  className="object-contain p-6 md:p-8"
                />
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#ddd7cc]">
                <div className="py-5 text-center border-r border-[#ddd7cc]">
                  <p className="font-[Instrument_Serif] text-[20px] text-[#2d3230]">
                    {plans[selectedPlan].bed}
                  </p>
                  <p className="text-[11px] tracking-[0.12em] uppercase text-[#50627a] font-semibold mt-1">
                    Bedroom
                  </p>
                </div>
                <div className="py-5 text-center sm:border-r border-[#ddd7cc]">
                  <p className="font-[Instrument_Serif] text-[20px] text-[#2d3230]">
                    {plans[selectedPlan].bath}
                  </p>
                  <p className="text-[11px] tracking-[0.12em] uppercase text-[#50627a] font-semibold mt-1">
                    Bathroom
                  </p>
                </div>
                <div className="py-5 text-center border-t sm:border-t-0 border-r border-[#ddd7cc]">
                  <p className="font-[Instrument_Serif] text-[20px] text-[#2d3230]">
                    {plans[selectedPlan].area}
                  </p>
                  <p className="text-[11px] tracking-[0.12em] uppercase text-[#50627a] font-semibold mt-1">
                    Area
                  </p>
                </div>
                <div className="py-5 text-center border-t sm:border-t-0">
                  <p className="font-[Instrument_Serif] text-[20px] text-[#2d3230]">
                    Apr 1
                  </p>
                  <p className="text-[11px] tracking-[0.12em] uppercase text-[#50627a] font-semibold mt-1">
                    Available
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <div className="px-6 md:px-7 py-5">
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#50627a] font-semibold mb-4">
                  Plan Features
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <p className="text-[12px] tracking-[0.12em] uppercase text-[#1e3872] font-semibold mb-3">
                      Highlights
                    </p>
                    <ul className="space-y-1.5 text-[15px] text-[#4d5552] list-disc ml-4">
                      <li>High Speed Internet</li>
                      <li>Washer/Dryer Hookup</li>
                      <li>Air Conditioning</li>
                      <li>Heating</li>
                      <li>Ceiling Fans</li>
                      <li>Cable Ready</li>
                      <li>Tub/Shower</li>
                      <li>Fireplace</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[12px] tracking-[0.12em] uppercase text-[#1e3872] font-semibold mb-3">
                      Kitchen
                    </p>
                    <ul className="space-y-1.5 text-[15px] text-[#4d5552] list-disc ml-4">
                      <li>Dishwasher</li>
                      <li>Disposal</li>
                      <li>Microwave</li>
                      <li>Range</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[12px] tracking-[0.12em] uppercase text-[#1e3872] font-semibold mb-3">
                      Interior
                    </p>
                    <ul className="space-y-1.5 text-[15px] text-[#4d5552] list-disc ml-4">
                      <li>Carpet</li>
                      <li>Vinyl Flooring</li>
                      <li>Dining Room</li>
                      <li>Walk-In Closets</li>
                      <li>Window Coverings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="h-full rounded-[26px] border border-[#ddd7cc] bg-[#fbfaf7] overflow-hidden shadow-[0_2px_8px_rgba(26,29,27,0.04)] flex flex-col">
              {/* PHOTO / AMENITIES TOP SWITCH */}
              <div className="p-3 border-b border-[#ddd7cc] bg-[#f3f0ea]">
                <div className="grid grid-cols-2 rounded-[18px] bg-[#dde1e6] p-1">
                  <button
                    onClick={() => setTab("photos")}
                    className={`rounded-[14px] py-3 text-[15px] font-semibold transition ${
                      tab === "photos"
                        ? "bg-[#1e3872] text-white shadow-[0_4px_12px_rgba(30,56,114,0.18)]"
                        : "text-[#5a6260]"
                    }`}
                  >
                    Interior Photos
                  </button>
                  <button
                    onClick={() => setTab("amenities")}
                    className={`rounded-[14px] py-3 text-[15px] font-semibold transition ${
                      tab === "amenities"
                        ? "bg-[#1e3872] text-white shadow-[0_4px_12px_rgba(30,56,114,0.18)]"
                        : "text-[#5a6260]"
                    }`}
                  >
                    Amenities
                  </button>
                </div>
              </div>

              {/* SECONDARY FILTERS */}
              <div className="px-4 py-3 border-b border-[#ddd7cc] bg-[#fbfaf7]">
                <div className="flex gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {tab === "photos" ? (
                    (["Living Room", "Bedroom", "Kitchen", "Bathroom"] as const).map((item) => (
                      <button
                        key={item}
                        onClick={() => setPreviewCategory(item)}
                        className={`shrink-0 rounded-full px-6 py-3 text-[15px] border transition ${
                          previewCategory === item
                            ? "bg-[#1e3872] text-white border-[#1e3872]"
                            : "bg-[#eceff3] text-[#5a6260] border-[#cbd2d9]"
                        }`}
                      >
                        {item}
                      </button>
                    ))
                  ) : (
                    (["Pool", "Fitness", "Dog Park", "Laundry"] as const).map((item) => (
                      <button
                        key={item}
                        onClick={() => setAmenityCategory(item)}
                        className={`shrink-0 rounded-full px-6 py-3 text-[15px] border transition ${
                          amenityCategory === item
                            ? "bg-[#1e3872] text-white border-[#1e3872]"
                            : "bg-[#eceff3] text-[#5a6260] border-[#cbd2d9]"
                        }`}
                      >
                        {item}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* IMAGE - stretched down */}
              <div className="relative flex-1 min-h-[520px] bg-[#ece8e1]">
                <Image
                  src={
                    tab === "photos"
                      ? interiorPhotos[previewCategory]
                      : amenityPhotos[amenityCategory]
                  }
                  alt={
                    tab === "photos"
                      ? `Modern ${previewCategory.toLowerCase()} interior at Parks on Taylor apartments Sherman TX`
                      : `${amenityCategory} amenities at Parks on Taylor apartments Sherman TX`
                  }
                  fill
                  sizes="(max-width: 1280px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                  <button className="w-12 h-12 rounded-full bg-white/90 text-[#5a6260] shadow flex items-center justify-center text-xl">
                    ←
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#1e3872] text-white shadow flex items-center justify-center">
                    ⌂
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/90 text-[#5a6260] shadow flex items-center justify-center text-xl">
                    →
                  </button>
                </div>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="px-6 py-5 border-t border-[#ddd7cc] bg-[#fbfaf7]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-[Instrument_Serif] text-[22px] md:text-[28px] leading-none text-[#2d3230]">
                      {plans[selectedPlan].title}
                    </p>
                    <p className="text-[15px] text-[#68706d] mt-2">
                      {plans[selectedPlan].area} · Available Apr 1, 2026
                    </p>
                  </div>

                  <div className="font-[Instrument_Serif] text-[28px] md:text-[34px] text-[#1e3872] whitespace-nowrap">
                    {plans[selectedPlan].price}
                    <span className="text-[18px] text-[#5a6260]">/mo</span>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <a href="/#unit" className="text-center w-full rounded-full border border-[#1e3872] text-[#1e3872] py-4 px-5 text-[15px] font-semibold hover:bg-[#f2f5fb] transition">
                    Schedule Tour
                  </a>

                  <a
                    href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-full bg-[#1e3872] text-white py-4 px-5 text-[15px] font-semibold shadow-[0_8px_20px_rgba(30,56,114,0.18)] hover:bg-[#15306a] transition"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="hidden md:flex items-center gap-6 mt-12 text-[#9ba9bf]">
            <div className="h-px bg-[#d8dce2] flex-1" />
            <span className="text-[12px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap">
              Parks on Taylor · Unit Overview
            </span>
            <div className="h-px bg-[#d8dce2] flex-1" />
          </div>
        </div>
      </section>

      {/* ================= AMENITIES SECTION ================= */}
      <section id="amenities" className="bg-[#0c2340] px-5 md:px-10 lg:px-12 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto">

          {/* TOP TEXT */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-10 md:mb-12">
            <div>
              <p className="font-[Plus_Jakarta_Sans] text-[12px] md:text-[13px] tracking-[0.24em] uppercase text-[#E09428] mb-4 font-semibold">
                Amenities
              </p>

              <h2 className="font-[Instrument_Serif] text-[42px] md:text-[64px] lg:text-[72px] text-white leading-[0.95] tracking-[-0.03em]">
                Everything You Need,
                <br />
                Right Where You Live
              </h2>
            </div>

            <div className="md:flex md:items-center">
              <p className="font-[Plus_Jakarta_Sans] text-[16px] md:text-[19px] leading-[1.75] text-[#9faac0] max-w-[680px]">
                Responsive maintenance and convenient on-site management are the backbone of life
                here — backed by covered parking, two pools, and a full appliance package to keep
                everyday living simple and reliable.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {amenities.map((item, i) => (
              <div
                key={i}
                className="relative h-[230px] md:h-[270px] rounded-[26px] overflow-hidden group
                          shadow-md hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]
                          hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={item.img}
                  alt={`${item.title} at Parks on Taylor apartments in Sherman TX`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition duration-300" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                <div className="font-[Plus_Jakarta_Sans] absolute top-5 left-5 z-10 bg-white/25 backdrop-blur-md text-white text-[11px] md:text-xs font-semibold tracking-[0.13em] uppercase px-4 py-2 rounded-full">
                  {item.tag}
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="font-[Instrument_Serif] text-white text-[28px] md:text-[34px] leading-none tracking-[-0.03em]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ALSO INCLUDED */}
          <div className="mt-9 md:mt-10 rounded-[18px] bg-[#112a4d] border border-white/10 px-5 md:px-7 py-6 md:py-7">
            <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-7">
              <p className=" font-[Plus_Jakarta_Sans] text-[12px] tracking-[0.24em] uppercase text-[#5f86c8] font-semibold whitespace-nowrap pt-2">
                Also Included
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Granite Countertops",
                  "Ceiling Fans — Living Room & Bedrooms",
                  "Intercom Entry",
                  "Den / Home Office",
                  "Central Heat & Air Conditioning",
                  "Condominium Style",
                  "2-Bedroom Town Homes Available",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="font-[Plus_Jakarta_Sans] inline-flex items-center gap-2 rounded-full border border-[#284a7a] bg-[#112f58] px-4 py-2 text-[14px] md:text-[15px] font-medium text-[#c8d1df]"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#4778bd] text-[9px] text-[#7fb2ff]">
                      ✓
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-7 md:mt-8">
            <a href="/#amenities" className="font-[Plus_Jakarta_Sans] inline-flex items-center gap-3 rounded-full border border-[#365b91] px-8 md:px-10 py-4 text-[15px] md:text-[16px] font-semibold text-white hover:bg-white/5 transition">
              Explore All Home Features & Amenities
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= LOCATION SECTION ================= */}
      <section className="bg-[#f1eee9] px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div>
            <p className="font-[Plus_Jakarta_Sans] text-xs tracking-[3px] uppercase text-[#7b7f7d] mb-4">
              Location · Sherman, TX
            </p>

            <h2 className="text-3xl md:text-5xl font-serif text-[#2d3230] leading-[1.2]">
              Fall in Love <br />
              With the Location.
            </h2>
          </div>

          {/* RIGHT */}
          <p className="font-[Plus_Jakarta_Sans] text-sm md:text-base text-[#5a6260] leading-relaxed max-w-xl">
            Parks on Taylor is literally across the street from Fairway Park and its beloved Splash Pad — 
            and just 5 minutes from Sherman Town Center's restaurants, retail, and entertainment. 
            The address sells itself.
          </p>

        </div>
      </section>
      
      {/* ================= LOCATION MAP + DESTINATIONS ================= */}
      <section id="neighborhood" className="bg-[#f1eee9] px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT: MAP (using hero image) */}
          <div className="relative h-[350px] md:h-[520px] rounded-3xl overflow-hidden border bg-[#f3efe8]">

            {/* MAP GRID BACKGROUND */}
            <div className="absolute inset-0">
              {/* vertical roads */}
              <div className="absolute left-[12%] top-0 h-full w-[3px] bg-[#d7d1c7]" />
              <div className="absolute left-[26%] top-0 h-full w-[3px] bg-[#d7d1c7]" />
              <div className="absolute left-[43%] top-0 h-full w-[4px] bg-[#d7d1c7]" />
              <div className="absolute left-[58%] top-0 h-full w-[3px] bg-[#d7d1c7]" />
              <div className="absolute left-[70%] top-0 h-full w-[3px] bg-[#d7d1c7]" />
              <div className="absolute left-[78%] top-0 h-full w-[8px] bg-[#d7d1c7]" />

              {/* horizontal roads */}
              <div className="absolute top-[27%] left-0 w-full h-[5px] bg-[#d7d1c7]" />
              <div className="absolute top-[41%] left-0 w-full h-[5px] bg-[#d7d1c7]" />
              <div className="absolute top-[53%] left-0 w-full h-[4px] bg-[#d7d1c7]" />
              <div className="absolute top-[61%] left-0 w-full h-[8px] bg-[#d7d1c7]" />
              <div className="absolute top-[78%] left-0 w-full h-[6px] bg-[#d7d1c7]" />

              {/* blocks */}
              <div className="absolute left-[10%] top-[13%] w-[12%] h-[9%] rounded bg-[#d8d3cc]" />
              <div className="absolute left-[25%] top-[13%] w-[8%] h-[9%] rounded bg-[#e2ddd5]" />
              <div className="absolute left-[35%] top-[13%] w-[14%] h-[9%] rounded bg-[#e2ddd5]" />
              <div className="absolute left-[52%] top-[13%] w-[8%] h-[9%] rounded bg-[#e2ddd5]" />
              <div className="absolute left-[62%] top-[13%] w-[10%] h-[9%] rounded bg-[#e2ddd5]" />

              {/* highlighted zones */}
              <div className="absolute left-[25%] top-[47%] w-[13%] h-[15%] rounded-xl border border-[#8ab4f8] bg-[#d9ecff]" />
              <div className="absolute left-[48%] top-[42%] w-[14%] h-[16%] rounded-xl border border-[#b8c1cb] bg-[#dfe4e9]" />
              <div className="absolute left-[60%] top-[60%] w-[17%] h-[16%] rounded-xl border border-[#f0cf91] bg-[#fff1d8]" />

              {/* subtle river */}
              <div className="absolute bottom-[14%] left-0 w-full h-[7%] bg-[#e4e6e7] opacity-70 rounded-[100%]" />
            </div>

            {/* MAIN PIN */}
            <div className="absolute top-[39%] left-[30%] -translate-x-1/2 -translate-y-1/2">
              <div className="font-[Plus_Jakarta_Sans] absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-semibold text-[#1e3872] shadow whitespace-nowrap">
                Parks on Taylor
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#1e3872] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#1e3872] rounded-full"></div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#1e3872] rotate-45 -mt-2"></div>
              </div>
            </div>

            {/* FAIRWAY PARK */}
            <div className="absolute top-[53%] left-[38%] -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#4da3ff] rounded-full flex items-center justify-center shadow">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <div className="w-2.5 h-2.5 bg-[#4da3ff] rotate-45 -mt-1"></div>
              </div>
              <p className="mt-1 text-[10px] text-[#4da3ff] text-center whitespace-nowrap">
                Fairway Park
              </p>
            </div>

            {/* SHERMAN COMMONS */}
            <div className="absolute top-[48%] left-[55%] -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 bg-[#2f5f9f] rounded-full flex items-center justify-center shadow">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <div className="w-2.5 h-2.5 bg-[#2f5f9f] rotate-45 -mt-1"></div>
              </div>
              <p className="font-[Plus_Jakarta_Sans] mt-1 text-[10px] text-[#2f5f9f] text-center whitespace-nowrap">
                Sherman Commons
              </p>
            </div>

            {/* TOWN CENTER */}
            <div className="absolute top-[65%] left-[67%] -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 bg-[#E09428] rounded-full flex items-center justify-center shadow">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <div className="w-2.5 h-2.5 bg-[#E09428] rotate-45 -mt-1"></div>
              </div>
              <p className="font-[Plus_Jakarta_Sans] mt-1 text-[10px] text-[#E09428] text-center whitespace-nowrap">
                Sherman Town Center
              </p>
            </div>

            {/* COMPASS */}
            <div className="absolute right-6 top-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
              <span className="text-xs font-semibold text-[#1e3872]">N</span>
            </div>

            {/* SCALE */}
            <div className="absolute bottom-6 left-6 text-[11px] text-[#5a6260]">
              <div className="flex mb-1">
                <div className="w-14 h-2 bg-[#1e3872]"></div>
                <div className="w-8 h-2 bg-[#c8d0db]"></div>
              </div>
              <div className="flex gap-6">
                <span>0</span>
                <span>0.5</span>
                <span>1 mi</span>
              </div>
            </div>

          </div>

          {/* RIGHT: DESTINATIONS */}
          <div className="space-y-5">

            <p className="font-[Plus_Jakarta_Sans] text-xs tracking-[3px] uppercase text-[#7b7f7d]">
              Key Destinations
            </p>

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#eef2f7] rounded-xl flex items-center justify-center">
                  🏠
                </div>
                <div>
                  <p className="font-[Plus_Jakarta_Sans] font-medium text-[#2d3230]">Parks on Taylor</p>
                  <p className="font-[Plus_Jakarta_Sans] text-xs text-[#7b7f7d]">Your New Home</p>
                </div>
              </div>
              <span className="font-[Plus_Jakarta_Sans] text-xs bg-[#eef2f7] px-3 py-1 rounded-full">
                Home Base
              </span>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e8f0ff] rounded-xl flex items-center justify-center">
                  🌳
                </div>
                <div>
                  <p className="font-[Plus_Jakarta_Sans] font-medium text-[#2d3230]">
                    Fairway Park & Splash Pad
                  </p>
                  <p className="font-[Plus_Jakarta_Sans] text-xs text-[#7b7f7d]">
                    Parks & Recreation
                  </p>
                </div>
              </div>
              <span className="font-[Plus_Jakarta_Sans] text-xs bg-[#e8f0ff] text-[#1e3872] px-3 py-1 rounded-full">
                2 min walk
              </span>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#eef2f7] rounded-xl flex items-center justify-center">
                  🛒
                </div>
                <div>
                  <p className="font-[Plus_Jakarta_Sans] font-medium text-[#2d3230]">
                    Sherman Commons
                  </p>
                  <p className="font-[Plus_Jakarta_Sans] text-xs text-[#7b7f7d]">
                    Grocery & Retail
                  </p>
                </div>
              </div>
              <span className="font-[Plus_Jakarta_Sans] text-xs bg-[#eef2f7] px-3 py-1 rounded-full">
                3 min drive
              </span>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fff3e6] rounded-xl flex items-center justify-center">
                  🏬
                </div>
                <div>
                  <p className="font-[Plus_Jakarta_Sans] font-medium text-[#2d3230]">
                    Sherman Town Center
                  </p>
                  <p className="font-[Plus_Jakarta_Sans] text-xs text-[#7b7f7d]">
                    Dining, Shopping & Entertainment
                  </p>
                </div>
              </div>
              <span className="font-[Plus_Jakarta_Sans] text-xs bg-[#fff3e6] text-[#E09428] px-3 py-1 rounded-full">
                5 min drive
              </span>
            </div>

            {/* NEARBY TAGS */}
            <div className="pt-4">
              <p className="font-[Plus_Jakarta_Sans] text-xs tracking-[2px] uppercase text-[#7b7f7d] mb-3">
                Nearby Employers & Schools
              </p>

              <div className="font-[Plus_Jakarta_Sans] flex flex-wrap gap-2">
                {[
                  "Sherman ISD",
                  "Austin College",
                  "Grayson College",
                  "Texas Instruments",
                  "Tyson Foods",
                  "Kaiser Aluminum",
                  "Camping World",
                  "Wilson N. Jones Medical"
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#eef2f7] text-[#2d3230]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* PET FRIENDLY */}
            <div className="mt-3">
              <span className="font-[Plus_Jakarta_Sans] inline-block text-sm bg-[#fff3e6] text-[#E09428] px-4 py-2 rounded-full">
                🐾 Pet friendly — cats & dogs welcome
              </span>
            </div>

          </div>
        </div>
      </section>
      

      {/* ================= RESIDENT VOICES ================= */}
      <section className="bg-[#0c2340] px-6 md:px-12 py-16 md:py-24 text-white relative">

        <div className="max-w-[1100px] mx-auto text-center mb-12">
          <p className="text-xs tracking-[3px] uppercase text-[#E09428] mb-3">
            Resident Voices
          </p>

          <h2 className="text-3xl md:text-5xl font-serif">
            Real Stories. Real Residents.
          </h2>

          <p className="text-sm md:text-base text-[#c7cbd1] mt-4 max-w-xl mx-auto">
            We're not asking you to forget the past — we're asking for the chance to show what's changed.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto relative">

          {/* CARD */}
          <div className="
            bg-[rgba(245,242,237,0.04)]
            border border-[rgba(245,242,237,0.1)]
            rounded-[24px]
            p-[clamp(28px,4vw,46px)]
            backdrop-blur-[18px]

            shadow-[0px_24px_64px_rgba(0,0,0,0.36),inset_0px_1px_0px_rgba(255,255,255,0.05)]

            transition-all duration-300 ease-in-out
            hover:scale-[1.02]
            hover:shadow-[0px_32px_80px_rgba(0,0,0,0.45)]

            relative overflow-hidden
          ">

            {/* RATING */}
            <div className="flex items-center gap-2 mb-6 text-[#4da3ff]">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className={i < reviews[reviewIndex].rating ? "" : "opacity-20"}>
                  ★
                </span>
              ))}
              <span className="text-sm text-[#c7cbd1] ml-2">
                {reviews[reviewIndex].rating}.0 / 5
              </span>
            </div>

            {/* TEXT */}
            <p className="text-lg md:text-xl font-serif italic leading-relaxed text-[#e5e7eb]">
              {reviews[reviewIndex].text}
            </p>

            {/* USER */}
            <div className="flex items-center justify-between mt-10 flex-wrap gap-4">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3872] flex items-center justify-center">
                  {reviews[reviewIndex].initials}
                </div>

                <div>
                  <p className="font-serif">
                    {reviews[reviewIndex].name}
                  </p>
                  <p className="text-sm text-[#7b7f7d]">
                    {reviews[reviewIndex].role}
                  </p>
                </div>
              </div>

              <span className="text-xs border border-[#2a4466] px-4 py-2 rounded-full text-[#c7cbd1]">
                ⏱ {reviews[reviewIndex].years}
              </span>
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={() =>
              setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)
            }
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
          >
            ←
          </button>

          <button
            onClick={() =>
              setReviewIndex((reviewIndex + 1) % reviews.length)
            }
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
          >
            →
          </button>

        </div>
      </section>

      {/* STORIES SECTION */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24">

        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto flex items-center justify-between mb-10">
          <div>
            <p className="font-[Plus_Jakarta_Sans] text-xs tracking-[3px] uppercase text-gray-400 mb-2">
              Sherman Living Guide
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
              Stories from the Neighborhood
            </h2>
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setStoryPage((prev) =>
                  (prev - 1 + totalStoryPages) % totalStoryPages
                )
              }
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={() =>
                setStoryPage((prev) => (prev + 1) % totalStoryPages)
              }
              className="w-10 h-10 rounded-full bg-[#1e3872] text-white flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">

          {stories
            .slice(storyPage * 3, storyPage * 3 + 3)
            .map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border bg-white
                shadow-sm hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300 ease-in-out"

              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={`${item.title} near Parks on Taylor apartments Sherman TX`}
                    className="w-full h-[220px] object-cover"
                  />

                  {/* CATEGORY */}
                  <span className="font-[Plus_Jakarta_Sans] absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  {/* TIME */}
                  <span className="font-[Plus_Jakarta_Sans] absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="font-[Plus_Jakarta_Sans] text-sm text-gray-500 mb-2">
                    {item.author} · {item.date}
                  </p>

                  <h3 className="font-serif text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="font-[Plus_Jakarta_Sans] text-sm text-gray-600 mb-4">
                    {item.desc}
                  </p>

                  <button className="font-[Plus_Jakarta_Sans] text-[#1e3872] text-sm font-medium">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
        </div>

      </section>

      <section className="bg-[#0f2747] px-6 md:px-12 py-20 md:py-28 text-center text-white">

        {/* TOP LABEL */}
        <p className="text-xs tracking-[3px] uppercase text-[#E09428] mb-6">
          Ready to Begin?
        </p>

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
          Make Parks on Taylor <br />
          <span className="italic text-gray-300">Your Home</span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-base md:text-lg text-[#c7cbd1] max-w-2xl mx-auto">
          Start your application online or schedule a private tour with our leasing team — 
          we're available 7 days a week.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2f4e85] hover:bg-[#3a5ea3] px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 justify-center"
          >
            Apply Now →
          </a>

          <a href="/#unit" className="border border-white/30 px-8 py-4 rounded-full text-white font-medium hover:bg-white/10">
            Schedule Private Tour
          </a>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-[#9aa3af]">

          <div className="flex items-center gap-2">
            📞 <span>(903) 961-6391</span>
          </div>

          <div className="flex items-center gap-2">
            ✉️ <span>potmanager@livenjoymgt.com</span>
          </div>

          <div className="flex items-center gap-2">
            ⏱ <span>Mon–Fri 8:30AM–5:30PM · Sat 10AM–4PM</span>
          </div>

        </div>

      </section>     
    </>
  );
}