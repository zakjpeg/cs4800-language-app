import BottomNav from "@/components/BottomNav";

const settings = [
  { icon:"🌐", label:"Learning Language", value:"Spanish"  },
  { icon:"🎯", label:"Daily Goal",        value:"15 min"   },
  { icon:"🔔", label:"Reminders",         value:"On"       },
  { icon:"🎤", label:"Voice Mode",        value:"Enabled"  },
  { icon:"📊", label:"View Full Stats",   value:null       },
  { icon:"⚙️", label:"Account Settings", value:null       },
];

export default function ProfilePage() {
  return (
    <>
      <div className="flex-1 overflow-y-auto pb-24">

        {/* Hero */}
        <div className="px-6 pt-9 pb-7 text-center bg-hero-feather">
          <div className="w-[76px] h-[76px] rounded-full flex items-center justify-center text-[38px] bg-white mx-auto mb-3 shadow-lg">
            🦜
          </div>
          <h1 className="font-display text-[22px] font-semibold text-white mb-1">Alex Rivera</h1>
          <p className="text-xs font-bold uppercase tracking-[1px] text-white/70">Level 5 · Spanish Learner</p>
        </div>

        {/* Settings list */}
        <div className="px-6 pt-4 flex flex-col gap-2">
          {settings.map(item => (
            <div
              key={item.label}
              className="flex items-center gap-3.5 px-4 py-4 rounded-card-sm bg-white border border-green-pale cursor-pointer hover:border-green-light transition-colors"
            >
              <span className="text-xl w-7 text-center">{item.icon}</span>
              <span className="flex-1 text-sm font-bold text-text-dark">{item.label}</span>
              {item.value && (
                <span className="text-[13px] font-bold text-green-mid mr-1.5">{item.value}</span>
              )}
              <span className="text-text-muted text-base">›</span>
            </div>
          ))}

          <div className="flex items-center gap-3.5 px-4 py-4 rounded-card-sm bg-white cursor-pointer">
            <span className="text-xl w-7 text-center">🚪</span>
            <span className="flex-1 text-sm font-bold text-red-600">Sign Out</span>
          </div>
        </div>

      </div>

      <BottomNav />
    </>
  );
}
