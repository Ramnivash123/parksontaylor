"use client";
import HeaderOther from "./_components/HeaderOther";
import { useMemo, useState } from "react";

type FloorPlan = {
  series: string;
  title: string;
  description: string;
  beds: string;
  baths: string;
  area: string;
  price: string;
  available: string;
  tags: string[];
  images: string[];
  interiorImages: string[];
  popular?: boolean;
};

const floorPlans: FloorPlan[] = [
  {
    series: "A-SERIES",
    title: "Plan A1",
    description:
      "Perfect for the minimalist professional — efficient layout with premium finishes.",
    beds: "1 Bed",
    baths: "1 Bath",
    area: "625 sq ft",
    price: "$799/mo",
    available: "3 available",
    popular: false,
    tags: [
      "Quartz Countertops",
      "LVP Flooring",
      "9 ft Ceilings",
      "In-Unit W/D Connections",
      "+2 more",
    ],
    images: ["/webp/plan/a1.webp"],
    interiorImages: [
      "/webp/amenities/13.webp",
      "/webp/amenities/10.webp",
      "/webp/amenities/5.webp",
    ],
  },
  {
    series: "A-SERIES",
    title: "Plan A2",
    description:
      "Our best-selling 1-bedroom — spacious open kitchen and a dedicated sleeping area.",
    beds: "1 Bed",
    baths: "1 Bath",
    area: "724 sq ft",
    price: "$849/mo",
    available: "3 available",
    popular: true,
    tags: [
      "Quartz Countertops",
      "LVP Flooring",
      "9 ft Ceilings",
      "In-Unit W/D Connections",
      "+3 more",
    ],
    images: ["/webp/plan/a2.webp"],
    interiorImages: [
      "/webp/amenities/6.webp",
      "/webp/amenities/11.webp",
      "/webp/amenities/13.webp",
    ],
  },
  {
    series: "A-SERIES",
    title: "Plan A3",
    description:
      "Mirror layout of A2 with an oversized balcony — great for outdoor entertaining.",
    beds: "1 Bed",
    baths: "1 Bath",
    area: "724 sq ft",
    price: "$849/mo",
    available: "3 available",
    popular: false,
    tags: [
      "Quartz Countertops",
      "LVP Flooring",
      "9 ft Ceilings",
      "In-Unit W/D Connections",
      "+3 more",
    ],
    images: ["/webp/plan/a3.webp"],
    interiorImages: [
      "/webp/amenities/5.webp",
      "/webp/amenities/13.webp",
      "/webp/amenities/10.webp",
    ],
  },
  {
    series: "B-SERIES",
    title: "Plan B1",
    description:
      "Ideal for roommates or a growing household — spacious bedrooms at an accessible price.",
    beds: "2 Beds",
    baths: "1 Bath",
    area: "850 sq ft",
    price: "$999/mo",
    available: "3 available",
    popular: false,
    tags: [
      "Quartz Countertops",
      "LVP Flooring",
      "9 ft Ceilings",
      "In-Unit W/D Connections",
      "+3 more",
    ],
    images: ["/webp/plan/b1.webp"],
    interiorImages: [
      "/webp/amenities/10.webp",
      "/webp/amenities/5.webp",
      "/webp/amenities/6.webp",
    ],
  },
  {
    series: "B-SERIES",
    title: "Plan B2",
    description:
      "2-bed with a half-bath bonus and a dedicated den — the flexible home-office layout.",
    beds: "2 Beds",
    baths: "1.5 Baths",
    area: "886 sq ft",
    price: "$1,049/mo",
    available: "3 available",
    popular: true,
    tags: [
      "Quartz Countertops",
      "LVP Flooring",
      "9 ft Ceilings",
      "In-Unit W/D Connections",
      "+3 more",
    ],
    images: ["/webp/plan/b2.webp"],
    interiorImages: [
      "/webp/amenities/11.webp",
      "/webp/amenities/13.webp",
      "/webp/amenities/6.webp",
    ],
  },
  {
    series: "B-SERIES",
    title: "Plan B3",
    description:
      "Our flagship townhome — over 1,000 sq ft, 2 full baths, and an oversized balcony.",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1,003 sq ft",
    price: "$1,099/mo",
    available: "3 available",
    popular: true,
    tags: [
      "Quartz Countertops",
      "LVP Flooring",
      "9 ft Ceilings",
      "In-Unit W/D Connections",
      "+4 more",
    ],
    images: ["/webp/plan/b3.webp"],
    interiorImages: [
      "/webp/amenities/13.webp",
      "/webp/amenities/5.webp",
      "/webp/amenities/10.webp",
    ],
  },
];

