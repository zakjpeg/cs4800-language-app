import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const skills = [
  { icon:"🗣️", label:"Speaking",   pct:78, bar:"bg-bar-green",  track:"bg-green-pale",  text:"text-green-mid"   },
  { icon:"👂", label:"Listening",  pct:91, bar:"bg-bar-aqua",   track:"bg-aqua-light",  text:"text-aqua"        },
  { icon:"✍️", label:"Grammar",    pct:82, bar:"bg-bar-yellow", track:"bg-yellow-light", text:"text-amber-700"   },
  { icon:"📖", label:"Vocabulary", pct:65, bar:"bg-bar-vocab",  track:"bg-green-pale",  text:"text-green-mid"   },
];

const week = [
  { day:"M", h:30,  color:"bg-green-pale" },
  { day:"T", h:55,  color:"bg-green-mid"  },
  { day:"W", h:20,  color:"bg-green-pale" },
  { day:"T", h:68,  color:"bg-green-mid"  },
  { day:"F", h:44,  color:"bg-green-mid"  },
  { day:"S", h:58,  color:"bg-aqua"       },
  { day:"S", h:10,  color:"bg-green-pale opacity-50", today: true },
];

export default function ProgressPage() {
  return (
    <>
      <Header />

      <div className="flex-1 overflow-y-auto pb-24">

        {/* Hero */}
        <div className="relative overflow-hidden px-6 pt-7 pb-7 bg-hero-feather">
          <p className="text-[13px] font-bold uppercase tracking-[1.5px] text-white/70 mb-1.5">Your journey</p>
          <h1 className="font-display text-[28px] font-semibold text-white mb-4">
            Level 5 <span className="text-brand-yellow italic">Speaker</span>
          </h1>
          <div className="flex items-center gap-4">
            {[
              { val:"32",    label:"Convos",   gold:false },
              { val:"4.2h",  label:"Practice", gold:false },
              { val:"620",   label:"XP",       gold:true  },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-8 bg-white/20" />}
                <div className="text-center">
                  <p className={`font-display text-2xl font-semibold leading-none mb-1 ${s.gold ? "text-brand-yellow" : "text-white"}`}>
                    {s.val}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.8px] text-white/65">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <section className="px-6 pt-6">
          <h2 className="text-[13px] font-extrabold uppercase tracking-[1.2px] text-text-muted mb-3.5">Fluency Breakdown</h2>
          <div className="flex flex-col gap-3.5">
            {skills.map(s => (
              <div key={s.label} className="px-4 py-4 rounded-card-sm bg-white border border-green-pale">
                <div className="flex justify-between mb-2">
                  <span className="text-[13px] font-extrabold text-text-dark">{s.icon} {s.label}</span>
                  <span className={`text-[13px] font-extrabold ${s.text}`}>{s.pct}%</span>
                </div>
                <div className={`rounded-full h-2 overflow-hidden ${s.track}`}>
                  <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly bars */}
        <section className="px-6 pt-6">
          <h2 className="text-[13px] font-extrabold uppercase tracking-[1.2px] text-text-muted mb-3.5">This Week</h2>
          <div className="px-5 py-5 rounded-card bg-white border border-green-pale">
            <div className="flex items-end justify-between gap-2" style={{ height: 88 }}>
              {week.map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-1 flex-1">
                  <div className={`w-full rounded-md ${b.color}`} style={{ height: b.h }} />
                  <span className={`text-[10px] font-bold ${b.today ? "font-extrabold text-green-deep" : "text-text-muted"}`}>
                    {b.day}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] font-bold text-text-muted mt-2.5">Minutes practiced per day</p>
          </div>
        </section>

      </div>

      <BottomNav />
    </>
  );
}
