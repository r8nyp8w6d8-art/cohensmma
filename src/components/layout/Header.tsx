import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between bg-background/80 backdrop-blur-xl border-b border-border/50">
      <a
        href="https://wa.me/972559310292"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="hero"
          size="sm"
          className="btn-scale"
        >
          צרו קשר
        </Button>
      </a>

      <div className="flex items-center gap-1.5 text-lg font-bold tracking-wide">
        <span className="text-primary">SMMA</span>
        <span className="text-foreground">COHEN</span>
      </div>
    </header>
  );
};

export default Header;