type CardProps = {
  plan: FloorPlan;
  isSelected: boolean;
  canSelectMore: boolean;
  onToggleCompare: (title: string) => void;
};

function Card({ plan, isSelected, canSelectMore, onToggleCompare }: CardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % plan.interiorImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? plan.interiorImages.length - 1 : prev - 1
    );
  };


  return (
    <>
    
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e7e1d7]">
      {/* TOP INTERIOR SLIDER */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={plan.interiorImages[currentImage]}
          alt={`Modern apartment interior of ${plan.title} at Parks on Taylor Sherman TX`}
          className="w-full h-full object-cover"
        />

        {plan.popular && (
          <div className="absolute top-3 left-3 bg-[#E09428] text-white text-xs px-3 py-1 rounded-full z-10">
            Most Popular
          </div>
        )}

        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full z-10">
          {plan.available}
        </div>

        {plan.interiorImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/45 text-white flex items-center justify-center z-10"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/45 text-white flex items-center justify-center z-10"
            >
              →
            </button>
          </>
        )}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {plan.interiorImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition rounded-full ${
                currentImage === index
                  ? "w-5 h-2 bg-white"
                  : "w-2.5 h-2.5 bg-white/65"
              }`}
            />
          ))}
        </div>
      </div>

      {/* FLOOR PLAN IMAGE */}
      <div className="relative h-[220px] w-full bg-[#f3efe8] border-t">
        <img
          src={plan.images[0]}
          alt={`${plan.beds} ${plan.baths} apartment floor plan ${plan.title} at Parks on Taylor Sherman TX`}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 bg-[#f8f5ef]">
        <p className="text-xs tracking-[0.2em] text-[#E09428] mb-2">
          {plan.series}
        </p>

        <h3 className="text-[44px] leading-none font-[Instrument_Serif] text-[#18315f] mb-3">
          {plan.title}
        </h3>

        <p className="text-sm md:text-[15px] text-[#5c5752] mb-5 leading-relaxed">
          {plan.description}
        </p>

        <div className="flex flex-wrap gap-5 text-sm mb-5 text-[#0C1A3A] font-medium">
          <span>{plan.beds}</span>
          <span>{plan.baths}</span>
          <span>{plan.area}</span>
        </div>

        <div className="mb-6">
          <span className="text-[30px] font-[Instrument_Serif] text-[#18315f]">
            {plan.price}
          </span>
          <span className="text-sm text-[#5c5752] ml-2">per month</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {plan.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 bg-[#ece8df] border border-[#d8d2c7] rounded-full text-[#18315f]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-[#1E3A8A] text-white py-3 rounded-xl font-medium">
            View Detail
          </button>

          <button
            onClick={() => onToggleCompare(plan.title)}
            disabled={!isSelected && !canSelectMore}
            className={`px-4 py-3 rounded-xl border transition font-medium ${
              isSelected
                ? "border-[#1E3A8A] bg-[#eef4ff] text-[#1E3A8A]"
                : canSelectMore
                ? "border-[#d8d2c7] text-[#5c5752] bg-white"
                : "border-[#e4ddd2] text-[#b2aaa0] bg-[#f3efe8] cursor-not-allowed"
            }`}
          >
            {isSelected ? "Selected" : "Compare"}
          </button>
        </div>
      </div>
    </div>
  </>
  );
}

function ComparisonDrawer({
  leftPlan,
  rightPlan,
  onClear,
}: {
  leftPlan: FloorPlan;
  rightPlan: FloorPlan;
  onClear: () => void;
}) {
  const rows = [
    { label: "BEDROOMS", left: leftPlan.beds, right: rightPlan.beds },
    { label: "BATHROOMS", left: leftPlan.baths, right: rightPlan.baths },
    { label: "SQ FOOTAGE", left: leftPlan.area, right: rightPlan.area },
    { label: "PRICE", left: leftPlan.price, right: rightPlan.price },
    { label: "AVAILABLE", left: leftPlan.available, right: rightPlan.available },
  ];

  const biggerArea = (a: string, b: string) =>
    parseInt(a.replace(/[^0-9]/g, ""), 10) > parseInt(b.replace(/[^0-9]/g, ""), 10);

  const cheaperPrice = (a: string, b: string) =>
    parseInt(a.replace(/[^0-9]/g, ""), 10) < parseInt(b.replace(/[^0-9]/g, ""), 10);

  return (
    <>
      
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClear} />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#F5F2ED] rounded-t-[28px] shadow-2xl border-t border-[#d8d2c7] max-h-[82vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#F5F2ED] px-6 md:px-16 pt-4 pb-6 border-b border-[#ddd7cc]">
          <div className="w-14 h-1.5 rounded-full bg-[#d1cbc1] mx-auto mb-5" />

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#29488d]" />
              <p className="text-sm md:text-[22px] tracking-[0.14em] uppercase text-[#29488d] font-semibold">
                Comparing {leftPlan.title} vs {rightPlan.title}
              </p>
            </div>

            <button
              onClick={onClear}
              className="text-[#5c5752] text-sm md:text-base whitespace-nowrap"
            >
              × Clear Comparison
            </button>
          </div>
        </div>

        <div className="px-6 md:px-16 py-8">
          {/* desktop */}
          <div className="hidden md:grid grid-cols-[220px_1fr_1fr] gap-8">
            <div className="pt-[74px]">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="h-[52px] border-t border-[#d8d2c7] flex items-center text-[#666b67] text-[15px] font-semibold tracking-[0.08em]"
                >
                  {row.label}
                </div>
              ))}
            </div>

            <div>
              <div className="h-[74px] flex items-center border-b border-[#d8d2c7]">
                <h3 className="text-[38px] font-[Instrument_Serif] text-[#2d3230]">
                  {leftPlan.title}
                </h3>
              </div>

              {rows.map((row) => {
                const highlight =
                  row.label === "PRICE"
                    ? cheaperPrice(leftPlan.price, rightPlan.price)
                    : row.label === "SQ FOOTAGE"
                    ? biggerArea(leftPlan.area, rightPlan.area)
                    : false;

                return (
                  <div
                    key={row.label}
                    className="h-[52px] border-b border-[#d8d2c7] flex items-center text-[22px] text-[#2d3230]"
                  >
                    <span className={highlight ? "text-[#29488d] font-semibold" : ""}>
                      {row.left}
                    </span>
                    {highlight && <span className="ml-2 text-[#E09428]">★</span>}
                  </div>
                );
              })}
            </div>

            <div>
              <div className="h-[74px] flex items-center gap-3 border-b border-[#d8d2c7]">
                <h3 className="text-[38px] font-[Instrument_Serif] text-[#2d3230]">
                  {rightPlan.title}
                </h3>

                {rightPlan.popular && (
                  <span className="bg-[#E09428] text-white text-xs px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </span>
                )}
              </div>

              {rows.map((row) => {
                const highlight =
                  row.label === "PRICE"
                    ? cheaperPrice(rightPlan.price, leftPlan.price)
                    : row.label === "SQ FOOTAGE"
                    ? biggerArea(rightPlan.area, leftPlan.area)
                    : false;

                return (
                  <div
                    key={row.label}
                    className="h-[52px] border-b border-[#d8d2c7] flex items-center text-[22px] text-[#2d3230]"
                  >
                    <span className={highlight ? "text-[#29488d] font-semibold" : ""}>
                      {row.right}
                    </span>
                    {highlight && <span className="ml-2 text-[#E09428]">★</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* mobile */}
          <div className="md:hidden space-y-6">
            {[leftPlan, rightPlan].map((plan) => (
              <div
                key={plan.title}
                className="bg-white rounded-2xl border border-[#ddd7cc] p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-[28px] font-[Instrument_Serif] text-[#2d3230]">
                    {plan.title}
                  </h3>
                  {plan.popular && (
                    <span className="bg-[#E09428] text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 border-b border-[#ece5d9] pb-3"
                    >
                      <span className="text-xs tracking-[0.08em] text-[#666b67] font-semibold">
                        {row.label}
                      </span>
                      <span className="text-[#2d3230] font-medium">
                        {plan.title === leftPlan.title ? row.left : row.right}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Floor() {
  const [selectedCompare, setSelectedCompare] = useState<string[]>([]);

  const toggleCompare = (title: string) => {
    setSelectedCompare((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      }
      if (prev.length === 2) return prev;
      return [...prev, title];
    });
  };

  const selectedPlans = useMemo(
    () => floorPlans.filter((plan) => selectedCompare.includes(plan.title)),
    [selectedCompare]
  );

  const clearComparison = () => setSelectedCompare([]);

  return (
    <>
      <HeaderOther />
      <section className="bg-[#1f376d] text-[#F5F2ED] px-6 md:px-16 py-24">
        <p className="text-sm tracking-widest text-[#E09428] mb-6 font-[Plus_Jakarta_Sans]">
          PARKS ON TAYLOR · SHERMAN, TX
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight font-[Instrument_Serif]">
          Floor Plans & <span className="text-[#E09428] italic">Pricing</span>
        </h1>

        <p className="mt-6 max-w-xl text-[#cfcac3] text-base md:text-lg font-[Plus_Jakarta_Sans] leading-relaxed">
          Six thoughtfully designed layouts — from cozy 1-bedrooms to spacious
          2-bed townhomes. All include premium finishes and in-unit connections.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-[Instrument_Serif]">6</h2>
            <p className="text-xs tracking-widest mt-2 text-[#a8a39d] font-[Plus_Jakarta_Sans]">
              FLOOR PLANS
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-[Instrument_Serif]">15</h2>
            <p className="text-xs tracking-widest mt-2 text-[#a8a39d] font-[Plus_Jakarta_Sans]">
              UNITS AVAILABLE
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-[Instrument_Serif]">625–1,003</h2>
            <p className="text-xs tracking-widest mt-2 text-[#a8a39d] font-[Plus_Jakarta_Sans]">
              SQ FT RANGE
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-[Instrument_Serif]">$799</h2>
            <p className="text-xs tracking-widest mt-2 text-[#a8a39d] font-[Plus_Jakarta_Sans]">
              STARTING FROM
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {floorPlans.slice(0, 3).map((plan) => (
            <Card
              key={plan.title}
              plan={plan}
              isSelected={selectedCompare.includes(plan.title)}
              canSelectMore={selectedCompare.length < 2}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#F5F2ED] px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {floorPlans.slice(3, 6).map((plan) => (
            <Card
              key={plan.title}
              plan={plan}
              isSelected={selectedCompare.includes(plan.title)}
              canSelectMore={selectedCompare.length < 2}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>
      </section>

      {selectedPlans.length === 2 && (
        <ComparisonDrawer
          leftPlan={selectedPlans[0]}
          rightPlan={selectedPlans[1]}
          onClear={clearComparison}
        />
      )}

      <section className="bg-[#F5F2ED] px-6 md:px-16 pb-24">
        <div className="border border-dashed border-[#d6d1c8] rounded-2xl bg-[#EEF4FF] p-6 md:p-8 flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6E2DA] text-[#1E3A8A]">
            ✓
          </div>

          <div>
            <p className="text-base font-semibold text-[#1E3A8A] font-[Plus_Jakarta_Sans]">
              Compare any two floor plans
            </p>
            <p className="text-sm text-[#5c5752] mt-1 font-[Plus_Jakarta_Sans]">
              Click "Compare" on any two cards to see a side-by-side breakdown of
              specs and pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}