"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
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
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: `-${ANIMATION.scrollRevealOffset}px`,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      animate={shouldReduce || isInView ? { opacity: 1, y: 0 } : {}}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: ANIMATION.durationNormal, delay, ease: ANIMATION.easeOutExpo }
      }
    >
      {children}
    </motion.div>
  );
}
