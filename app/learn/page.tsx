"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import ConversationView from "@/components/ConversationView";
import { FaMicrophoneAlt } from "react-icons/fa";

/* ─── helpers ─────────────────────────────────────────────────────────── */

function useRipple() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  function addRipple(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
  }
  return { ripples, addRipple };
}

/* ─── data ─────────────────────────────────────────────────────────────── */

const scenarios = [
  { emoji: "🍽️", name: "At the Restaurant", level: "Intermediate" },
  { emoji: "✈️", name: "Airport & Travel",   level: "Beginner"     },
  { emoji: "💼", name: "Business Meeting",   level: "Advanced"     },
  { emoji: "🛒", name: "Shopping",           level: "Beginner"     },
  { emoji: "🏥", name: "At the Doctor",      level: "Intermediate" },
  { emoji: "🎉", name: "Social Events",      level: "Beginner"     },
];

/* ─── mic button ────────────────────────────────────────────────────────── */

function MicButton({ onPress }: { onPress?: () => void }) {
  const [active, setActive] = useState(false);
  const { ripples, addRipple } = useRipple();

  return (
    <button
      onMouseDown={(e) => { setActive(true); addRipple(e); onPress?.(); }}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      className="relative flex items-center justify-center rounded-full overflow-hidden select-none"
      style={{
        width: 88,
        height: 88,
        background: active
          ? "linear-gradient(135deg,#ff5f1f 0%,#e63900 100%)"
          : "linear-gradient(135deg,#ff8c42 0%,#ff5200 100%)",
        boxShadow: active
          ? "0 4px 24px rgba(255,82,0,0.55), inset 0 2px 6px rgba(0,0,0,0.18)"
          : "0 8px 32px rgba(255,82,0,0.45), 0 2px 8px rgba(0,0,0,0.12)",
        transform: active ? "scale(0.94)" : "scale(1)",
        transition: "all .15s cubic-bezier(.4,0,.2,1)",
      }}
      aria-label="Speak"
    >
      {/* pulse rings */}
      {active && (
        <>
          <span className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "rgba(255,130,50,0.3)" }} />
          <span className="absolute rounded-full animate-ping"
            style={{ inset: -8, background: "rgba(255,130,50,0.15)", animationDelay: "0.2s" }} />
        </>
      )}
      {ripples.map((r) => (
        <span key={r.id} className="absolute pointer-events-none rounded-full"
          style={{
            left: r.x - 40, top: r.y - 40, width: 80, height: 80,
            background: "rgba(255,255,255,0.35)",
            animation: "ripple-out .7s ease-out forwards",
          }} />
      ))}
      <FaMicrophoneAlt size={30} color="white" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }} />
    </button>
  );
}

/* ─── main page ─────────────────────────────────────────────────────────── */

