"use client";

type HeaderTopProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderTop({ show, setShow }: HeaderTopProps) {
  if (!show) return null;

  return (
    <div className="hidden md:flex w-full h-7 bg-[#E09428] text-white items-center justify-center px-3 relative z-50">
      <p className="text-xs text-center leading-none font-[Plus_Jakarta_Sans]">
        <span className="font-semibold bg-white/20 px-2 py-[2px] rounded mr-2">
          LOOK & LEASE SPECIAL
        </span>
        Only $99 Total to Move In – Limited Units!
      </p>

      <button
        onClick={() => setShow(false)}
        className="absolute right-3 text-white text-sm border border-white rounded px-1.5 hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>
  );
}