'use client';
import { motion } from "framer-motion";
import React from "react";

export const BackgroundCellCore = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {/* Grid */}
      <div className="absolute h-full w-full bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] [background-size:16px_16px]"></div>
      {/* Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_center,rgba(40,150,255,0.4)_0%,rgba(40,150,255,0)_50%)]"
        style={{
          backgroundSize: "400% 400%",
          animation: "glow 8s linear infinite",
        }}
      />
    </div>
  );
};