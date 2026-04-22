"use client";

import { useState } from "react";
import {
  MessageCircle,
  X,
  RotateCcw,
  Sparkles,
  DollarSign,
  CalendarDays,
  CalendarCheck,
  PawPrint,
  ParkingCircle,
  LayoutPanelTop,
  CreditCard,
  Send,
} from "lucide-react";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

const defaultMessages: Message[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hi there! 👋 I'm Lori, your Parks on Taylor AI assistant. What can I help you with today?",
  },
];

export default function LoriChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState("");

  const addMessage = (user: string, bot: string) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "user", text: user },
      { id: prev.length + 2, sender: "bot", text: bot },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    let reply =
      "Thanks for reaching out! Our leasing team will have the best answer for that. Is there anything else I can help with?";

    if (input.toLowerCase().includes("location")) {
      reply = "Parks on Taylor is located in Sherman, TX.";
    } else if (input.toLowerCase().includes("pricing")) {
      reply =
        "🏠 A1 Studio · From $1,195/mo\n🏠 A2 · From $1,395/mo\n🏠 B1 · From $1,595/mo";
    }

    addMessage(input, reply);
    setInput("");
  };

  const handleQuick = (label: string, response: string) => {
    addMessage(label, response);
  };

  const resetChat = () => {
    setMessages(defaultMessages);
  };

  return (
    <>
      {open && (
        <div
          className="
            fixed bottom-20 right-3 z-50
            w-[290px] h-[420px]
            overflow-hidden rounded-[18px]
            border border-[#17306b]
            bg-[#031344]
            shadow-[0_20px_50px_rgba(0,0,0,0.35)]

            sm:right-4 sm:w-[340px] sm:h-[460px]
            md:w-[380px] md:h-[520px]
          "
        >
          <div className="flex h-full flex-col">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-[#1d3670] bg-[#183472] px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#163068]">
                  <Sparkles size={14} className="text-white" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    Ask Lori
                  </p>
                  <p className="text-[11px] text-green-400">● Online</p>
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  onClick={resetChat}
                  className="rounded-md bg-white/10 p-1.5 text-white transition hover:bg-white/15"
                  aria-label="Reset chat"
                >
                  <RotateCcw size={13} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-white/10 p-1.5 text-white transition hover:bg-white/15"
                  aria-label="Close chat"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* CHAT MESSAGES - SCROLLABLE */}
            <div className="flex-1 overflow-y-auto bg-[#04103a] p-2.5 space-y-2">
              {messages.map((msg) =>
                msg.sender === "bot" ? (
                  <div key={msg.id} className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#17356f]">
                      <Sparkles size={10} className="text-white" />
                    </div>

                    <div className="max-w-[210px] rounded-[14px] bg-[#1a244d] px-2.5 py-1.5 text-[12px] leading-relaxed text-white whitespace-pre-line break-words sm:max-w-[240px]">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex justify-end">
                    <div className="max-w-[190px] rounded-[12px] bg-[#244b99] px-2.5 py-1.5 text-[12px] leading-relaxed text-white whitespace-pre-line break-words sm:max-w-[220px]">
                      {msg.text}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* QUICK ACTIONS */}
            <div className="border-t border-[#11285f] bg-[#031344] p-2.5 text-white">
              <p className="mb-2 text-center text-[10px] uppercase tracking-[0.14em] text-white/80">
                Quick Actions
              </p>

              <div className="space-y-2">
                <button
                  onClick={() =>
                    handleQuick(
                      "Pricing",
                      "🏠 A1 Studio · From $1,195/mo\n🏠 A2 · From $1,395/mo\n🏠 B1 · From $1,595/mo"
                    )
                  }
                  className="flex w-full items-center gap-2 rounded-[12px] border border-[#183d88] bg-[#06184d] px-2.5 py-2 text-xs"
                >
                  <DollarSign size={14} className="shrink-0" />
                  <span>Pricing</span>
                </button>

                <button
                  onClick={() =>
                    handleQuick(
                      "Schedule a Tour",
                      "📅 Thursday 10 AM or 2 PM\n📅 Friday 11 AM or 3 PM"
                    )
                  }
                  className="flex w-full items-center gap-2 rounded-[12px] border border-[#183d88] bg-[#06184d] px-2.5 py-2 text-xs"
                >
                  <CalendarDays size={14} className="shrink-0" />
                  <span>Schedule a Tour</span>
                </button>

                <button
                  onClick={() =>
                    handleQuick(
                      "Check Move-in Date",
                      "🏠 Studio: Available Now\n🏠 1 Bed: Apr 1\n🏠 2 Bed: Mar 15"
                    )
                  }
                  className="flex w-full items-center gap-2 rounded-[12px] border border-[#183d88] bg-[#06184d] px-2.5 py-2 text-xs"
                >
                  <CalendarCheck size={14} className="shrink-0" />
                  <span>Availability</span>
                </button>
              </div>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {[
                  { label: "Pets", icon: PawPrint },
                  { label: "Parking", icon: ParkingCircle },
                  { label: "Plans", icon: LayoutPanelTop },
                  { label: "Apply", icon: CreditCard },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() =>
                      handleQuick(item.label, "Details coming soon...")
                    }
                    className="flex items-center gap-1 rounded-full border border-[#183d88] bg-[#06184d] px-2 py-1 text-[10px]"
                  >
                    <item.icon size={10} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT */}
            <div className="border-t border-[#17306b] bg-[#031344] p-2 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask..."
                className="h-10 flex-1 rounded-full bg-[#162453] px-3 text-xs text-white outline-none placeholder:text-white/60"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#162453] text-white transition hover:bg-[#1c2d66]"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#173a7a] text-white shadow-xl transition hover:bg-[#1d468f] sm:h-[64px] sm:w-[64px]"
        aria-label={open ? "Close chat widget" : "Open chat widget"}
      >
        {open ? <X size={20} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}