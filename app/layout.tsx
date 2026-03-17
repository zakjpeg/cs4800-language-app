import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parakeet – Language Learning",
  description: "AI-powered language learning, one conversation at a time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className="h-screen bg-green-deep md:bg-green-pale flex justify-center md:px-5">
        <div 
        className="w-full no-scrollbar md:max-w-[430px] bg-cream flex flex-col max-h-screen md:min-h-0 md:rounded-[40px] md:shadow-2xl md:overflow-hidden md:my-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
