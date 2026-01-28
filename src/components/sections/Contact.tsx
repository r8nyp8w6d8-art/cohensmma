import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-section bg-primary">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`flex flex-col items-center text-center scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-display text-primary-foreground mb-8">
            מוכנים להתחיל?
          </h2>

          {/* Large WhatsApp CTA Button */}
          <a
            href="https://wa.me/972559310292"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10"
          >
            <Button
              variant="hero"
              size="xl"
              className="bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90 rounded-xl px-12 py-6 text-xl btn-scale"
            >
              בואו נדבר בוואטסאפ
            </Button>
          </a>

          {/* Social icon buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/cohensmma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl flex items-center justify-center icon-btn hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-primary-foreground" />
            </a>
            <a
              href="mailto:cohensmma@gmail.com"
              className="w-14 h-14 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl flex items-center justify-center icon-btn hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
