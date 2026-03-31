import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    description: "Visual systems that communicate authority. We forge identities that command attention and stand the test of time.",
    number: "01"
  },
  {
    title: "Digital Experience",
    description: "Immersive, high-performance websites and applications. Pixel-perfect execution meets fluid motion.",
    number: "02"
  },
  {
    title: "Product Strategy",
    description: "Roadmaps for growth. We align business objectives with user needs to build products that scale.",
    number: "03"
  },
  {
    title: "Transformation",
    description: "Modernizing legacy systems. Bringing established enterprises into the vanguard of digital innovation.",
    number: "04"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight"
            >
              Capabilities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-lg md:text-xl font-light"
            >
              We don't offer menus. We offer specialized expertise designed to solve high-stakes challenges.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background group p-12 md:p-16 relative overflow-hidden flex flex-col"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-white/30 font-display text-2xl font-light">{service.number}</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-white text-black">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-3xl font-display font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
