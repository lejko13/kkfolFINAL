import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from "react-responsive";

export default function SectionLabel({ label, title, description, center = true }) {


   const isDesktop = useMediaQuery({
      query: "(min-width: 700px)",
    });
  


  return (
  <motion.div
  initial={isDesktop ? { opacity: 0, y: 30 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true, margin: "-80px" } : undefined}
  transition={isDesktop ? { duration: 0.6 } : undefined}
  className={`mb-14 ${center ? "text-center" : ""}`}
>
  <span
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-4"
    style={{
      border: "1px solid rgba(204,1,0,0.2)",
      background: "rgba(204,1,0,0.06)",
      color: "#CC0100",
    }}
  >
    <span
      className="w-1 h-1 rounded-full"
      style={{ background: "#CC0100" }}
    />
    {label}
  </span>

  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold tracking-tight text-white mb-4">
    {title}
  </h2>

  {description && (
    <p
      className={`text-base lg:text-lg leading-relaxed ${
        center ? "max-w-2xl mx-auto" : ""
      }`}
      style={{ color: "rgba(255,255,255,0.45)" }}
    >
      {description}
    </p>
  )}
</motion.div>
  );
}