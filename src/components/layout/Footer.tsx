const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-foreground font-bold tracking-wide text-lg">
          COHEN <span className="font-normal text-muted-foreground">SMMA</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-body-sm text-muted-foreground">
          <a 
            href="https://instagram.com/cohensmma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <span className="hidden md:inline text-border">|</span>
          <span>© {new Date().getFullYear()} COHEN SMMA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
