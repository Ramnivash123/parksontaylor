"use client"
import { useState } from "react";
import HeaderOther from "./_components/HeaderOther";




export default function Contact() {
  const [showTopBar, setShowTopBar] = useState(true);
  return (
    <>
      <HeaderOther />
      {/* ===== HERO ===== */}
      <section className="bg-[#1f376d] text-white pt-32 pb-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]  [background-size:18px_18px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.35em] text-[#E39B2D] mb-6 font-[Plus_Jakarta_Sans]">
            GET IN TOUCH
          </p>

          <h1 className="font-[Instrument_Serif] leading-[1.05] text-[42px] md:text-[80px]">
            We'd Love to <br />
            <span className="text-[#E39B2D] italic">Hear From You</span>
          </h1>

          <p className="mt-8 text-[#bfc6d6] text-base md:text-lg leading-relaxed max-w-2xl font-[Plus_Jakarta_Sans]">
            Ready to make Parks on Taylor your home? Our leasing team is
            standing by to answer questions, schedule tours, and walk you
            through the process.
          </p>
        </div>
      </section>

      {/* ===== CONTACT DETAILS + FORM ===== */}
      <section className="bg-[#f5f2ed] px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-[0.95fr_1.35fr] gap-10 md:gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#E39B2D] mb-4 font-semibold">
                ADDRESS
              </p>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#1E3872] text-xl">⌖</div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937]">
                    Parks on Taylor
                  </h3>
                  <p className="mt-2 text-[#4b5563] text-[18px] leading-9">
                    1200 West Taylor Street
                    <br />
                    Sherman, TX 75092
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#E39B2D] mb-4 font-semibold">
                CONTACT
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl border border-[#b9c3d7] bg-[#e8edf7] flex items-center justify-center text-[#1E3872]">
                    ☎
                  </div>
                  <div>
                    <p className="text-sm tracking-wide text-[#6b7280] font-semibold">
                      LEASING OFFICE
                    </p>
                    <p className="text-[#163c84] text-[20px] font-semibold mt-1">
                      (903) 961-6391
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl border border-[#b9c3d7] bg-[#e8edf7] flex items-center justify-center text-[#1E3872]">
                    ✉
                  </div>
                  <div>
                    <p className="text-sm tracking-wide text-[#6b7280] font-semibold">
                      LEASING INQUIRIES
                    </p>
                    <p className="text-[#163c84] text-[20px] font-semibold mt-1 break-all">
                      potmanager@livenjoymgt.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#E39B2D] mb-4 font-semibold">
                OFFICE HOURS
              </p>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl border border-[#b9c3d7] bg-[#e8edf7] flex items-center justify-center text-[#1E3872]">
                  ◔
                </div>

                <div className="w-full max-w-md space-y-2 text-[18px]">
                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Monday – Friday</span>
                    <span className="text-[#163c84] font-semibold">
                      8:30 AM – 5:30 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Saturday</span>
                    <span className="text-[#163c84] font-semibold">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Sunday</span>
                    <span className="text-[#ef4444] font-semibold">Closed</span>
                  </div>

                  <p className="pt-3 text-[#4b5563] text-[17px]">
                    Languages: English & Spanish
                  </p>
                </div>
              </div>
            </div>

            {/* Map box */}
            <div className="rounded-[24px] border border-[#cfd6e2] overflow-hidden bg-white">
              <div className="h-[320px] bg-[#eef1f7] relative">
                <div className="absolute inset-0 opacity-70">
                  <div className="grid grid-cols-4 gap-4 p-4 h-full">
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                    <div className="bg-[#e5e7eb] rounded-md" />
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#E39B2D] border-4 border-white shadow" />
                    <div className="mt-2 bg-[#1E3872] text-white text-sm font-semibold px-5 py-2 rounded-md whitespace-nowrap">
                      PARKS ON TAYLOR
                    </div>
                    <div className="text-[#5a78b7] text-sm mt-1 whitespace-nowrap">
                      W TAYLOR STREET
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 text-[#4b5563] text-[16px]">
                ⌖ 1200 W Taylor Street · Sherman, TX 75092
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#334155] mb-5 font-semibold">
                FOLLOW ALONG
              </p>

              <div className="flex gap-3">
                {["◎", "f", "𝕏"].map((item, index) => (
                  <button
                    key={index}
                    className="h-12 w-12 rounded-xl border border-[#c6d0e0] bg-[#edf2fb] text-[#1E3872] text-lg flex items-center justify-center"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-[30px] bg-white border border-[#e4e1db] overflow-hidden shadow-sm">
            <div className="h-1 w-full bg-gradient-to-r from-[#1E3872] to-[#E39B2D]" />

            <div className="p-6 md:p-10">
              <h2 className="font-[Instrument_Serif] text-[34px] md:text-[46px] text-[#1f2937] leading-none">
                Send Us a Message
              </h2>

              <p className="mt-4 text-[#4b5563] text-[18px] leading-relaxed max-w-2xl">
                Questions about availability, pricing, or scheduling a tour?
                We're here to help.
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-[#4b5563] mb-3">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full rounded-2xl border border-[#cfd6e2] px-5 py-4 text-[18px] outline-none focus:border-[#1E3872]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-[#4b5563] mb-3">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@email.com"
                      className="w-full rounded-2xl border border-[#cfd6e2] px-5 py-4 text-[18px] outline-none focus:border-[#1E3872]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-[#4b5563] mb-3">
                      PHONE NUMBER
                    </label>
                    <input
                      type="text"
                      placeholder="(555) 000-0000"
                      className="w-full rounded-2xl border border-[#cfd6e2] px-5 py-4 text-[18px] outline-none focus:border-[#1E3872]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-[#4b5563] mb-3">
                      SUBJECT
                    </label>
                    <select className="w-full rounded-2xl border border-[#cfd6e2] px-5 py-4 text-[18px] outline-none focus:border-[#1E3872] bg-white">
                      <option>Select a topic...</option>
                      <option>Schedule a Tour</option>
                      <option>Pricing & Availability</option>
                      <option>Application Help</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold tracking-wide text-[#4b5563] mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us what you're looking for..."
                    className="w-full rounded-2xl border border-[#cfd6e2] px-5 py-4 text-[18px] outline-none focus:border-[#1E3872] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#b7bfd0] text-white text-[20px] md:text-[22px] font-semibold py-5 hover:bg-[#a8b2c7] transition"
                >
                  → Submit Message
                </button>

                <p className="text-center text-[#9aa3b2] text-sm md:text-base">
                  We respond to all inquiries within 1 business day. · (903)
                  961-6391
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFER CTA ===== */}
      <section className="bg-[#f5f2ed] px-6 md:px-12 pb-14 md:pb-20">
        <div className="max-w-[1600px] mx-auto rounded-[28px] bg-[#db8d1f] px-6 md:px-12 py-8 md:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-sm">
          <div>
            <p className="text-xs tracking-[0.3em] text-white/90 mb-4 font-semibold">
              LIMITED TIME OFFER
            </p>

            <h2 className="font-[Instrument_Serif] text-white text-[40px] md:text-[64px] leading-none">
              Look & Lease Special
            </h2>

            <p className="mt-5 text-white text-[20px] md:text-[22px] leading-relaxed">
              Only <span className="font-bold">$99 total to move in</span> —
              limited units available. Contact us today!
            </p>
          </div>

          <div className="shrink-0">
            <button className="bg-[#1E3872] text-white text-[20px] md:text-[22px] font-semibold rounded-full px-10 md:px-12 py-5 shadow-[0_14px_34px_rgba(30,56,114,0.35)] hover:bg-[#193164] transition whitespace-nowrap">
              Call Now: (903) 961-6391
            </button>
          </div>
        </div>
      </section>
    </>
  );
}