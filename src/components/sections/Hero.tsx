import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById("founder");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 bg-background relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-display-xl mb-6 animate-blur-in">
          נוכחות דיגיטלית שמביאה{" "}
          <span className="text-primary">לקוחות אמיתיים</span>
        </h1>

        <p className="mb-4 animate-fade-in-up animate-fade-in-delay-1 text-heading text-foreground">
          במקרה הטוב הפרסום שלך גרוע.
          <br />
          במקרה הרע הוא בכלל לא קיים.
        </p>

        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-fade-in-delay-2">
          אנחנו בונים לעסקים נוכחות ברשתות החברתיות שמייצרת אמון, חשיפה ותוצאות
          שבאות לידי ביטוי במחזורים החודשיים -{" "}
          <strong className="text-foreground">לא בכמות הלייקים.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-fade-in-delay-3">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="group btn-scale"
          >
            בואו נדבר
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Button>

          <Button
            variant="hero-outline"
            size="lg"
            onClick={scrollToServices}
            className="btn-scale"
          >
            מה אנחנו עושים
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in animate-fade-in-delay-4"
      >
        <span className="text-body-sm">גלול למטה</span>
        <ChevronDown className="w-5 h-5 animate-bounce-slow" />
      </button>
    </section>
  );
};

export default Hero;
