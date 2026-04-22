"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  name: string;
};

type ImageCardProps = {
  item: GalleryItem;
  index: number;
  height: string;
  onView: (index: number) => void;
};

const gallery: GalleryItem[] = [
  { src: "/webp/gallery/1.webp", name: "Community Entrance" },
  { src: "/webp/gallery/2.webp", name: "Courtyard with Mature Landscaping" },
  { src: "/webp/gallery/3.webp", name: "Building Exteriors at Dusk" },
  { src: "/webp/gallery/25.webp", name: "Private Covered Balcony — Evening" },
  { src: "/webp/gallery/10.webp", name: "Open-Concept Living Room" },
  { src: "/webp/gallery/5.webp", name: "Modern Kitchen with Quartz Countertops" },
  { src: "/webp/gallery/2.webp", name: "Primary Bedroom — Natural Light" },
  { src: "/webp/gallery/15.webp", name: "Spa-Inspired Bathroom with Tile Surround" },
  { src: "/webp/gallery/22.webp", name: "Dining Area with Warm Lighting" },
  { src: "/webp/gallery/11.webp", name: "Living Room — Floor-to-Ceiling Windows" },
  { src: "/webp/gallery/17.webp", name: "Resort-Style Swimming Pool" },
  { src: "/webp/gallery/29.webp", name: "Pool Sundeck with Lounge Seating" },
  { src: "/webp/gallery/25.webp", name: "24-Hour Fitness Center" },
  { src: "/webp/gallery/24.webp", name: "Bark Park & Off-Leash Agility Trail" },
  { src: "/webp/gallery/26.webp", name: "Covered Resident Parking" },
  { src: "/webp/gallery/16.webp", name: "Historic Downtown Sherman" },
  { src: "/webp/gallery/13.webp", name: "Eisenhower State Park Trails" },
  { src: "/webp/gallery/18.webp", name: "Farm-to-Table Local Dining" },
  { src: "/webp/gallery/28.webp", name: "Sherman Saturday Farmers Market" },
];

function ImageCard({ item, index, height, onView }: ImageCardProps) {
  return (
    <div
      onClick={() => onView(index)}
      className="relative group cursor-pointer overflow-hidden rounded-[22px]"
    >
      <img
        src={item.src}
        alt={item.name}
        className={`w-full ${height} object-cover transition duration-300 group-hover:scale-[1.03]`}
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-300" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <div className="absolute bottom-4 left-4 z-10 text-white pr-4">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] opacity-80">
          View Full
        </p>
        <h3 className="text-sm md:text-lg leading-snug font-serif">
          {item.name}
        </h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const closeModal = () => setCurrentIndex(null);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === null ? 0 : (prev + 1) % gallery.length
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#1E3872] text-[#F5F2ED] px-6 md:px-16 py-24 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-[#E09428] mb-6 uppercase">
            Community Gallery
          </p>

          <h1 className="text-5xl md:text-7xl font-[Instrument_Serif] leading-tight">
            Life at <br />
            <span className="text-[#E09428] italic">Parks on Taylor</span>
          </h1>

          <p className="mt-8 text-[#c7c3bd] max-w-xl text-sm md:text-base leading-relaxed">
            Explore every side of the community — from thoughtfully designed
            interiors and elevated amenities to the neighborhood experiences
            that make everyday living at Parks on Taylor feel connected,
            comfortable, and inspiring.
          </p>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="bg-[#F5F2ED] px-6 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto space-y-5 md:space-y-6">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <ImageCard
              item={gallery[0]}
              index={0}
              height="h-[220px] md:h-[230px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[1]}
              index={1}
              height="h-[220px] md:h-[230px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[2]}
              index={2}
              height="h-[220px] md:h-[230px]"
              onView={setCurrentIndex}
            />
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            <div className="md:col-span-4">
              <ImageCard
                item={gallery[4]}
                index={4}
                height="h-[240px] md:h-[320px]"
                onView={setCurrentIndex}
              />
            </div>

            <div className="md:col-span-4">
              <ImageCard
                item={gallery[10]}
                index={10}
                height="h-[240px] md:h-[320px]"
                onView={setCurrentIndex}
              />
            </div>

            <div className="md:col-span-4">
              <ImageCard
                item={gallery[8]}
                index={8}
                height="h-[240px] md:h-[320px]"
                onView={setCurrentIndex}
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <ImageCard
              item={gallery[11]}
              index={11}
              height="h-[220px] md:h-[260px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[12]}
              index={12}
              height="h-[220px] md:h-[260px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[13]}
              index={13}
              height="h-[220px] md:h-[260px]"
              onView={setCurrentIndex}
            />
          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            <div className="md:col-span-5">
              <ImageCard
                item={gallery[5]}
                index={5}
                height="h-[240px] md:h-[310px]"
                onView={setCurrentIndex}
              />
            </div>

            <div className="md:col-span-3">
              <ImageCard
                item={gallery[7]}
                index={7}
                height="h-[240px] md:h-[310px]"
                onView={setCurrentIndex}
              />
            </div>

            <div className="md:col-span-4">
              <ImageCard
                item={gallery[9]}
                index={9}
                height="h-[240px] md:h-[310px]"
                onView={setCurrentIndex}
              />
            </div>
          </div>

          {/* ROW 5 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            <ImageCard
              item={gallery[14]}
              index={14}
              height="h-[220px] md:h-[240px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[15]}
              index={15}
              height="h-[220px] md:h-[240px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[16]}
              index={16}
              height="h-[220px] md:h-[240px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[17]}
              index={17}
              height="h-[220px] md:h-[240px]"
              onView={setCurrentIndex}
            />
          </div>

          {/* ROW 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <ImageCard
              item={gallery[18]}
              index={18}
              height="h-[240px] md:h-[320px]"
              onView={setCurrentIndex}
            />
            <ImageCard
              item={gallery[6]}
              index={6}
              height="h-[240px] md:h-[320px]"
              onView={setCurrentIndex}
            />
          </div>
        </div>
      </section>

      {/* ===== FULL IMAGE MODAL ===== */}
      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 md:top-7 md:right-7 text-white text-3xl md:text-4xl z-50"
            aria-label="Close image"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-3 md:left-6 text-white text-4xl md:text-5xl z-50 bg-white/10 hover:bg-white/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="w-full max-w-6xl flex flex-col items-center">
            <img
              src={gallery[currentIndex].src}
              alt={gallery[currentIndex].name}
              className="max-w-[92%] max-h-[82vh] object-contain rounded-xl"
            />

            <div className="mt-4 text-center text-white px-4">
              <p className="text-xs md:text-sm opacity-70 uppercase tracking-[0.18em]">
                Full View
              </p>
              <h3 className="text-lg md:text-2xl font-serif mt-1">
                {gallery[currentIndex].name}
              </h3>
              <p className="text-sm opacity-70 mt-1">
                {currentIndex + 1} / {gallery.length}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-3 md:right-6 text-white text-4xl md:text-5xl z-50 bg-white/10 hover:bg-white/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}