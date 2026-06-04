"use client";

import { motion } from "framer-motion";

export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

export const MotionDiv = motion.div;