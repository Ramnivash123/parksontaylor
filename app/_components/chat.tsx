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
            fixed z-50 overflow-hidden
            bottom-20 right-3 left-3
            w-auto
            rounded-[20px] border border-[#17306b]
            bg-[#031344] shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            sm:left-auto sm:right-4 sm:w-[380px]
            md:w-[400px]
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-[#1d3670] bg-[#183472] px-3 py-3 sm:px-4">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#163068]">
                <Sparkles size={16} className="text-white" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  Ask Lori
                </p>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={resetChat}
                className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/15"
                aria-label="Reset chat"
              >
                <RotateCcw size={14} />
              </button>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/15"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* CHAT AREA */}
          <div
            className="
              overflow-y-auto bg-[#04103a] p-3 space-y-3
              max-h-[42vh]
              sm:max-h-[420px]
              md:max-h-[460px]
            "
          >
            {messages.map((msg) =>
              msg.sender === "bot" ? (
                <div key={msg.id} className="flex gap-2 items-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#17356f]">
                    <Sparkles size={12} className="text-white" />
                  </div>

                  <div
                    className="
                      max-w-[85%] sm:max-w-[300px]
                      whitespace-pre-line break-words
                      rounded-[16px] bg-[#1a244d]
                      px-3 py-2 text-[13px] sm:text-[14px] text-white
                    "
                  >
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex justify-end">
                  <div
                    className="
                      max-w-[80%] sm:max-w-[240px]
                      whitespace-pre-line break-words
                      rounded-[14px] bg-[#244b99]
                      px-3 py-2 text-[13px] sm:text-[14px] text-white
                    "
                  >
                    {msg.text}
                  </div>
                </div>
              )
            )}
          </div>

          {/* QUICK ACTIONS */}
          <div className="border-t border-[#11285f] p-3 text-white sm:p-4">
            <p className="mb-3 text-center text-[11px] uppercase tracking-[0.18em] text-white/80">
              Quick Actions
            </p>

            {/* Main Buttons */}
            <div className="space-y-2">
              <button
                onClick={() =>
                  handleQuick(
                    "Pricing",
                    "🏠 A1 Studio · From $1,195/mo\n🏠 A2 · From $1,395/mo\n🏠 B1 · From $1,595/mo"
                  )
                }
                className="flex w-full items-center gap-3 rounded-[14px] border border-[#183d88] bg-[#06184d] px-3 py-3 text-sm transition hover:bg-[#0a1f5e]"
              >
                <DollarSign size={16} className="shrink-0" />
                <span>Pricing</span>
              </button>

              <button
                onClick={() =>
                  handleQuick(
                    "Schedule a Tour",
                    "📅 Thursday 10 AM or 2 PM\n📅 Friday 11 AM or 3 PM"
                  )
                }
                className="flex w-full items-center gap-3 rounded-[14px] border border-[#183d88] bg-[#06184d] px-3 py-3 text-sm transition hover:bg-[#0a1f5e]"
              >
                <CalendarDays size={16} className="shrink-0" />
                <span>Schedule a Tour</span>
              </button>

              <button
                onClick={() =>
                  handleQuick(
                    "Check Move-in Date",
                    "🏠 Studio: Available Now\n🏠 1 Bed: Apr 1\n🏠 2 Bed: Mar 15"
                  )
                }
                className="flex w-full items-center gap-3 rounded-[14px] border border-[#183d88] bg-[#06184d] px-3 py-3 text-sm transition hover:bg-[#0a1f5e]"
              >
                <CalendarCheck size={16} className="shrink-0" />
                <span>Check Move-in Date</span>
              </button>
            </div>

            {/* Pills */}
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { label: "Pet policy", icon: PawPrint },
                { label: "Parking", icon: ParkingCircle },
                { label: "Floor plans", icon: LayoutPanelTop },
                { label: "Apply online", icon: CreditCard },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleQuick(item.label, "Details coming soon...")}
                  className="
                    inline-flex items-center gap-1.5
                    rounded-full border border-[#183d88]
                    bg-[#06184d] px-3 py-2
                    text-[11px] sm:text-xs
                    transition hover:bg-[#0a1f5e]
                  "
                >
                  <item.icon size={12} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="flex gap-2 border-t border-[#17306b] p-3 sm:p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="
                h-11 sm:h-12 flex-1 rounded-full
                bg-[#162453] px-4 text-sm text-white
                outline-none placeholder:text-white/60
              "
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="
                flex h-11 w-11 sm:h-12 sm:w-12
                items-center justify-center
                rounded-full bg-[#162453] text-white
                transition hover:bg-[#1c2d66]
              "
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-4 right-4 z-50
          flex h-14 w-14 sm:h-[64px] sm:w-[64px]
          items-center justify-center
          rounded-full bg-[#173a7a] text-white shadow-xl
          transition hover:bg-[#1d468f]
        "
        aria-label={open ? "Close chat widget" : "Open chat widget"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}