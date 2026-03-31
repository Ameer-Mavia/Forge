import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black uppercase tracking-tighter mb-8 leading-[0.9]"
            >
              Have a<br/> Vision?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black/80 text-xl md:text-2xl font-medium max-w-md mb-12"
            >
              We're currently taking on new projects for Q3 2025. Let's build something exceptional together.
            </motion.p>
            
            <motion.a
              href="mailto:hello@forge.agency"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 text-3xl md:text-4xl font-display font-bold text-black border-b-2 border-black pb-2 hover:opacity-70 transition-opacity"
              data-testid="link-email"
            >
              hello@forge.agency
              <span className="text-2xl">&rarr;</span>
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full max-w-md lg:ml-auto"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-black/30 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-colors font-medium text-lg"
                  data-testid="input-name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-black/30 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-colors font-medium text-lg"
                  data-testid="input-email"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Project details" 
                  rows={4}
                  className="w-full bg-transparent border-b border-black/30 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-colors font-medium text-lg resize-none"
                  data-testid="input-details"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-primary font-bold uppercase tracking-widest py-5 hover:bg-black/90 transition-colors"
                data-testid="btn-submit-contact"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
