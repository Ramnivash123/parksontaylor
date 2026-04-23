import type { Metadata } from "next";
import GalleryClient from "../GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Parks on Taylor Apartments in Sherman, TX",
  description:
    "View the Parks on Taylor apartment gallery in Sherman, TX. Explore modern interiors, resort-style amenities, pool, fitness center, and community spaces through high-quality images.",
  openGraph: {
    title: "Gallery | Parks on Taylor Apartments",
    description:
      "Browse photos of Parks on Taylor in Sherman, TX including living rooms, kitchens, pool, fitness center, and community amenities.",
    siteName: "Parks on Taylor",
    type: "website",
  },
};

export default function Page() {
  return <GalleryClient />;
}