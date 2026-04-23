import type { Metadata } from "next";
import HomeClient from "./HomeClient";



export const metadata: Metadata = {
  title: "Parks on Taylor | Modern Apartments for Rent in Sherman, TX",
  description:
    "Discover affordable, safe, and clean living at Parks on Taylor in Sherman, TX. $99 move-in specials available! Near Fairway Park and Sherman Town Center. View floor plans.",
  openGraph: {
    title: "Parks on Taylor Apartments",
    description:
      "Affordable 1 & 2 bedroom apartments in Sherman, TX near Austin College.",
    siteName: "Parks on Taylor",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <HomeClient />
    </>
  );
}