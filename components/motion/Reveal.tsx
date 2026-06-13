"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.25, delay },
        },
      }
    : {
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: easeOut, delay },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, ...props }: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0.04 : 0.12,
        delayChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, y = 24, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.65, ease: easeOut },
        },
      };

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
