"use client";
import React from 'react'
import { useState } from "react";
import { X, Tag, Sparkles, ArrowRight } from "lucide-react";


const Offer = () => {
    const [open, setOpen] = useState(true);
    if (!open) return null;
    return (
        <div className="fixed bottom-4 left-4 z-50 w-[300px] max-w-[calc(100vw-16px)] rounded-2xl overflow-hidden bg-white shadow-xl border border-[#d9d3cb]">
      
            {/* HEADER */}
            <div className="relative bg-[#173a7a] px-4 pt-3 pb-4 text-white">
                <button
                onClick={() => setOpen(false)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                >
                <X size={14} />
                </button>

                <div className="flex items-start gap-2 pr-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d9921e]">
                    <Tag size={16} className="text-white" />
                </div>

                <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#d7a03a] font-semibold">
                    Limited Time
                    </p>
                    <h3 className="text-[20px] leading-[1.1] font-serif">
                    First Month Free
                    </h3>
                </div>
                </div>
            </div>

            {/* BODY */}
            <div className="bg-[#f7f4ef] px-3 pt-3 pb-4">
                
                {/* Card 1 */}
                <div className="mb-3 rounded-xl border border-[#e3c79a] bg-[#f1e7d8] p-3">
                <div className="flex gap-2">
                    <Sparkles size={14} className="mt-1 text-[#d9921e]" />
                    <div>
                    <h4 className="text-[13px] font-semibold text-[#d9921e]">
                        Look & Lease Special
                    </h4>
                    <p className="text-[13px] text-[#5c5c5c] leading-5">
                        Only <span className="font-bold text-[#2b2b2b]">$99 total</span> to move in
                    </p>
                    </div>
                </div>
                </div>

                {/* Card 2 */}
                <div className="mb-3 rounded-xl border border-[#d4d7df] bg-[#eceef3] p-3">
                <div className="flex gap-2">
                    <Sparkles size={14} className="mt-1 text-[#173a7a]" />
                    <div>
                    <h4 className="text-[13px] font-semibold text-[#173a7a]">
                        First Month Free
                    </h4>
                    <p className="text-[13px] text-[#5c5c5c] leading-5">
                        Apply before <span className="font-bold">April 30</span>
                    </p>
                    </div>
                </div>
                </div>

                {/* BUTTON */}
                <button className="flex w-full items-center justify-center gap-1 rounded-xl bg-[#173a7a] py-3 text-[14px] font-semibold text-white hover:bg-[#14346e] transition">
                Apply Now <ArrowRight size={16} />
                </button>

                {/* CONTACT */}
                <p className="mt-3 text-center text-[12px] text-[#9a9a9a]">
                Call us:{" "}
                <a href="tel:9039616391" className="font-semibold text-[#173a7a]">
                    (903) 961-6391
                </a>
                </p>
            </div>
        </div>
    )
}

export default Offer