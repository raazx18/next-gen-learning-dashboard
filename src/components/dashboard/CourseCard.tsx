"use client";

import { motion } from "framer-motion";
import { item } from "./DashboardAnimations";
import { Course } from "@/types/course";
import {
  Code,
  Rocket,
  Palette,
  Database,
  Layers,
  Network,
  Server,
  Code2,
} from "lucide-react";
const iconMap = {
  Code,
  Rocket,
  Palette,
  Database,
  Layers,
  Network,
  Server,
  Code2,
};

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
    const Icon =
  iconMap[course.icon_name as keyof typeof iconMap] || Code;
  return (
    <motion.article
    variants={item}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      rounded-3xl
      border border-zinc-800
hover:border-cyan-500/40
bg-zinc-900/60
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
      p-6
      overflow-hidden
      relative
    "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
  <Icon className="w-5 h-5 text-cyan-400" />

  <h3 className="font-semibold">
    {course.title}
  </h3>
</div>
        
        
        <div className="mt-6">
          <div className="h-2 rounded-full bg-zinc-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="
                h-2
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-violet-500
              "
            />
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            {course.progress}% Complete
          </p>
        </div>
      </div>
    </motion.article>
  );
}