export default function LearnPage() {
  const [convOpen, setConvOpen] = useState(false);
  const [scenario, setScenario] = useState("🍽️ At the Restaurant");
  const [language]  = useState("French");
  const [gamemode]  = useState("Taxi Driver");
  const [mounted, setMounted] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  function open(s: (typeof scenarios)[0]) {
    setScenario(`${s.emoji} ${s.name}`);
    setConvOpen(true);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Noto+Serif:ital,wght@0,400;1,400&display=swap');

        :root {
          --orange: #ff5200;
          --orange-soft: #ff8c42;
          --cream: #fff9f5;
          --ink: #1a120a;
          --ink-2: #4a3728;
          --ink-3: #8c6e5d;
          --surface: #ffffff;
          --border: rgba(255,82,0,0.12);
        }

        .learn-page { font-family: 'Sora', sans-serif; background: var(--cream); }
        .badge-expert { background: #ffe0d0; color: #c73200; }
        .chat-bubble-in  { background: #fff; border-radius: 18px 18px 18px 4px; }
        .chat-bubble-out { background: var(--orange); border-radius: 18px 18px 4px 18px; }
        .hint-pill { background: rgba(255,82,0,0.09); border: 1px solid rgba(255,82,0,0.18); }

        @keyframes float-in-up {
          from { opacity:0; transform: translateY(22px); }
          to   { opacity:1; transform: translateY(0);    }
        }
        @keyframes ripple-out {
          from { transform:scale(0.3); opacity:1; }
          to   { transform:scale(2.5); opacity:0; }
        }
        @keyframes avatar-in {
          from { opacity:0; transform:scale(0.85) translateY(12px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(1);   opacity:.6; }
          100% { transform:scale(1.6); opacity:0;  }
        }

        .anim-0 { animation: float-in-up .5s cubic-bezier(.3,0,.2,1) .05s both; }
        .anim-1 { animation: float-in-up .5s cubic-bezier(.3,0,.2,1) .15s both; }
        .anim-2 { animation: float-in-up .5s cubic-bezier(.3,0,.2,1) .28s both; }
        .anim-3 { animation: float-in-up .5s cubic-bezier(.3,0,.2,1) .40s both; }
        .anim-4 { animation: float-in-up .5s cubic-bezier(.3,0,.2,1) .52s both; }
      `}</style>

      <div className="learn-page flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col px-5 pb-28 pt-6 gap-6 overflow-y-auto">

          {/* ── top row: gamemode label ── */}
          <div className={`flex items-center gap-3 ${mounted ? "anim-0" : "opacity-0"}`}>
            <div>
              <div className="flex items-center gap-2">
                <h1 style={{ fontFamily: "'Sora'", fontWeight: 800, fontSize: 26, color: "var(--ink)", letterSpacing: "-0.5px" }}>
                  {gamemode}
                </h1>
                <span className="badge-expert text-xs font-bold px-2 py-0.5 rounded-full tracking-wide uppercase">
                  Expert
                </span>
              </div>
              <p style={{ color: "var(--ink-3)", fontSize: 13, marginTop: 2 }}>
                &nbsp;{language} · Conversational Practice
              </p>
            </div>
          </div>

          {/* ── scenario card ── */}
          <div className={`relative rounded-3xl  overflow-hidden ${mounted ? "anim-1" : "opacity-0"} bg-gradient-to-br from-[#ff6b2b] to-[#c73200] to-100% via-[#ff3d00]`}
            style={{
              padding: "20px 20px 0 20px",
              minHeight: 200,
            }}>
            {/* decorative circles */}
            <div className="absolute" style={{ top: -30, right: -30, width: 130, height: 130, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <div className="absolute" style={{ bottom: 20, right: 40, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />

            {/* avatar + speech */}
            <div className="flex gap-4 items-end">
              {/* avatar */}
              <div className="relative flex-shrink-0" style={{ animation: mounted ? "avatar-in .55s cubic-bezier(.3,0,.2,1) .2s both" : undefined, opacity: mounted ? undefined : 0 }}>
                <div className="rounded-full overflow-hidden border-4 border-white/30"
                  style={{ width: 90, height: 90, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}>
                  <img
                    src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA4L3NyLWltYWdlLTA4MDgyMDI1LWF3OS1zLTE0NzUuanBn.jpg"
                    alt="Taxi Driver"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* online dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white"
                  style={{ background: "#4ade80" }} />
              </div>

              {/* bubble */}
              <div className="flex flex-col gap-1 pb-5">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
                  Taxi Driver says
                </p>
                <div className="chat-bubble-in px-4 py-3 inline-block"
                  style={{ maxWidth: 200, boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}>
                  <p style={{ fontFamily: "'Noto Serif', serif", fontStyle: "italic", fontSize: 17, color: "var(--ink)", lineHeight: 1.5 }}>
                    Où sont les toilettes&nbsp;?
                  </p>
                </div>
                {
                  showHint
                }
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginTop: 3 }}>
                  Where are the bathrooms?
                </p>
              </div>
            </div>
          </div>

          {/* ── your turn ── */}
          <div className={`flex flex-col items-center gap-5 ${mounted ? "anim-2" : "opacity-0"}`}>
            <div className="w-full self-stretch flex justify-end">
              <div className="chat-bubble-out px-4 py-3 inline-block self-end"
                style={{ boxShadow: "0 4px 16px rgba(255,82,0,0.3)", maxWidth: 260 }}>
                <p style={{ color: "#fff", fontSize: 14, lineHeight: 1.6, fontWeight: 500 }}>
                  Respond in {language} — tap the mic and speak your answer.
                </p>
              </div>
            </div>

            {/* hint pills */}
            <div className="flex flex-wrap gap-2 self-stretch justify-end">
              {["Les toilettes sont…", "Au fond à droite", "Je ne sais pas"].map((h) => (
                <button key={h} className="hint-pill text-xs px-3 py-1.5 rounded-full font-medium transition-all active:scale-95"
                  style={{ color: "var(--orange)", fontFamily: "'Sora'" }}>
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* ── mic area ── */}
          <div className={`flex flex-col items-center gap-3 ${mounted ? "anim-3" : "opacity-0"}`}>
            <MicButton onPress={() => setSpeaking(!speaking)} />
            <p style={{ color: "var(--ink-3)", fontSize: 12, fontWeight: 500 }}>
              {speaking ? "Listening…" : "Hold to speak"}
            </p>
          </div>

          {/* ── progress strip ── */}
          <div className={`rounded-2xl px-4 py-3 flex items-center gap-4 ${mounted ? "anim-4" : "opacity-0"}`}
            style={{ background: "#fff", border: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div className="flex-1">
              <p style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 600, marginBottom: 6 }}>
                LESSON PROGRESS
              </p>
              <div className="w-full rounded-full overflow-hidden" style={{ height: 6, background: "#ffe0d0" }}>
                <div className="h-full rounded-full" style={{ width: "40%", background: "linear-gradient(90deg,#ff8c42,#ff5200)", transition: "width 1s ease" }} />
              </div>
            </div>
            <div className="text-right">
              <p style={{ fontSize: 20, fontWeight: 800, color: "var(--orange)" }}>4/10</p>
              <p style={{ fontSize: 11, color: "var(--ink-3)" }}>exchanges</p>
            </div>
          </div>

        </main>

        <BottomNav />
        <ConversationView open={convOpen} onClose={() => setConvOpen(false)} scenario={scenario} />
      </div>
    </>
  );
}