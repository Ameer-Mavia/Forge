import { motion } from "framer-motion";

const clients = [
  "Lumina",
  "Vertex",
  "Ostrom",
  "Synthetix",
  "Quantum",
  "Aura",
  "Nova",
  "Prism"
];

const testimonials = [
  {
    quote: "FORGE didn't just redesign our product. They fundamentally reshaped how we think about our brand's digital presence. Their work is uncompromising.",
    author: "Elena Rostova",
    role: "CEO, Lumina Systems",
  },
  {
    quote: "The rarest combination of strategic brilliance and absolute technical mastery. They deliver digital experiences that feel ten years ahead of the curve.",
    author: "Marcus Chen",
    role: "Founder, Quantum Capital",
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-32 bg-background relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm uppercase tracking-widest font-medium mb-12"
          >
            Trusted By Industry Leaders
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-50">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-display font-bold tracking-tighter"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-32">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-primary text-6xl font-display leading-none absolute -top-8 -left-4 opacity-50">"</div>
              <blockquote className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </blockquote>
              <div>
                <div className="text-white font-medium uppercase tracking-wider text-sm">{testimonial.author}</div>
                <div className="text-white/40 text-sm mt-1">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
