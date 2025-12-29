import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="text-foreground font-bold tracking-wide text-lg">
        COHEN <span className="font-normal text-muted-foreground">SMMA</span>
      </div>
      
      <Button 
        variant="hero-outline" 
        size="sm" 
        onClick={scrollToContact}
      >
        צרו קשר
      </Button>
    </header>
  );
};

export default Header;
