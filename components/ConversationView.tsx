"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "ai" | "user";
  text: string;
  tip?: string;
}

const INITIAL_MESSAGES: Message[] = [
  { role: "ai",   text: "¡Hola! Bienvenido al restaurante. ¿Tiene una reservación o prefiere una mesa disponible?" },
  { role: "user", text: "Hola! Quiero una mesa por favor. Somos dos personas." },
  { role: "ai",   text: "¡Perfecto! Tengo una mesa disponible junto a la ventana. ¿Les parece bien?",
    tip: '💡 Tip: "¿Les parece bien?" = "Does that work for you?" — great phrase!' },
  { role: "user", text: "Sí, es perfecto. Gracias mucho!" },
  { role: "ai",   text: "¡De nada! Aquí está el menú. ¿Desea algo para beber mientras decide?",
    tip: '✏️ "Muchas gracias" sounds more natural than "Gracias mucho" — both are understood!' },
];

interface Props {
  open: boolean;
  onClose: () => void;
  scenario?: string;
}

export default function ConversationView({ open, onClose, scenario = "🍽️ At the Restaurant" }: Props) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput]       = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function send() {
    const text = input.trim();
    if (!text || thinking) return;
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages(prev => [...prev, { role: "ai", text: "¡Muy bien! Su respuesta fue excelente. ¿Qué desea ordenar?" }]);
    }, 1400);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-cream max-w-[430px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3.5 px-5 py-4 bg-white border-b border-green-pale">
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-green-pale text-green-deep hover:scale-105 transition-transform border-0 cursor-pointer text-base"
        >
          ←
        </button>
        <div className="flex-1">
          <p className="text-[15px] font-extrabold text-text-dark">{scenario}</p>
          <p className="text-[11px] font-semibold text-text-muted">AI Practice · Real-time feedback</p>
        </div>
        <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-green-pale text-green-deep tracking-wide">ES</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-3.5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
            <p className="text-[10px] font-bold tracking-wide text-text-muted px-1">
              {msg.role === "ai" ? "PARAKEET AI" : "YOU"}
            </p>
            <div
              className={`max-w-[82%] px-4 py-3 text-sm font-semibold leading-relaxed ${
                msg.role === "ai"
                  ? "bg-white border border-green-pale text-text-dark rounded-[18px_18px_18px_6px]"
                  : "bg-green-mid text-white rounded-[18px_18px_6px_18px]"
              }`}
            >
              {msg.text}
            </div>
            {msg.tip && (
              <div className="flex items-start gap-1.5 max-w-[90%] px-3 py-2 text-xs font-bold rounded-xl bg-yellow-light border border-brand-yellow text-amber-800 mt-1">
                {msg.tip}
              </div>
            )}
          </div>
        ))}

        {thinking && (
          <div className="flex flex-col items-start gap-1">
            <p className="text-[10px] font-bold tracking-wide text-text-muted px-1">PARAKEET AI</p>
            <div className="px-4 py-3 text-sm font-semibold italic text-text-muted bg-white border border-green-pale rounded-[18px_18px_18px_6px]">
              Parakeet is thinking… 🦜
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="flex items-end gap-2.5 px-4 py-3.5 bg-white border-t border-green-pale">
        <button className="w-11 h-11 rounded-full flex items-center justify-center text-xl bg-aqua-light border-0 cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
          🎤
        </button>
        <textarea
          className="flex-1 rounded-[20px] px-4 py-3 text-sm font-semibold bg-green-pale text-text-dark outline-none resize-none border-0 font-sans"
          placeholder="Type in Spanish…"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
          style={{ maxHeight: 80 }}
        />
        <button
          onClick={send}
          className="w-11 h-11 rounded-full flex items-center justify-center text-xl bg-green-mid border-0 cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
