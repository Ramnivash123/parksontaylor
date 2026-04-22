"use client";

import { useState } from "react";

export default function HeaderTop() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="hidden md:flex fixed top-0 left-0 w-full h-7 z-50 bg-[#E09428] text-white items-center justify-center px-3">
      
      {/* Text */}
      <p className="text-xs text-center leading-none font-[Plus_Jakarta_Sans]">
        <span className="font-semibold bg-white/20 px-2 py-[2px] rounded mr-2 font-[Plus_Jakarta_Sans]">
          LOOK & LEASE SPECIAL
        </span>
        Only $99 Total to Move In – Limited Units!
      </p>

      {/* Close Button */}
      <button
        onClick={() => setShow(false)}
        className="absolute right-3 text-white text-sm border border-white rounded px-1.5 hover:bg-white/20 transition"
      >
        ✕
      </button>

    </div>
  );
}