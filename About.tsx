import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8"
            >
              The Studio
            </motion.h2>
            
            <div className="hidden lg:block space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-display font-light text-primary mb-2">2018</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Est. New York</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl font-display font-light text-primary mb-2">40+</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Industry Awards</div>
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg md:prose-xl max-w-none text-white/70 font-light"
            >
              <p className="text-white text-2xl md:text-3xl leading-snug mb-12 font-medium">
                We are a collective of designers, engineers, and strategists building the next generation of digital products.
              </p>
              
              <p className="mb-8">
                At FORGE, we believe that great design is inherently invisible. It's the absence of friction. It's the quiet confidence that a product knows exactly what the user needs before they do.
              </p>
              
              <p>
                We don't do templates. We don't do "good enough". We partner with founders who are trying to build category-defining companies, and we provide them with the visual and technical foundation to achieve that. Our work is deliberate, precise, and engineered to scale.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-wrap gap-4"
            >
              {['Design Systems', 'React / Next.js', 'WebGL & Canvas', 'Brand Architecture', 'Framer Motion', 'Tailwind CSS'].map((tag) => (
                <div key={tag} className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60">
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
