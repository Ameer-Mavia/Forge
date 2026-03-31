import { motion } from "framer-motion";

const processSteps = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your business model, audience, and market positioning. We don't write a line of code until we understand exactly what we're solving."
  },
  {
    phase: "02",
    title: "Concept & Identity",
    description: "Exploring visual directions. Establishing the typography, color theory, and motion language that will define your brand's digital presence."
  },
  {
    phase: "03",
    title: "System Design",
    description: "Building the component library and architectural foundation. Translating concepts into robust, scalable design systems."
  },
  {
    phase: "04",
    title: "Engineering",
    description: "Pixel-perfect execution. We write clean, performant code focused on speed, accessibility, and flawless animations."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
            Methodology
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            A rigid process creates predictable results. We rely on a proven framework to deliver exceptional work on time, every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-l border-white/10 pl-8 pb-12 last:pb-0"
            >
              <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] bg-primary rounded-full"></div>
              
              <div className="text-primary font-display text-xl font-light mb-4">{step.phase}</div>
              <h3 className="text-2xl font-display font-medium text-white mb-4">{step.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
