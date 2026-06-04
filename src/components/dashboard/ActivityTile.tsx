"use client";
import { motion } from "framer-motion";
import { item } from "./DashboardAnimations";
export default function ActivityTile() {
  return (
    <motion.article
      variants={item}
      className="
      rounded-3xl
      border border-zinc-800
      bg-zinc-900/60
      p-6
    "
    >
      <h2 className="font-semibold mb-4">
        Weekly Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className={`
              h-4 rounded-sm
              ${i % 3 === 0
                ? "bg-green-500"
                : "bg-zinc-700"}
            `}
          />
        ))}
      </div>
    </motion.article>
  );
}