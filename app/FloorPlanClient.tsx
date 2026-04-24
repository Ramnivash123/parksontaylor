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
    <div className="bg-[#fffdf9] rounded-[26px] overflow-hidden border border-[#e5ded3] shadow-[0_18px_45px_rgba(26,29,27,0.12)]">
      {/* TOP IMAGE */}
      <div className="relative h-[275px] w-full overflow-hidden rounded-t-[26px]">
        <img
          src={plan.interiorImages[currentImage]}
          alt={`Modern apartment interior of ${plan.title} at Parks on Taylor Sherman TX`}
          className="h-full w-full object-cover"
        />

        {plan.popular && (
          <div className="absolute left-4 top-4 rounded-full bg-[#E09428] px-4 py-2 font-[Plus_Jakarta_Sans] text-[12px] font-bold text-white shadow-md">
            Most Popular
          </div>
        )}

        <div className="absolute right-4 top-4 rounded-full bg-[#2f3642]/95 px-4 py-2 font-[Plus_Jakarta_Sans] text-[13px] font-bold text-white shadow-md">
          {plan.available}
        </div>

        <button
          onClick={prevImage}
          className="absolute left-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-[24px] leading-none text-white backdrop-blur-sm transition hover:bg-black/50"
        >
          ‹
        </button>

        <button
          onClick={nextImage}
          className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-[24px] leading-none text-white backdrop-blur-sm transition hover:bg-black/50"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {plan.interiorImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`rounded-full transition-all ${
                currentImage === index
                  ? "h-[7px] w-[23px] bg-white"
                  : "h-[7px] w-[7px] bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* FLOOR PLAN IMAGE */}
      <div className="relative h-[355px] w-full border-b border-[#eee7dc] bg-[#fbfaf7]">
        <img
          src={plan.images[0]}
          alt={`${plan.beds} ${plan.baths} apartment floor plan ${plan.title} at Parks on Taylor Sherman TX`}
          className="h-full w-full object-contain p-8"
        />
      </div>

      {/* CONTENT */}
      <div className="bg-[#fffdf9] px-6 pb-7 pt-7 md:px-7">
        <p className="mb-2 font-[Plus_Jakarta_Sans] text-[12px] font-bold uppercase tracking-[0.22em] text-[#E09428]">
          {plan.series}
        </p>

        <h3 className="font-[Instrument_Serif] text-[31px] leading-none tracking-[-0.02em] text-[#111827]">
          {plan.title}
        </h3>

        <p className="mt-5 min-h-[48px] font-[Plus_Jakarta_Sans] text-[16px] leading-[1.45] tracking-[-0.02em] text-[#314057]">
          {plan.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 font-[Plus_Jakarta_Sans] text-[15px] font-bold text-[#15191f]">
          <span className="flex items-center gap-2">
            <span className="text-[#1f376d]">↦</span>
            {plan.beds}
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#1f376d]">↪</span>
            {plan.baths}
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#1f376d]">↗</span>
            {plan.area}
          </span>
        </div>

        <div className="mt-7 flex items-end gap-2">
          <p className="font-[Instrument_Serif] text-[39px] leading-none tracking-[-0.04em] text-[#1f376d]">
            {plan.price}
          </p>
          <span className="mb-[3px] font-[Plus_Jakarta_Sans] text-[13px] text-[#555]">
            per month
          </span>
        </div>

        <div className="mt-7 flex min-h-[68px] flex-wrap content-start gap-2">
          {plan.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#cbd3df] bg-[#f3f6fb] px-4 py-[7px] font-[Plus_Jakarta_Sans] text-[13px] font-bold leading-none text-[#18376f]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-[105px] grid grid-cols-[1fr_105px] gap-3">
          <button className="h-[50px] rounded-[11px] bg-[#223f82] font-[Plus_Jakarta_Sans] text-[16px] font-bold text-white transition hover:bg-[#19346f]">
            View Detail
          </button>

          <button
            onClick={() => onToggleCompare(plan.title)}
            disabled={!isSelected && !canSelectMore}
            className={`h-[50px] rounded-[11px] border font-[Plus_Jakarta_Sans] text-[15px] font-bold transition ${
              isSelected
                ? "border-[#223f82] bg-[#223f82] text-white"
                : canSelectMore
                ? "border-[#cbd3df] bg-white text-[#3c3c3c] hover:bg-[#f5f7fb]"
                : "cursor-not-allowed border-[#e4ddd2] bg-[#f3efe8] text-[#b2aaa0]"
            }`}
          >
            {isSelected ? "Selected" : "Compare"}
          </button>
        </div>
      </div>
    </div>
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
      <section className="relative overflow-hidden bg-[#1f376d] text-[#F5F2ED] min-h-[620px] px-6 md:px-16 lg:px-[150px] pt-[84px] pb-20">
        {/* subtle dotted background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(245,242,237,0.45)_1px,transparent_1px)] [background-size:50px_50px]" />

        <div className="relative z-10 max-w-[680px]">
          <p className="font-[Plus_Jakarta_Sans] text-[13px] font-bold uppercase tracking-[0.32em] text-[#E09428] mb-[22px]">
            PARKS ON TAYLOR · SHERMAN, TX
          </p>

          <h1 className="font-[Instrument_Serif] text-[64px] md:text-[86px] leading-[0.98] tracking-[-0.04em] text-[#F5F2ED]">
            Floor Plans & <br />
            <span className="italic text-[#E09428]">Pricing</span>
          </h1>

          <p className="mt-[28px] max-w-[570px] font-[Plus_Jakarta_Sans] text-[20px] leading-[1.72] text-[#b7bfd0] tracking-[-0.04em]">
            Six thoughtfully designed layouts — from cozy 1-bedrooms
            to spacious 2-bed townhomes. All include premium finishes
            and in-unit connections.
          </p>

          <div className="mt-[58px] grid grid-cols-2 md:grid-cols-4 gap-x-[52px] gap-y-8">
            {[
              ["6", "FLOOR PLANS"],
              ["15", "UNITS AVAILABLE"],
              ["625–1,003", "SQ FT RANGE"],
              ["$799", "STARTING FROM"],
            ].map(([value, label]) => (
              <div key={label}>
                <h2 className="font-[Instrument_Serif] text-[34px] leading-none text-white tracking-[-0.05em]">
                  {value}
                </h2>
                <p className="mt-[15px] font-[Plus_Jakarta_Sans] text-[13px] font-bold uppercase tracking-[0.16em] text-[#8f9fc3] whitespace-nowrap">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {floorPlans.map((plan) => (
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

      <section className="bg-[#F5F2ED] pb-24 px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          
          <div className="rounded-[20px] border border-dashed border-[#bdc8d8] bg-[#f1eeee] px-9 py-7">
            <div className="flex items-center gap-4">
              
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[12px] bg-[#d9dce4]">
                <span className="flex h-[21px] w-[21px] items-center justify-center rounded-full border-2 border-[#173a7a] text-[13px] font-bold text-[#173a7a]">
                  ✓
                </span>
              </div>

              <div>
                <p className="font-[Plus_Jakarta_Sans] text-[17px] font-bold text-[#123a78]">
                  Compare any two floor plans
                </p>

                <p className="mt-1 font-[Plus_Jakarta_Sans] text-[15px] text-[#334155]">
                  Click "Compare" on any two cards to see a side-by-side breakdown of specs and pricing.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}