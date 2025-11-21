"use client";

import { motion } from "framer-motion";

export default function Marquee({ items, speed = 20 }: { items: string[], speed?: number }) {
    return (
        <div className="relative flex overflow-hidden py-4 bg-gradient-to-r from-primary via-[#0f2740] to-primary text-creme border-y border-white/10 shadow-elevation-medium">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
                {items.map((item, i) => (
                    <span key={i} className="text-lg font-bold uppercase tracking-widest mx-4 flex items-center gap-4">
                        {item} <span className="w-2 h-2 bg-accent-yellow rounded-full inline-block" />
                    </span>
                ))}
                {items.map((item, i) => (
                    <span key={`dup-${i}`} className="text-lg font-bold uppercase tracking-widest mx-4 flex items-center gap-4">
                        {item} <span className="w-2 h-2 bg-accent-yellow rounded-full inline-block" />
                    </span>
                ))}
                {items.map((item, i) => (
                    <span key={`dup2-${i}`} className="text-lg font-bold uppercase tracking-widest mx-4 flex items-center gap-4">
                        {item} <span className="w-2 h-2 bg-accent-yellow rounded-full inline-block" />
                    </span>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-primary to-transparent z-10" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-primary to-transparent z-10" />
            <div className="absolute inset-0 opacity-[0.35] grid-overlay mix-blend-soft-light pointer-events-none" />
        </div>
    );
}
