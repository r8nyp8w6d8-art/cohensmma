import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 bg-card border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-1.5 text-lg font-bold tracking-wide">
          <span className="text-primary">SMMA</span>
          <span className="text-foreground">COHEN</span>
        </div>

        {/* Social icon buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/cohensmma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center icon-btn hover:bg-primary/20"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-muted-foreground" />
          </a>
          <a
            href="https://wa.me/972559310292"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center icon-btn hover:bg-primary/20"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
          </a>
          <a
            href="mailto:cohensmma@gmail.com"
            className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center icon-btn hover:bg-primary/20"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>

        <span className="text-body-sm text-muted-foreground">
          © {new Date().getFullYear()} COHEN SMMA
        </span>
      </div>
    </footer>
  );
};

export default Footer;
