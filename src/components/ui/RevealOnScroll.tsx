"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ANIMATION } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `-${ANIMATION.scrollRevealOffset}px`,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: ANIMATION.durationNormal,
        delay,
        ease: ANIMATION.easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}
