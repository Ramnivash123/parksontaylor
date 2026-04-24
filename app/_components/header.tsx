"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  showTopBar: boolean;
};

export default function Header({ showTopBar }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Floor Plans", href: "/floor" },
    { label: "Gallery", href: "/gallery" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Neighborhood", href: "/#neighborhood" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    {
      label: "Residents",
      href: "https://livenjoy.myresman.com/Portal/Access/SignIn/POTS",
      external: true,
    },
  ];

  return (
    <header
      className={`fixed left-0 z-40 w-full transition-all duration-300 ${
        showTopBar ? "top-0 md:top-10" : "top-0"
      }`}
    >
      <div className="flex w-full items-center justify-between bg-white/75 px-4 py-3 shadow-sm backdrop-blur-md md:px-8 lg:px-12">
        {/* LOGO */}
        <div className="min-w-0">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block truncate font-[Instrument_Serif] text-[22px] leading-none text-[#2d3230] sm:text-2xl"
          >
            Parks on Taylor
          </Link>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="mt-1 block max-w-[185px] truncate font-[Plus_Jakarta_Sans] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#5a6260] sm:max-w-none sm:text-[11px]"
          >
            Sherman, TX · A LiveNJoy Community
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-5 font-[Plus_Jakarta_Sans] text-[13px] font-medium text-[#2d3230] lg:flex xl:gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap transition hover:text-[#1e3872]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition hover:text-[#1e3872]"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden whitespace-nowrap rounded-full bg-[#1e3872] px-6 py-2.5 font-[Plus_Jakarta_Sans] text-sm font-semibold text-white transition hover:bg-[#15306a] lg:inline-flex"
        >
          Apply Now →
        </a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8d1c8] bg-white text-[#2d3230] shadow-sm lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-[#2d3230] transition-all ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-[#2d3230] transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-[#2d3230] transition-all ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-[#ded8cf] bg-[#f5f2ed] px-4 py-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-2 font-[Plus_Jakarta_Sans]">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-[#2d3230] transition hover:bg-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-[#2d3230] transition hover:bg-white"
                >
                  {link.label}
                </Link>
              )
            )}

            <a
              href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[#1e3872] px-5 py-4 text-center text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(30,56,114,0.22)]"
            >
              Apply Now →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}