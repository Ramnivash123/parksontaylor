import type { Metadata } from "next";
import BlogClient from "../BlogClient";

export const metadata: Metadata = {
  title: "Sherman Living Guide | Parks on Taylor Blog & Local Insights",
  description:
    "Explore local guides, dining spots, outdoor adventures, and community stories near Parks on Taylor apartments in Sherman, TX. Stay updated with lifestyle tips and neighborhood insights.",

  openGraph: {
    title: "Sherman Living Guide | Parks on Taylor",
    description:
      "Discover local eats, outdoor adventures, and community stories near Parks on Taylor apartments in Sherman, TX.",
    siteName: "Parks on Taylor",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sherman Living Guide | Parks on Taylor",
    description:
      "Local insights, food spots, outdoor guides, and lifestyle stories from Sherman, TX.",
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  
  return(
    <>
    
    <BlogClient />;
    </>
  ); 
}

