"use client";
import HeaderOther from "./_components/HeaderOther";
import { useState } from "react";

type Post = {
  category: string;
  readTime: string;
  initials: string;
  author: string;
  date: string;
  title: string;
  description: string;
  img: string;
  content: string[];
};

export default function Blog() {
  const [showTopBar, setShowTopBar] = useState(true);

  const posts: Post[] = [
    {
      category: "Outdoors",
      readTime: "6 min",
      initials: "AT",
      author: "Alex Torres",
      date: "Jan 12, 2026",
      title: "Hidden Trails at Eisenhower State Park",
      description:
        "Six routes that most visitors never find — ranked by scenery, difficulty, and weekend crowds.",
      img: "/webp/landscape/11.webp",
      content: [
        "Just 8 miles from Parks on Taylor, Eisenhower State Park offers 20+ miles of trails that most Sherman residents haven't fully explored. While the lakeside main trail draws crowds on weekends, a handful of insider paths reward those who venture further.",
        "The Ridge Loop (3.4 miles) offers sweeping views of Lake Texoma from 180 feet above the waterline — best experienced at golden hour. The Caddo Creek connector adds 2.1 miles of shaded hardwood forest that feels worlds away from the Texas heat.",
        "For birders, the Spring Hollow Trail passes through a migratory corridor that sees over 80 species each April and October. Pack binoculars.",
        "Practical notes: arrive before 9 AM on Saturdays to guarantee parking. Water stations are available at trailheads 1, 3, and 5. Dogs are welcome on all trails but must be kept on leash.",
      ],
    },
    {
      category: "Community",
      readTime: "3 min",
      initials: "SK",
      author: "Sara Kim",
      date: "Jan 5, 2026",
      title: "Sherman Farmers Market: A Weekend Essential",
      description:
        "Every stall worth knowing at Central Texas's most beloved Saturday morning institution.",
      img: "/webp/landscape/3.webp",
      content: [
        "The Sherman Farmers Market has operated on the corner of Travis and Houston since 1987. Today it hosts over 40 vendors across two city blocks, and it's become the unofficial social hub of the city every Saturday from 8 AM to 1 PM.",
        "Must-visit stalls include the Peach Tree Farm booth (the Red Haven peaches alone are worth waking up early for), the Grayson Honey Collective, and the Tamale Lady — a fixture since the market opened who sells out by 10 AM without fail.",
        "For residents of Parks on Taylor, it's a 12-minute drive or a pleasant 35-minute bike ride down Taylor Street. Several neighbors have started a Saturday morning ride group — ask in the resident portal if you'd like to join.",
        "The winter market (November–February) runs indoors at the Sherman Municipal Auditorium and features a curated selection of 20 vendors specializing in preserves, baked goods, and handmade goods.",
      ],
    },
    {
      category: "Local Life",
      readTime: "5 min",
      initials: "JP",
      author: "James Park",
      date: "Dec 28, 2025",
      title: "Best Coffee Spots to Work Remotely Near Taylor",
      description:
        "Reliable Wi-Fi, great espresso, and the right ambience for a productive morning session.",
      img: "/webp/amenities/4.webp",
      content: [
        "For remote workers and freelancers calling Parks on Taylor home, Sherman punches above its weight when it comes to coffee shop culture. Here are the spots our residents keep coming back to.",
        "The Study on Lamar (just 0.8 miles away) earns top marks for Wi-Fi reliability and generous outlets at every seat. Their cortado is excellent and the noise level stays consistent — productive without feeling sterile. Bonus: free parking.",
        "Ground & Canvas on Houston Street is the local favorite for morning meetings — exposed brick, natural light, and a small courtyard that catches the morning breeze. Slightly slower Wi-Fi but the atmosphere makes up for it.",
        "For longer work sessions, the Sherman Public Library's Digital Commons offers the best connectivity in the city (500+ Mbps) and private focus rooms available for 2-hour slots via their app. Free, obviously.",
      ],
    },
    {
      category: "Culture",
      readTime: "7 min",
      initials: "NA",
      author: "Nadia Ali",
      date: "Dec 21, 2025",
      title: "5 Architecture & Gallery Tours Worth the Drive",
      description:
        "Texas's creative corridor has world-class art closer than you might expect.",
      img: "/webp/landscape/1.webp",
      content: [
        "The stretch of I-75 between Sherman and Dallas has become a quietly thriving corridor for contemporary art and architecture. These five experiences are each under 90 minutes from Parks on Taylor.",
        "The Nasher Sculpture Center in Dallas (75 min south) remains a must-visit for any resident settling into North Texas. The Renzo Piano-designed building and its sculpture garden are among the finest in the country.",
        "Closer to home, the Heard Natural Science Museum in McKinney (35 min) just opened a permanent sculpture trail through its 289-acre preserve — free with park admission on Thursdays.",
        "For architecture fans, a self-guided tour of Sherman's own 1920s commercial district on Travis Street is genuinely worthwhile. The 1923 Grayson County Courthouse is a Beaux-Arts landmark and one of the best-preserved in Texas.",
      ],
    },
    {
      category: "City Life",
      readTime: "4 min",
      initials: "CM",
      author: "Chris Moore",
      date: "Dec 15, 2025",
      title: "Sunset Views: Taylor's Most Instagrammable Spots",
      description:
        "Golden hour meets golden hour — where residents go for the best light in the city.",
      img: "/webp/landscape/6.webp",
      content: [
        "Parks on Taylor sits in a surprisingly photogenic part of Sherman. The flat North Texas landscape combined with the area's wide sky creates golden-hour light that photographers chase from much farther away.",
        "The water tower viewpoint on Mulberry Street (0.4 miles from the community) gives an unobstructed view of the western horizon. Residents regularly gather here on summer evenings — it's become an informal community ritual.",
        "For the Texoma shoreline shot, head to Eisenhower State Park's overlook deck at sunset. The lake reflects pink and gold in a way that photographs deceptively like a coastal sunset.",
        "Closer to home, the poolside at Parks on Taylor itself — facing west — produces some remarkable evening shots, especially in fall when the sky runs orange. Several residents have shared these on community boards and Instagram under #ParksOnTaylor.",
      ],
    },
  ];

  const featuredPost: Post = {
    category: "Local Eats",
    readTime: "4 min",
    initials: "MC",
    author: "Maya Chen",
    date: "Jan 18, 2026",
    title: "The 7 Best Farm-to-Table Spots Near Sherman",
    description:
      "From field to fork — the freshest seasonal menus within a short drive of Taylor Street.",
    img: "/webp/amenities/5.webp",
    content: [
      "Sherman's culinary scene has grown quietly into something special. Within a 20-minute drive of Parks on Taylor, you'll find farm-fresh menus that rival anything in the DFW metroplex.",
      "Leading the pack is The Farmhouse Table on Lamar, which sources all produce from within 50 miles and changes its menu weekly. For breakfast, Blue Yonder Café on Travis Street serves legendary avocado toast and locally roasted coffee.",
      "Grayson County Brewing pairs craft ales with smoked brisket sourced from local Denton County farms — a weekend essential for residents. The Saturday morning Sherman Farmers Market rounds out the scene perfectly, offering direct-from-farm strawberries, peaches, and seasonal vegetables.",
      "Whether you're meal-prepping for the week or celebrating a special evening, Sherman's growing food community makes every meal memorable.",
    ],
  };

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <HeaderOther />
      <section className="bg-[#1f376d] text-white pt-32 pb-24 px-6 md:px-16 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl">
          <p className="text-xs tracking-[0.35em] text-[#E39B2D] mb-6 font-[Plus_Jakarta_Sans]">
            SHERMAN LIVING GUIDE
          </p>

          <h1 className="font-[Instrument_Serif] leading-[1.05] text-[42px] md:text-[80px]">
            Stories from <br />
            <span className="text-[#E39B2D] italic">the Neighborhood</span>
          </h1>

          <p className="mt-8 text-[#bfc6d6] text-base md:text-lg leading-relaxed max-w-2xl font-[Plus_Jakarta_Sans]">
            Local eats, outdoor adventures, community events, and everything in
            between — curated by the Parks on Taylor team.
          </p>
        </div>
      </section>

      {/* FEATURED CARD */}
      <section className="bg-[#f5f2ed] px-6 md:px-16 pb-24 -mt-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border bg-white shadow-sm">
            <div className="relative min-h-[320px]">
              <img
                src={featuredPost.img}
                alt={"Farm-to-table dining near Parks on Taylor apartments in Sherman TX with fresh local ingredients"}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#E39B2D] text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="bg-[#E39B2D]/90 text-white text-xs px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#e7c28d] text-xs font-semibold text-[#E39B2D] bg-[#f4eadc]">
                    {featuredPost.initials}
                  </div>
                  <p className="text-[#6b7280]">
                    {featuredPost.author}
                    <span className="mx-2">·</span>
                    {featuredPost.date}
                  </p>
                </div>

                <h2 className="mt-6 text-2xl md:text-4xl font-[Instrument_Serif] leading-tight text-[#2d3230]">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-[#6b7280] text-base md:text-lg leading-relaxed max-w-xl">
                  {featuredPost.description}
                </p>
              </div>

              <div className="mt-10">
                <p className="text-sm text-[#6b7280] flex items-center gap-2">
                  ⏱ {featuredPost.readTime} read
                </p>

                <button
                  onClick={() => setSelectedPost(featuredPost)}
                  className="mt-4 text-[#1E3872] font-semibold hover:underline flex items-center gap-2"
                >
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-[#f5f2ed] px-6 md:px-16 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-[28px] border border-[#ddd7cf] bg-white shadow-sm"
              >
                <div className="relative">
                  <img
                    src={post.img}
                    alt={`${
                        post.category
                    } in Sherman TX near Parks on Taylor apartments – ${post.title}`}
                    className="w-full h-[250px] object-cover"
                  />

                  <span className="absolute top-4 left-4 rounded-full bg-[#d5cdc2]/90 text-[#1e3872] text-sm font-medium px-4 py-2">
                    {post.category}
                  </span>

                  <span className="absolute top-4 right-4 rounded-full bg-[#444a57]/90 text-white text-sm font-medium px-4 py-2">
                    ◔ {post.readTime}
                  </span>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 text-sm text-[#8a8f98]">
                    <div className="w-8 h-8 rounded-full border border-[#b7bfd0] flex items-center justify-center text-[11px] text-[#1e3872] bg-[#edf1f8]">
                      {post.initials}
                    </div>
                    <p>
                      <span className="text-[#334155] font-medium">
                        {post.author}
                      </span>
                      <span className="mx-2 text-[#b0b4bb]">·</span>
                      {post.date}
                    </p>
                  </div>

                  <h3 className="mt-5 text-[28px] leading-[1.15] text-[#1f2937] font-[Instrument_Serif]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-8 text-[#5f6773]">
                    {post.description}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="mt-6 text-[#1e3a8a] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read Article <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-[999] bg-black/55 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[28px] bg-[#f7f4ef] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/45"
            >
              ✕
            </button>

            <div className="-mt-11">
              <div className="relative h-[260px] md:h-[380px] w-full overflow-hidden">
                <img
                  src={selectedPost.img}
                  alt={`Detailed view of ${selectedPost.title} near Parks on Taylor apartments in Sherman TX`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute left-6 bottom-5">
                  <span className="rounded-full bg-[#E39B2D] text-white text-sm font-medium px-4 py-2">
                    {selectedPost.category}
                  </span>
                </div>
              </div>

              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b8f96]">
                  <div className="w-9 h-9 rounded-full border border-[#e2c592] bg-[#f3e7d4] flex items-center justify-center text-[11px] text-[#d8921f] font-semibold">
                    {selectedPost.initials}
                  </div>
                  <span className="text-[#374151] font-medium">
                    {selectedPost.author}
                  </span>
                  <span>·</span>
                  <span>{selectedPost.date}</span>
                  <span>·</span>
                  <span>{selectedPost.readTime} read</span>
                </div>

                <h2 className="mt-6 text-[34px] md:text-[58px] leading-[1.05] text-[#1f2a37] font-[Instrument_Serif] max-w-4xl">
                  {selectedPost.title}
                </h2>

                <p className="mt-5 text-[20px] md:text-[26px] leading-relaxed italic text-[#667085] max-w-3xl">
                  {selectedPost.description}
                </p>

                <div className="mt-8 w-14 h-[2px] bg-[#E39B2D]" />

                <div className="mt-8 space-y-6">
                  {selectedPost.content.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-[18px] md:text-[20px] leading-[2] text-[#243040]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}