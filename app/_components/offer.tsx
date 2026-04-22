"use client";
import React, { useState } from "react";
import { X, Tag, Sparkles, ArrowRight } from "lucide-react";

const Offer = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div
      className="
        fixed bottom-3 left-3 z-50
        w-[260px] max-w-[calc(100vw-24px)]
        overflow-hidden rounded-[18px]
        border border-[#d9d3cb] bg-white shadow-xl

        sm:bottom-4 sm:left-4
        sm:w-[300px] sm:rounded-2xl
      "
    >
      {/* HEADER */}
      <div className="relative bg-[#173a7a] px-3 pt-3 pb-3.5 text-white sm:px-4 sm:pt-3 sm:pb-4">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 sm:h-7 sm:w-7"
          aria-label="Close offer popup"
        >
          <X size={13} className="sm:hidden" />
          <X size={14} className="hidden sm:block" />
        </button>

        <div className="flex items-start gap-2 pr-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d9921e] sm:h-9 sm:w-9 sm:rounded-xl">
            <Tag size={14} className="text-white sm:hidden" />
            <Tag size={16} className="hidden text-white sm:block" />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#d7a03a] sm:text-[10px] sm:tracking-[0.15em]">
              Limited Time
            </p>
            <h3 className="font-serif text-[18px] leading-[1.1] sm:text-[20px]">
              First Month Free
            </h3>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="bg-[#f7f4ef] px-2.5 pt-2.5 pb-3 sm:px-3 sm:pt-3 sm:pb-4">
        {/* Card 1 */}
        <div className="mb-2.5 rounded-lg border border-[#e3c79a] bg-[#f1e7d8] p-2.5 sm:mb-3 sm:rounded-xl sm:p-3">
          <div className="flex gap-2">
            <Sparkles size={13} className="mt-0.5 text-[#d9921e] sm:hidden" />
            <Sparkles size={14} className="mt-1 hidden text-[#d9921e] sm:block" />
            <div>
              <h4 className="text-[12px] font-semibold text-[#d9921e] sm:text-[13px]">
                Look & Lease Special
              </h4>
              <p className="text-[12px] leading-5 text-[#5c5c5c] sm:text-[13px]">
                Only <span className="font-bold text-[#2b2b2b]">$99 total</span> to move in
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mb-2.5 rounded-lg border border-[#d4d7df] bg-[#eceef3] p-2.5 sm:mb-3 sm:rounded-xl sm:p-3">
          <div className="flex gap-2">
            <Sparkles size={13} className="mt-0.5 text-[#173a7a] sm:hidden" />
            <Sparkles size={14} className="mt-1 hidden text-[#173a7a] sm:block" />
            <div>
              <h4 className="text-[12px] font-semibold text-[#173a7a] sm:text-[13px]">
                First Month Free
              </h4>
              <p className="text-[12px] leading-5 text-[#5c5c5c] sm:text-[13px]">
                Apply before <span className="font-bold">April 30</span>
              </p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button className="flex w-full items-center justify-center gap-1 rounded-lg bg-[#173a7a] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#14346e] sm:rounded-xl sm:py-3 sm:text-[14px]">
          Apply Now <ArrowRight size={15} className="sm:hidden" />
          <ArrowRight size={16} className="hidden sm:block" />
        </button>

        {/* CONTACT */}
        <p className="mt-2.5 text-center text-[11px] text-[#9a9a9a] sm:mt-3 sm:text-[12px]">
          Call us:{" "}
          <a href="tel:9039616391" className="font-semibold text-[#173a7a]">
            (903) 961-6391
          </a>
        </p>
      </div>
    </div>
  );
};

export default Offer;