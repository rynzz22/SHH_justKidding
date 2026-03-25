/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden select-none gap-8">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-white text-4xl md:text-6xl font-black tracking-tighter text-center px-4"
      >
        PAKYUUU HAHAHAHAHAHA
      </motion.h1>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.6
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="text-[15rem] md:text-[25rem] leading-none cursor-pointer drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        aria-label="Middle Finger Emoji"
      >
        🖕
      </motion.div>
    </div>
  );
}
