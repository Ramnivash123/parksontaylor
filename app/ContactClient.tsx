"use client";

import HeaderOther from "./_components/HeaderOther";

export default function Contact() {
  return (
    <>
      <HeaderOther />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#1f376d] px-6 pt-32 pb-24 text-white md:px-16">
        <div className="relative z-10 max-w-4xl">
          <p className="mb-6 font-[Plus_Jakarta_Sans] text-xs tracking-[0.35em] text-[#E39B2D]">
            GET IN TOUCH
          </p>

          <h1 className="font-[Instrument_Serif] text-[42px] leading-[1.05] md:text-[80px]">
            We'd Love to <br />
            <span className="italic text-[#E39B2D]">Hear From You</span>
          </h1>

          <p className="mt-8 max-w-2xl font-[Plus_Jakarta_Sans] text-base leading-relaxed text-[#bfc6d6] md:text-lg">
            Ready to make Parks on Taylor your home? Our leasing team is
            standing by to answer questions, schedule tours, and walk you
            through the process.
          </p>
        </div>
      </section>

      {/* ===== CONTACT DETAILS + FORM ===== */}
      <section className="bg-[#f5f2ed] px-6 py-12 font-[Plus_Jakarta_Sans] md:px-16 md:py-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 xl:grid-cols-[0.9fr_1.25fr] xl:gap-12">
          {/* LEFT */}
          <div className="space-y-10">
            {/* ADDRESS */}
            <div>
              <p className="mb-4 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                ADDRESS
              </p>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-xl text-[#1E3872]">⌖</div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#1f2937]">
                    Parks on Taylor
                  </h3>

                  <p className="mt-1 text-[16px] leading-[1.6] text-[#4b5563]">
                    1200 West Taylor Street
                    <br />
                    Sherman, TX 75092
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-4 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                CONTACT
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd6e2] bg-[#eef2f8] text-sm text-[#1E3872]">
                    ☎
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-[#6b7280]">
                      LEASING OFFICE
                    </p>
                    <a href="tel:+19039616391">
                      <p className="mt-1 text-[17px] font-semibold text-[#163c84] hover:underline cursor-pointer">
                        (903) 961-6391
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd6e2] bg-[#eef2f8] text-sm text-[#1E3872]">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-[#6b7280]">
                      LEASING INQUIRIES
                    </p>
                    <a href="mailto:potmanager@livenjoymgt.com">
                      <p className="mt-1 break-all text-[17px] font-semibold text-[#163c84]">
                        potmanager@livenjoymgt.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* OFFICE HOURS */}
            <div>
              <p className="mb-4 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                OFFICE HOURS
              </p>

              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd6e2] bg-[#eef2f8] text-sm text-[#1E3872]">
                  ◔
                </div>

                <div className="w-full max-w-md space-y-1.5 text-[16px]">
                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-[#163c84]">
                      8:30 AM – 5:30 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Saturday</span>
                    <span className="font-semibold text-[#163c84]">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Sunday</span>
                    <span className="font-semibold text-[#ef4444]">
                      Closed
                    </span>
                  </div>

                  <p className="pt-2 text-[15px] text-[#4b5563]">
                    Languages: English & Spanish
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[24px] border border-[#cfd6e2] bg-white">
              <div className="relative h-[260px] bg-[#eef1f7]">
                <div className="absolute inset-0 opacity-70">
                  <div className="grid h-full grid-cols-4 gap-4 p-4">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div
                        key={index}
                        className="rounded-md bg-[#e5e7eb]"
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="mx-auto h-5 w-5 rounded-full border-4 border-white bg-[#E39B2D] shadow" />

                  <div className="mt-2 rounded-md bg-[#1E3872] px-5 py-2 text-sm font-semibold text-white">
                    PARKS ON TAYLOR
                  </div>

                  <div className="mt-1 text-[13px] text-[#5a78b7]">
                    W TAYLOR STREET
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 text-[14px] text-[#4b5563]">
                ⌖ 1200 W Taylor Street · Sherman, TX 75092
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="mb-5 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#334155]">
                FOLLOW ALONG
              </p>

              <div className="flex gap-3">
                {["◎", "f", "𝕏"].map((item, index) => (
                  <button
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c6d0e0] bg-[#edf2fb] text-sm text-[#1E3872]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="overflow-hidden rounded-[26px] border border-[#e4e1db] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="h-1 w-full bg-gradient-to-r from-[#1E3872] to-[#E39B2D]" />

            <div className="p-6 md:p-10">
              <h2 className="font-[Instrument_Serif] text-[30px] leading-[1.1] text-[#1f2937] md:text-[40px]">
                Send Us a Message
              </h2>

              <p className="mt-3 max-w-xl text-[16px] leading-[1.6] text-[#4b5563]">
                Questions about availability, pricing, or scheduling a tour?
                We're here to help.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@email.com"
                      className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      PHONE NUMBER
                    </label>
                    <input
                      type="text"
                      placeholder="(555) 000-0000"
                      className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      SUBJECT
                    </label>
                    <select className="w-full rounded-xl border border-[#cfd6e2] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]">
                      <option>Select a topic...</option>
                      <option>Schedule a Tour</option>
                      <option>Pricing & Availability</option>
                      <option>Application Help</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-none rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#b7bfd0] py-4 text-[17px] font-semibold text-white transition hover:bg-[#a8b2c7]"
                >
                  → Submit Message
                </button>

                <p className="mt-2 text-center text-[13px] text-[#9aa3b2]">
                  We respond to all inquiries within 1 business day. · (903)
                  961-6391
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFER CTA ===== */}
      <section className="bg-[#f5f2ed] px-6 pb-14 md:px-12 md:pb-20">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 rounded-[26px] bg-[#db8d1f] px-8 py-7 md:px-12 md:py-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/90">
              LIMITED TIME OFFER
            </p>

            <h2 className="font-[Instrument_Serif] text-[36px] leading-none text-white md:text-[52px]">
              Look & Lease Special
            </h2>

            <p className="font-[Plus_Jakarta_Sans] mt-3 text-[17px] text-white md:text-[18px]">
              Only <span className="font-bold">$99 total to move in</span> —
              limited units available. Contact us today!
            </p>
          </div>

          <a href="tel:+19039616391">
            <p className="font-[Plus_Jakarta_Sans] whitespace-nowrap rounded-full bg-[#1E3872] px-8 py-3 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(30,56,114,0.35)] transition hover:bg-[#193164] md:text-[18px]">
              Call Now: (903) 961-6391
            </p>
          </a>
        </div>
      </section>
    </>
  );
}