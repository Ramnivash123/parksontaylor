export default function Footer(){
    return (
        <>
        <section className="bg-[#071a33] px-6 md:px-12 py-16 md:py-20 text-white">

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-10">

          {/* LEFT INFO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1e3a6d] rounded-xl flex items-center justify-center">
                🏠
              </div>
              <div>
                <h3 className="font-serif text-lg">Parks on Taylor</h3>
                <p className="text-xs text-[#7b8aa0] font-[Plus_Jakarta_Sans]">A Livenjoy Community</p>
              </div>
            </div>

            <p className="text-sm text-[#9aa3af] leading-relaxed mb-6 font-[Plus_Jakarta_Sans]">
              Affordable, safe, and clean living at the intersection of comfort and community — 
              in the heart of Sherman, TX.
            </p>

            <div className="space-y-3 text-sm text-[#9aa3af] font-[Plus_Jakarta_Sans]">
              <p>📍 1200 West Taylor Street, Sherman, TX 75092</p>
              <p>📞 (903) 961–6391</p>
              <p>✉️ potmanager@livenjoymgt.com</p>
              <p>⏱ Mon–Fri 8:30–5:30 · Sat 10–4</p>
            </div>

            <button className="mt-6 border border-white/20 px-5 py-3 rounded-full text-sm hover:bg-white/10 font-[Plus_Jakarta_Sans]">
              Schedule a Private Tour →
            </button>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-sm tracking-widest text-[#E09428] mb-4">EXPLORE</h4>
            <ul className="space-y-3 text-[#9aa3af] text-sm font-[Plus_Jakarta_Sans]">
              <li><a href="/floor">Floor Plans</a></li>
              <li><a href="/#amenities">Amenities</a></li>
              <li>
                <a href="https://livenjoy.myresman.com/Portal/Access/SignIn/POTS" target="_blank">
                  Community & Events
                </a>
              </li>
              <li><a href="/#neighborhood">Neighborhood</a></li>
              <li><a href="/#units">Virtual Tour</a></li>
              <li><a href="/gallery">Photo Gallery</a></li>
            </ul>
          </div>

          {/* LEASING */}
          <div>
            <h4 className="text-sm tracking-widest text-[#E09428] mb-4">LEASING</h4>
            <ul className="space-y-3 text-[#9aa3af] text-sm font-[Plus_Jakarta_Sans]">
              <li>
                <a href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588" target="_blank">
                  Apply Online
                </a>
              </li>
              <li><a href="/#units">Schedule a Tour</a></li>
              <li><a href="/#look">Look & Lease Specials</a></li>
              <li><a href="/#units">Availability</a></li>
              <li><a href="/#amenities">Pet Policy</a></li>
              <li><a href="/#look">FAQs</a></li>
            </ul>
          </div>

          {/* IMAGE (REPLACED MAP) */}
          <div>
            <h4 className="text-sm tracking-widest text-[#E09428] mb-4 font-[Plus_Jakarta_Sans]">LOCATION</h4>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#f3efe8] h-[180px] relative">

              {/* MINI MAP BACKGROUND */}
              <div className="absolute inset-0">

                {/* grid lines */}
                <div className="absolute left-[20%] top-0 h-full w-[2px] bg-[#d7d1c7]" />
                <div className="absolute left-[40%] top-0 h-full w-[2px] bg-[#d7d1c7]" />
                <div className="absolute left-[65%] top-0 h-full w-[3px] bg-[#d7d1c7]" />

                <div className="absolute top-[30%] left-0 w-full h-[3px] bg-[#d7d1c7]" />
                <div className="absolute top-[55%] left-0 w-full h-[3px] bg-[#d7d1c7]" />
                <div className="absolute top-[75%] left-0 w-full h-[4px] bg-[#d7d1c7]" />

                {/* blocks */}
                <div className="absolute left-[10%] top-[15%] w-[15%] h-[10%] bg-[#ddd7cf] rounded" />
                <div className="absolute left-[30%] top-[15%] w-[18%] h-[10%] bg-[#e5e0d9] rounded" />
                <div className="absolute left-[55%] top-[15%] w-[12%] h-[10%] bg-[#e5e0d9] rounded" />

                {/* highlight zones */}
                <div className="absolute left-[30%] top-[50%] w-[18%] h-[20%] bg-[#d9ecff] border border-[#8ab4f8] rounded-lg" />
                <div className="absolute left-[55%] top-[48%] w-[18%] h-[20%] bg-[#dfe4e9] border border-[#b8c1cb] rounded-lg" />

              </div>

              {/* MAIN PIN */}
              <div className="absolute top-[45%] left-[35%] -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#1e3872] rounded-full flex items-center justify-center shadow">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-2.5 h-2.5 bg-[#1e3872] rotate-45 -mt-1"></div>
                </div>
              </div>

              {/* SECOND PIN */}
              <div className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-[#4da3ff] rounded-full flex items-center justify-center shadow">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-2 h-2 bg-[#4da3ff] rotate-45 -mt-1"></div>
                </div>
              </div>

              {/* SMALL SCALE */}
              <div className="absolute bottom-2 left-2 text-[8px] text-[#5a6260]">
                <div className="flex mb-[2px]">
                  <div className="w-6 h-[3px] bg-[#1e3872]" />
                  <div className="w-4 h-[3px] bg-[#c8d0db]" />
                </div>
                <div className="flex gap-2">
                  <span>0</span>
                  <span>1 mi</span>
                </div>
              </div>

            </div>

            <div className="mt-4 text-sm text-[#9aa3af] space-y-2">
              <div className="flex justify-between font-[Plus_Jakarta_Sans]">
                <span>Downtown Sherman</span>
                <span className="text-blue-400">0.4 mi</span>
              </div>
              <div className="flex justify-between font-[Plus_Jakarta_Sans]">
                <span>Austin–Bergstrom Intl</span>
                <span className="text-blue-400">28 mi</span>
              </div>
              <div className="flex justify-between font-[Plus_Jakarta_Sans]">
                <span>Round Rock</span>
                <span className="text-blue-400">22 mi</span>
              </div>
            </div>
          </div>

        </div>

      </section>
      </>
    )
}

