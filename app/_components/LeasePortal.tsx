"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Building2,
  PawPrint,
  ChevronDown,
  Search,
  CircleCheck,
} from "lucide-react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type Unit = {
  code: string;
  label: string;
  area: string;
  price: string;
  beds: 1 | 2;
};

const units: Unit[] = [
  { code: "A1", label: "1 BR · 1 BA", area: "625 sq ft", price: "$799/mo", beds: 1 },
  { code: "A2", label: "1 BR · 1 BA", area: "724 sq ft", price: "$849/mo", beds: 1 },
  { code: "A3", label: "1 BR · 1 BA", area: "724 sq ft", price: "$849/mo", beds: 1 },
  { code: "B1", label: "2 BR · 1 BA", area: "850 sq ft", price: "$999/mo", beds: 2 },
  { code: "B2", label: "2 BR · 1.5 BA", area: "886 sq ft", price: "$1,049/mo", beds: 2 },
  { code: "B3", label: "2 BR · 2 BA", area: "1,003 sq ft", price: "$1,099/mo", beds: 2 },
];

type UnitTab = "all" | "1bed" | "2bed";

export default function LeasePortal() {
  const [hasPets, setHasPets] = useState(false);
  const [checked, setChecked] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showUnitPicker, setShowUnitPicker] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(3);
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [unitTab, setUnitTab] = useState<UnitTab>("all");
  const [selectedUnit, setSelectedUnit] = useState<string>("All Units");

  const today = new Date(2026, 3, 23);

  const monthLabel = `${monthNames[currentMonth]} ${currentYear}`;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const leadingEmptyDays = new Date(currentYear, currentMonth, 1).getDay();

  const days = useMemo(
    () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
    [daysInMonth]
  );

  const filteredUnits = useMemo(() => {
    if (unitTab === "1bed") return units.filter((u) => u.beds === 1);
    if (unitTab === "2bed") return units.filter((u) => u.beds === 2);
    return units;
  }, [unitTab]);

  const isPastDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === currentYear &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getDate() === day
    );
  };

  const handleSelectDate = (day: number) => {
    if (isPastDate(day)) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setShowDatePicker(false);
  };

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const formattedSelectedDate = selectedDate
    ? `${monthNames[selectedDate.getMonth()].slice(0, 3)} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : "Select a date";

  const unitCountLabel =
    unitTab === "all" ? units.length : unitTab === "1bed" ? 3 : 3;

  return (
    <>
      <div className="relative flex items-stretch overflow-visible rounded-[20px] border border-[rgba(30,56,114,0.18)] bg-[rgba(245,242,237,0.97)] backdrop-blur-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.3),0_8px_24px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]">
        {/* Move-in Date */}
        <div className="relative flex-1 min-w-[180px] border-r border-[rgba(30,56,114,0.1)] px-6 py-[18px]">
          <button
            type="button"
            onClick={() => {
              setShowDatePicker((prev) => !prev);
              setShowUnitPicker(false);
            }}
            className="w-full text-left"
          >
            <div className="mb-1 flex items-center gap-1 font-[Plus_Jakarta_Sans] text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6260]">
              <CalendarDays size={11} className="text-[#1e3872]" />
              Move-in Date
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="truncate whitespace-nowrap font-[Instrument_Serif] text-[17px] tracking-[-0.015em] text-[rgba(45,50,48,0.72)]">
                {formattedSelectedDate}
              </span>
              <ChevronDown
                size={13}
                className={`shrink-0 text-[#5a6260] transition-transform duration-200 ${
                  showDatePicker ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {showDatePicker && (
            <div className="absolute left-0 top-[calc(100%+10px)] z-[200] w-[300px] animate-[lp-rise_0.18s_ease] rounded-[18px] border border-[rgba(30,56,114,0.14)] bg-[rgb(250,250,248)] p-4 shadow-[0_24px_72px_rgba(0,0,0,0.22),0_4px_16px_rgba(0,0,0,0.1)]">
              <div className="mb-[14px] flex items-center justify-between">
                <button
                  type="button"
                  onClick={goPrevMonth}
                  className="flex items-center rounded-[8px] p-1 text-[#5a6260] hover:bg-black/5"
                >
                  <ChevronDown size={15} className="rotate-90" />
                </button>

                <span className="font-[Instrument_Serif] text-[15px] tracking-[-0.01em] text-[#2d3230]">
                  {monthLabel}
                </span>

                <button
                  type="button"
                  onClick={goNextMonth}
                  className="flex items-center rounded-[8px] p-1 text-[#5a6260] hover:bg-black/5"
                >
                  <ChevronDown size={15} className="-rotate-90" />
                </button>
              </div>

              <div className="mb-[6px] grid grid-cols-7">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="py-[6px] text-center font-[Plus_Jakarta_Sans] text-[10px] font-bold tracking-[0.08em] text-[#5a6260]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-[2px]">
                {Array.from({ length: leadingEmptyDays }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {days.map((day) => {
                  const disabled = isPastDate(day);
                  const selected = isSelectedDate(day);

                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={disabled}
                      onClick={() => handleSelectDate(day)}
                      className={`flex aspect-square items-center justify-center rounded-[8px] border-[1.5px] font-[Plus_Jakarta_Sans] text-[12px] transition ${
                        selected
                          ? "border-[#1e3872] bg-transparent font-semibold text-[#2d3230]"
                          : disabled
                          ? "cursor-default border-transparent bg-transparent font-normal text-[rgba(45,50,48,0.22)]"
                          : "cursor-pointer border-transparent bg-transparent font-normal text-[#2d3230] hover:border-[#1e3872]/30 hover:bg-[#1e3872]/5"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Unit Type */}
        <div className="relative min-w-[220px] border-r border-[rgba(30,56,114,0.1)] px-6 py-[18px]">
          <button
            type="button"
            onClick={() => {
              setShowUnitPicker((prev) => !prev);
              setShowDatePicker(false);
            }}
            className="w-full text-left"
          >
            <div className="mb-1 flex items-center gap-1 font-[Plus_Jakarta_Sans] text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6260]">
              <Building2 size={11} className="text-[#1e3872]" />
              Unit Type
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="truncate whitespace-nowrap font-[Instrument_Serif] text-[17px] tracking-[-0.015em] text-[#2d3230]">
                {selectedUnit}
              </span>

              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-[#1e3872]/10 px-2 py-[2px] text-[10px] font-bold tracking-[0.04em] text-[#1e3872]">
                  {unitCountLabel} available
                </span>
                <ChevronDown
                  size={13}
                  className={`text-[#5a6260] transition-transform duration-200 ${
                    showUnitPicker ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </button>

          {showUnitPicker && (
            <div className="absolute left-0 top-[calc(100%+10px)] z-[200] w-[420px] animate-[lp-rise_0.18s_ease] overflow-hidden rounded-[18px] border border-[rgba(30,56,114,0.14)] bg-[rgb(250,250,248)] shadow-[0_24px_72px_rgba(0,0,0,0.22),0_4px_16px_rgba(0,0,0,0.1)]">
              <div className="flex border-b border-[rgba(30,56,114,0.09)] px-4 pt-3">
                <button
                  type="button"
                  onClick={() => setUnitTab("all")}
                  className={`flex-1 border-b-2 px-1 py-[10px] text-[12px] tracking-[0.01em] ${
                    unitTab === "all"
                      ? "border-[#1e3872] font-bold text-[#1e3872]"
                      : "border-transparent font-medium text-[#5a6260]"
                  }`}
                >
                  All Units
                  <span
                    className={`ml-1.5 rounded-full px-1.5 py-[1px] text-[10px] font-semibold ${
                      unitTab === "all"
                        ? "bg-[#1e3872]/10 text-[#1e3872]"
                        : "bg-[rgba(45,50,48,0.06)] text-[rgba(90,98,96,0.55)]"
                    }`}
                  >
                    6
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setUnitTab("1bed")}
                  className={`flex-1 border-b-2 px-1 py-[10px] text-[12px] tracking-[0.01em] ${
                    unitTab === "1bed"
                      ? "border-[#1e3872] font-bold text-[#1e3872]"
                      : "border-transparent font-medium text-[#5a6260]"
                  }`}
                >
                  1 Bedroom
                  <span
                    className={`ml-1.5 rounded-full px-1.5 py-[1px] text-[10px] font-semibold ${
                      unitTab === "1bed"
                        ? "bg-[#1e3872]/10 text-[#1e3872]"
                        : "bg-[rgba(45,50,48,0.06)] text-[rgba(90,98,96,0.55)]"
                    }`}
                  >
                    3
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setUnitTab("2bed")}
                  className={`flex-1 border-b-2 px-1 py-[10px] text-[12px] tracking-[0.01em] ${
                    unitTab === "2bed"
                      ? "border-[#1e3872] font-bold text-[#1e3872]"
                      : "border-transparent font-medium text-[#5a6260]"
                  }`}
                >
                  2 Bedroom
                  <span
                    className={`ml-1.5 rounded-full px-1.5 py-[1px] text-[10px] font-semibold ${
                      unitTab === "2bed"
                        ? "bg-[#1e3872]/10 text-[#1e3872]"
                        : "bg-[rgba(45,50,48,0.06)] text-[rgba(90,98,96,0.55)]"
                    }`}
                  >
                    3
                  </span>
                </button>
              </div>

              <div className="px-0 pb-1 pt-2">
                {filteredUnits.map((unit, index) => (
                  <button
                    key={unit.code}
                    type="button"
                    onClick={() => {
                      setSelectedUnit(unit.code);
                      setShowUnitPicker(false);
                    }}
                    className={`flex w-full items-center gap-3 border-b border-[rgba(30,56,114,0.06)] px-5 py-[11px] text-left last:border-b-0 ${
                      index % 2 === 1 ? "bg-[rgba(30,56,114,0.027)]" : "bg-transparent"
                    }`}
                  >
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-[rgba(30,56,114,0.14)] bg-[rgba(30,56,114,0.08)]">
                      <span className="font-[Instrument_Serif] text-[13px] tracking-[-0.01em] text-[#1e3872]">
                        {unit.code}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="text-[13px] font-semibold leading-[1.3] text-[#2d3230]">
                        {unit.label}
                      </div>
                      <div className="mt-[1px] text-[11px] text-[#5a6260]">
                        {unit.area}
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div className="font-[Instrument_Serif] text-[15px] leading-[1.2] tracking-[-0.015em] text-[#2d3230]">
                        {unit.price}
                      </div>
                      <div className="mt-[2px] text-[10px] font-semibold text-[#1e3872]">
                        Available
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t border-[rgba(30,56,114,0.07)] px-5 pb-[14px] pt-[10px]">
                <p className="m-0 text-[10px] leading-[1.5] text-[#5a6260]">
                  Prices and availability subject to change · Pets welcome · Call{" "}
                  <strong>(903) 961-6391</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pet Friendly */}
        <div className="flex flex-1 min-w-[180px] flex-col justify-center px-6 py-[18px]">
          <div className="mb-1 flex items-center gap-1 font-[Plus_Jakarta_Sans] text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6260]">
            <PawPrint size={11} className="text-[#1e3872]" />
            Pet Friendly
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="whitespace-nowrap font-[Instrument_Serif] text-[17px] tracking-[-0.015em] text-[rgba(45,50,48,0.65)]">
              {hasPets ? "Yes, I have pets" : "No pets"}
            </span>

            <button
              type="button"
              aria-pressed={hasPets}
              onClick={() => setHasPets((prev) => !prev)}
              className={`relative h-[26px] w-[46px] rounded-full transition ${
                hasPets ? "bg-[#1e3872]" : "bg-[rgba(45,50,48,0.14)]"
              }`}
            >
              <div
                className={`absolute top-[3px] h-[20px] w-[20px] rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.22)] transition-all duration-200 ${
                  hasPets ? "left-[23px]" : "left-[3px]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex shrink-0 items-center border-l border-[rgba(30,56,114,0.1)] px-4 py-[12px]">
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="flex min-w-[160px] items-center justify-center gap-[9px] whitespace-nowrap rounded-[14px] bg-[#162b5e] px-[30px] py-[14px] font-[Plus_Jakarta_Sans] text-[14px] font-bold tracking-[0.01em] text-[#f5f2ed] shadow-[0_2px_16px_rgba(30,56,114,0.38)] transition hover:bg-[#0c2457]"
          >
            {checked ? (
              <>
                <CircleCheck size={15} />
                15 Homes Found
              </>
            ) : (
              <>
                <Search size={15} />
                Check Now
              </>
            )}
          </button>
        </div>
      </div>

      {checked && (
        <div className="flex justify-center pt-[14px] animate-[lp-rise_0.35s_ease]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(100,140,210,0.35)] bg-[rgba(30,56,114,0.92)] px-[20px] py-[8px] backdrop-blur-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.22)]">
            <CircleCheck size={12} className="text-[#7BAAF0]" />
            <span className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.01em] text-[#f5f2ed]">
              15 residences match · Scroll down to explore floor plans
            </span>
          </div>
        </div>
      )}
    </>
  );
}