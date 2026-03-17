"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import ConversationView from "@/components/ConversationView";
import clsx from "clsx";

const achievements = [
  { icon: "🐣", label: "First Chirp",  pts: "+50 XP",  unlocked: true  },
  { icon: "🔥", label: "Hot Streak",   pts: "+100 XP", unlocked: true  },
  { icon: "🗣️", label: "Chatterbox",   pts: "+75 XP",  unlocked: true  },
  { icon: "🏆", label: "Fluent Bird",  pts: "+500 XP", unlocked: false },
  { icon: "🌍", label: "Globe Trotter",pts: "+200 XP", unlocked: false },
];

// Map of greetings
const customWords = new Map();
customWords.set("French", {greeting: "Bounjour"});
customWords.set("Italian", {greeting: "Ciao"});
customWords.set("Spanish", {greeting: "Hola"})

type Language = (
  "Spanish" |
  "French" | 
  "Italian"
)

export default function Home() {
  const [convOpen, setConvOpen] = useState(false);

  const [streak, setStreak] = useState<number | null>(13);
  const [language, setLanguage] = useState<Language>("French");

  return (
    <>
      <Header streak={streak}/>

      <div className="flex-1 overflow-y-auto pb-24">

        {/* ── Hero ── */}
        <div className={clsx("relative overflow-hidden px-6 pt-7 pb-9",
          language === "French" && "bg-hero-french",
          language === "Spanish" && "bg-hero-spanish",
          language === "Italian" && "bg-hero-italian",
        )}>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.07] pointer-events-none" />
          <div className="absolute -bottom-5 -left-8 w-32 h-32 rounded-full bg-brand-yellow/10 pointer-events-none" />

          <div className="flex flex-row justify-between">
            <p className="text-[13px] font-bold uppercase tracking-[1.5px] text-white/70 mb-1.5">Good morning</p>
            <select name="" id="" className="bg-transparent text-lime-300 outline-1 outline-lime-300 px-2 rounded-full"
            onChange={(e) => {
            }}
            defaultValue={language}
            >
              <option value="French" className="text-black">French</option>
              <option value="Spanish" className="text-black">Spanish</option>
              <option value="Italian" className="text-black">Italian</option>
            </select>
          </div>
          <h1 className="font-display text-[28px] font-semibold text-white mb-4">
            Ready to chirp in <span className="text-brand-yellow italic">{language}?</span>
          </h1>
          <div className="h-2.5 rounded-full bg-white/20 mb-1.5 overflow-hidden">
            <div className="relative h-full w-[62%] rounded-full bg-xp-bar xp-shimmer" />
          </div>
          <div className="flex justify-between text-[11px] font-bold text-white/75">
            <span>620 XP</span><span>Level 5 · 1000 XP</span>
          </div>
        </div>

        {/* ── Quick actions ── */}
        <section className="px-6 pt-6">
          <h2 className="text-[13px] font-extrabold uppercase tracking-[1.2px] text-text-muted mb-3.5"
          >
            {
              customWords.get(language).greeting
            }
          </h2>
          <div className="grid grid-cols-2 gap-3">

            <button
              onClick={() => setConvOpen(true)}
              className="col-span-2 flex items-center gap-4 px-5 py-5 rounded-card bg-btn-primary border-0 cursor-pointer text-left hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <span className="text-[36px] drop-shadow-md">💬</span>
              <div>
                <p className="text-base font-extrabold text-white mb-0.5">AI Conversation</p>
                <p className="text-xs font-semibold text-white/70">Jump into a live chat practice</p>
              </div>
            </button>

            <Link href="/learn" className="relative flex flex-col overflow-hidden px-4 py-5 rounded-card bg-white border border-green-pale no-underline hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-aqua/10" />
              <span className="text-[28px] mb-2.5">🌮</span>
              <p className="text-sm font-extrabold text-text-dark mb-0.5">Fine Dining</p>
              <p className="text-[11px] font-semibold text-text-muted">Practice your {language} with a waiter in fine dining</p>
            </Link>

            <button className="relative flex flex-col overflow-hidden px-4 py-5 rounded-card bg-white border border-green-pale text-left cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-brand-yellow/10" />
              <span className="text-[28px] mb-2.5">✈️</span>
              <p className="text-sm font-extrabold text-text-dark mb-0.5">Airport</p>
              <p className="text-[11px] font-semibold text-text-muted">Talk your way through an airport setting</p>
            </button>

            <button className="relative flex flex-col overflow-hidden px-4 py-5 rounded-card bg-white border border-green-pale text-left cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-brand-yellow/10" />
              <span className="text-[28px] mb-2.5">🏨</span>
              <p className="text-sm font-extrabold text-text-dark mb-0.5">Hotel</p>
              <p className="text-[11px] font-semibold text-text-muted">Practice your {language} with a hotel concierge</p>
            </button>

            <button className="relative flex flex-col overflow-hidden px-4 py-5 rounded-card bg-white border border-green-pale text-left cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-brand-yellow/10" />
              <span className="text-[28px] mb-2.5">🚕</span>
              <p className="text-[8px] font-extrabold bg-red-300 rounded-sm w-min px-1 text-red-800 mb-0.5">EXPERT</p>
              <p className="text-sm font-extrabold text-text-dark mb-0.5">Taxi Driver</p>
              <p className="text-[11px] font-semibold text-text-muted">Chat about miscellaneous topics with a taxi driver</p>
            </button>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="px-6 pt-6">
          <h2 className="text-[13px] font-extrabold uppercase tracking-[1.2px] text-text-muted mb-3.5">Your Progress</h2>
          <div className="grid grid-cols-3 gap-2.5">
            {[{ v:streak, l:"Day Streak" }, { v:"324", l:"Words" }, { v:"88%", l:"Accuracy" }].map(s => (
              <div key={s.l} className="text-center py-4 px-3 rounded-card-sm bg-white border border-green-pale">
                <p className="font-display text-[26px] font-semibold text-green-deep leading-none mb-1">{s.v}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="px-6 pt-6">
          <h2 className="text-[13px] font-extrabold uppercase tracking-[1.2px] text-text-muted mb-3.5">Achievements</h2>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
            {achievements.map(a => (
              <div
                key={a.label}
                className={`flex items-center gap-2 pl-2.5 pr-4 py-2 rounded-full flex-shrink-0 cursor-pointer transition-all border ${
                  a.unlocked
                    ? "bg-green-pale border-green-light"
                    : "bg-white border-green-pale opacity-45"
                }`}
              >
                <span className="text-[18px]">{a.icon}</span>
                <div>
                  <p className="text-xs font-extrabold text-text-dark">{a.label}</p>
                  <p className="text-[10px] font-bold text-text-muted">{a.pts}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <BottomNav />
      <ConversationView open={convOpen} onClose={() => setConvOpen(false)} />
    </>
  );
}
