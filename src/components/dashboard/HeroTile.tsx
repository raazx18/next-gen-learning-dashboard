"use client";
import { motion } from "framer-motion";
import { item } from "./DashboardAnimations";
export default function HeroTile() {
  return (
    <motion.article
  variants={item}
      className="
      lg:col-span-2
      rounded-3xl
      border border-zinc-800
      bg-zinc-900/60
      backdrop-blur-xl
      p-8
      overflow-hidden
      relative
    "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />

      <div className="relative z-10">
        <p className="text-zinc-400 text-sm">
          Thursday - June 2026
        </p>

        <h1 className="text-4xl font-bold mt-2">
          Welcome back 👋
        </h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2">
          🔥 12 Day Learning Streak - Top 8%
        </div>
      </div>
      </motion.article>
      
  );
}