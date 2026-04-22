"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-4 bg-white/60 backdrop-blur-md flex items-center justify-between font-sans">
      
      {/* LEFT */}
      <div className="flex flex-col">
        <Link className="text-xl text-[#2d3230] font-serif" href={"/"}>Parks on Taylor</Link>
        <Link className="text-xs text-[#5a6260] tracking-wide font-[Plus_Jakarta_Sans]" href={"/"}>
          SHERMAN, TX · A LIVENJOY COMMUNITY
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex gap-8 text-sm text-[#2d3230] font-[Plus_Jakarta_Sans]">
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/floor">Floor Plans</Link>
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/gallery">Gallery</Link>
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/#">Amenities</Link>
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/#">Neighborhood</Link>
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/blog">Blog</Link>
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/contact">Contact</Link>
        <Link className="whitespace-nowrap hover:text-[#1e3872]" href="/https://livenjoy.myresman.com/Portal/Access/SignIn/POTS">Residents</Link>
      </nav>

      {/* RIGHT BUTTON (desktop only) */}
      <div className="hidden md:flex">
        <a className="bg-[#1e3872] text-white px-6 py-2 rounded-full" href="/https://livenjoy.myresman.com/Portal/Access/ApplicantRegistration?accountID=1588&propertyID=5e489ec3-e648-4775-9a6f-d94041b17010&redirectUrl=https%3A%2F%2Flivenjoy.myresman.com%2FPortal%2FApplicants%2FContinue%3FaccountID%3D1588%26propertyID%3D5e489ec3-e648-4775-9a6f-d94041b17010%26unitID%3D8166ba63-9e6c-465b-834e-7da7b21437a0%26coldApplicant%3DFalseRegistration">
          Apply Now →
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-black text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE MENU (VERTICAL) */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#efece8] shadow-md flex flex-col py-6 gap-4 md:hidden font-[Plus_Jakarta_Sans]">
          <a className="ml-6 text-[#2d3230]" href="/floor">Floor Plans</a>
          <a className="ml-6 text-[#2d3230]" href="/gallery">Gallery</a>
          <a className="ml-6 text-[#2d3230]" href="#">Amenities</a>
          <a className="ml-6 text-[#2d3230]" href="#">Neighborhood</a>
          <a className="ml-6 text-[#2d3230]" href="/blog">Blog</a>
          <a className="ml-6 text-[#2d3230]" href="/contact">Contact</a>
          <a className="ml-6 text-[#2d3230]" href="/https://livenjoy.myresman.com/Portal/Access/SignIn/POTS">Residents</a>

          <a className="bg-[#1e3872] text-white py-3 rounded-full mt-2 mx-6 text-center font-[Plus_Jakarta_Sans]" href="/https://livenjoy.myresman.com/Portal/Access/ApplicantRegistration?accountID=1588&propertyID=5e489ec3-e648-4775-9a6f-d94041b17010&redirectUrl=https%3A%2F%2Flivenjoy.myresman.com%2FPortal%2FApplicants%2FContinue%3FaccountID%3D1588%26propertyID%3D5e489ec3-e648-4775-9a6f-d94041b17010%26unitID%3D8166ba63-9e6c-465b-834e-7da7b21437a0%26coldApplicant%3DFalseRegistration">
            Apply Now →
          </a>
        </div>
      )}
    </header>
  );
}