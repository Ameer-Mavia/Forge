import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest text-white/70 mb-8 backdrop-blur-sm bg-white/5"
        >
          Creative Digital Agency
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold text-white leading-[0.9] tracking-tighter mb-6 text-balance"
        >
          WE FORGE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic font-medium">LEGACIES</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light tracking-wide text-balance mb-12"
        >
          We build digital experiences for ambitious brands that refuse to blend in. Strategy, identity, and engineering crafted with intent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button 
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-white text-black font-semibold overflow-hidden flex items-center gap-3 uppercase tracking-wider text-sm"
            data-testid="btn-hero-work"
          >
            <span className="relative z-10">View Selected Work</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 delay-100">&rarr;</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/30 rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "linear" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
