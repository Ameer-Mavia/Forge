export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-white z-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display font-bold tracking-tighter">
            FORGE.
          </div>
          
          <div className="flex gap-8">
            {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-sm font-medium text-white/50 hover:text-white uppercase tracking-wider transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-light uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} FORGE AGENCY LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
