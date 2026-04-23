import type { Metadata } from "next";
import FloorPlanClient from "../FloorPlanClient";



export const metadata: Metadata = {
  title: "Floor Plans & Pricing | Parks on Taylor Apartments in Sherman, TX",
  description:
    "Explore 1 and 2 bedroom floor plans at Parks on Taylor in Sherman, TX. Compare layouts, view pricing, square footage, and premium apartment features.",
  openGraph: {
    title: "Floor Plans & Pricing | Parks on Taylor",
    description:
      "Browse modern 1 and 2 bedroom apartment floor plans with pricing, availability, and features at Parks on Taylor in Sherman, TX.",
    siteName: "Parks on Taylor",
    type: "website",
  },
};

export default function Page() {
  
  return (
    <>
    <FloorPlanClient />
    </>
  ); 
}