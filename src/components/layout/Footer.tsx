const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 bg-foreground">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-lg font-bold tracking-wide">
          <span className="text-primary">SMMA</span>
          <span className="text-background">COHEN</span>
        </div>
        
        <div className="flex items-center gap-6 text-body-sm text-background/60">
          <a 
            href="https://instagram.com/cohensmma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-background transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://wa.me/972559310292" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-background transition-colors"
          >
            WhatsApp
          </a>
          <span>© {new Date().getFullYear()} COHEN SMMA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
