"use client";

import type { Dispatch, SetStateAction } from "react";

type HeaderTopProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderTop({ show, setShow }: HeaderTopProps) {
  if (!show) return null;

  return (
    <div className="fixed left-0 top-0 z-50 hidden h-10 w-full items-center justify-center bg-[#E09428] px-10 text-white md:flex">
      <p className="font-[Plus_Jakarta_Sans] text-center text-[12px] font-medium leading-none">
        <span className="mr-2 rounded bg-white/20 px-2 py-[3px] font-bold">
          LOOK &amp; LEASE SPECIAL
        </span>
        Only $99 Total to Move In – Limited Units!
      </p>

      <button
        type="button"
        onClick={() => setShow(false)}
        aria-label="Close announcement bar"
        className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-[12px] text-white transition hover:bg-white/20"
      >
        ✕
      </button>
    </div>
  );
}