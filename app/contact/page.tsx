import type { Metadata } from "next";
import ContactClient from "../ContactClient";


export const metadata: Metadata = {
  title: "Contact Parks on Taylor | Schedule a Tour in Sherman, TX Apartments",
  
  description:
    "Get in touch with Parks on Taylor apartments in Sherman, TX. Contact our leasing office, schedule a tour, check availability, and learn more about our $99 move-in special.",

  openGraph: {
    title: "Contact Parks on Taylor Apartments | Sherman, TX",
    description:
      "Contact our leasing team to schedule a tour, ask questions, and explore availability at Parks on Taylor apartments in Sherman, TX.",
    siteName: "Parks on Taylor",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Parks on Taylor | Sherman TX Apartments",
    description:
      "Reach out to Parks on Taylor apartments for tours, pricing, and availability in Sherman, TX.",
  },

  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  
  return(
    <>
    
    <ContactClient />;
    </>
  ); 
}

