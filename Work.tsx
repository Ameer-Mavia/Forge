import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Aura Fintech",
    category: "Product Design • Development",
    image: "/projects/project-1.png",
    color: "from-[#1a1a1a] to-black"
  },
  {
    id: 2,
    title: "Maison Archive",
    category: "E-Commerce • Brand Identity",
    image: "/projects/project-2.png",
    color: "from-[#f5f5f5] to-[#e5e5e5]"
  },
  {
    id: 3,
    title: "Vanguard EV",
    category: "Interface • Motion",
    image: "/projects/project-3.png",
    color: "from-[#0d1117] to-black"
  },
  {
    id: 4,
    title: "Nexus Data",
    category: "B2B SaaS • System Architecture",
    image: "/projects/project-4.png",
    color: "from-[#1c1917] to-black"
  }
];

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="work" className="py-32 bg-background relative z-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
            Selected Work
          </h2>
          <div className="w-full h-px bg-white/10"></div>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-b border-white pb-1 text-white font-medium uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors duration-300"
            data-testid="btn-view-all-work"
          >
            View Full Archive
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.5]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className="group cursor-pointer block"
      data-testid={`project-card-${project.id}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-3xl md:text-5xl font-display font-medium text-white group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          <span className="text-white/40 uppercase tracking-widest text-sm font-medium">
            {project.category}
          </span>
        </div>
        
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-white/5">
          {/* Fallback pattern in case image fails */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[gradient_3s_linear_infinite]" />
          
          <motion.img 
            style={{ y, scale }}
            src={project.image} 
            alt={project.title}
            className="absolute inset-[-10%] w-[120%] h-[120%] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          {/* Overlay hover effect */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
          
          {/* Hover Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
            <div className="px-8 py-4 bg-black/50 backdrop-blur-md border border-white/20 text-white font-display uppercase tracking-widest text-sm rounded-full">
              View Case Study
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
