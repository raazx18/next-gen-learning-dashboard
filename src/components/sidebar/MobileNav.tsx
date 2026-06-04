"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      z-50
      bg-zinc-950
      border-t
      border-zinc-800
      flex
      justify-around
      py-3
    "
    >
      <Home size={20} />
      <BookOpen size={20} />
      <BarChart3 size={20} />
      <Settings size={20} />
    </nav>
  );
}