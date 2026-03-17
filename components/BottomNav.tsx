"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/",         icon: "🏠", label: "Home"     },
  { href: "/learn",    icon: "📚", label: "Learn"    },
  { href: "/progress", icon: "📊", label: "Progress" },
  { href: "/profile",  icon: "👤", label: "Profile"  },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="sticky bottom-0 z-10 flex justify-around py-2 bg-white border-t border-green-pale pb-safe">
      {navItems.map(({ href, icon, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl no-underline transition-colors ${
              active ? "bg-green-pale" : ""
            }`}
          >
            <span className="text-[22px]">{icon}</span>
            <span className={`text-[10px] font-extrabold tracking-wide uppercase ${active ? "text-green-deep" : "text-text-muted"}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
