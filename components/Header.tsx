export default function Header({streak}: any) {

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-green-pale">
      <div className="flex items-center gap-2.5">
        <div className="w-[38px] h-[38px] flex items-center justify-center text-xl bg-green-mid rounded-[50%_50%_50%_30%] shadow-md [transform:scaleX(-1)]">
          🦜
        </div>
        <span className="font-display text-[22px] font-semibold tracking-tight text-green-deep">
          Para<span className="text-aqua">keet</span>
        </span>
      </div>
      {
        streak && (
        <div className="flex items-center gap-1.5 text-[13px] font-extrabold px-3 py-1.5 rounded-full bg-yellow-light border border-brand-yellow text-amber-800">
          🔥 {streak}
        </div>
        )
      }

    </header>
  );
}
