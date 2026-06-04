"use client";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  PanelLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
  className={`
    hidden md:flex
    flex-col
    h-screen
    bg-zinc-950
    border-r
    border-zinc-800
    p-4
    transition-all
    duration-300
    ${collapsed ? "w-20" : "w-64"}
  `}
>
    <button
  onClick={() => setCollapsed(!collapsed)}
  className="
    mb-6
    flex
    items-center
    justify-center
    rounded-lg
    p-2
    hover:bg-zinc-800
  "
>
  <PanelLeft />
</button>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative flex items-center gap-3 p-3 rounded-xl w-full"
          >
            {active === item.name && (
              <motion.div
                layoutId="active-nav"
                className="absolute inset-0 rounded-xl bg-zinc-800"
              />
            )}

            <Icon className="relative z-10 w-5 h-5" />

            {!collapsed && (
  <span className="relative z-10">
    {item.name}
  </span>
)}
          </button>
        );
      })}
    </nav>
  );
}