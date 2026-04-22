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
      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-[380px] max-w-[calc(100vw-16px)] rounded-[22px] border border-[#17306b] bg-[#031344] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">
          
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-[#1d3670] bg-[#183472] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-[#163068] flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-white font-semibold">Ask Lori</p>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={resetChat} className="p-2 bg-white/10 rounded-lg">
                <RotateCcw size={14} />
              </button>
              <button onClick={() => setOpen(false)} className="p-2 bg-white/10 rounded-lg">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* CHAT AREA */}
          <div className="max-h-[480px] overflow-y-auto bg-[#04103a] p-3 space-y-3">
            {messages.map((msg) =>
              msg.sender === "bot" ? (
                <div key={msg.id} className="flex gap-2">
                  <div className="h-7 w-7 bg-[#17356f] rounded-full flex items-center justify-center">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="max-w-[300px] rounded-[16px] bg-[#1a244d] px-3 py-2 text-[14px] text-white">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex justify-end">
                  <div className="max-w-[240px] rounded-[14px] bg-[#244b99] px-3 py-2 text-[14px] text-white">
                    {msg.text}
                  </div>
                </div>
              )
            )}
          </div>

          {/* QUICK ACTIONS */}
          <div className="border-t border-[#11285f] p-3 text-white">
            <p className="text-center text-xs text-white uppercase mb-2">
              Quick Actions
            </p>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={() =>
                  handleQuick(
                    "Pricing",
                    "🏠 A1 Studio · From $1,195/mo\n🏠 A2 · From $1,395/mo\n🏠 B1 · From $1,595/mo"
                  )
                }
                className="flex w-full items-center gap-3 px-3 py-3 bg-[#06184d] border border-[#183d88] rounded-[14px]"
              >
                <DollarSign size={16} /> Pricing
              </button>

              <button
                onClick={() =>
                  handleQuick(
                    "Schedule a Tour",
                    "📅 Thursday 10 AM or 2 PM\n📅 Friday 11 AM or 3 PM"
                  )
                }
                className="flex w-full items-center gap-3 px-3 py-3 bg-[#06184d] border border-[#183d88] rounded-[14px]"
              >
                <CalendarDays size={16} /> Schedule a Tour
              </button>

              <button
                onClick={() =>
                  handleQuick(
                    "Check Move-in Date",
                    "🏠 Studio: Available Now\n🏠 1 Bed: Apr 1\n🏠 2 Bed: Mar 15"
                  )
                }
                className="flex w-full items-center gap-3 px-3 py-3 bg-[#06184d] border border-[#183d88] rounded-[14px]"
              >
                <CalendarCheck size={16} /> Check Move-in Date
              </button>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                { label: "Pet policy", icon: PawPrint },
                { label: "Parking", icon: ParkingCircle },
                { label: "Floor plans", icon: LayoutPanelTop },
                { label: "Apply online", icon: CreditCard },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() =>
                    handleQuick(item.label, "Details coming soon...")
                  }
                  className="flex items-center gap-1 px-3 py-1.5 text-xs bg-[#06184d] border border-[#183d88] rounded-full"
                >
                  <item.icon size={12} /> {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t border-[#17306b] p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 h-12 px-4 rounded-full bg-[#162453] text-white text-sm outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="h-12 w-12 rounded-full bg-[#162453] flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 h-[64px] w-[64px] rounded-full bg-[#173a7a] flex items-center justify-center shadow-xl"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}