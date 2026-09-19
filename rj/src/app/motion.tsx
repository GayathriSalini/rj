"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** One easing curve for the whole site, so nothing feels like a different app. */
const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Fades and lifts once, when it first scrolls into view. */
export function Rise({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  const M = motion[as];
  const still = useReducedMotion();
  return (
    <M
      className={className}
      variants={rise}
      initial={still ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </M>
  );
}

/** Parent that walks its <Rise> children in one after another. */
export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const still = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={still ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ show: { transition: { staggerChildren: still ? 0 : gap } } }}
    >
      {children}
    </motion.div>
  );
}

/** A child of <Stagger>; inherits the parent's timing. */
export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={rise}>
      {children}
    </motion.div>
  );
}

/**
 * Headline that assembles word by word. Each word sits in its own clipping
 * row and slides up, which reads far cleaner than fading the whole block.
 */
export function Headline({
  text,
  className,
  italicFrom,
}: {
  text: string;
  className?: string;
  /** Word index from which the rest of the line is set in italic accent. */
  italicFrom?: number;
}) {
  const words = text.split(" ");
  const still = useReducedMotion();
  return (
    <motion.h2
      className={className}
      initial={still ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: still ? 0 : 0.055 } } }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "105%" },
              show: { y: 0, transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {italicFrom !== undefined && i >= italicFrom ? <em>{word}</em> : word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

/** Image that eases out of a slight over-scale as it enters — a quiet Ken Burns. */
export function Reveal({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}) {
  const still = useReducedMotion();
  return (
    <motion.figure
      className={className}
      initial={still ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } }}
    >
      <motion.img
        src={src}
        alt={alt}
        variants={{
          hidden: { scale: 1.14 },
          show: { scale: 1, transition: { duration: 1.4, ease: EASE } },
        }}
      />
      {children}
    </motion.figure>
  );
}
