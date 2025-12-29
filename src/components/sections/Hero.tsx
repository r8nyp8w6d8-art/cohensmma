import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <p className="text-muted-foreground text-body mb-6 animate-fade-in-up">
          COHEN SMMA
        </p>
        
        <h1 className="text-display-xl mb-8 animate-fade-in-up animate-fade-in-delay-1">
          מערכות שיווק<br />
          שמייצרות צמיחה
        </h1>
        
        <p className="text-body-lg text-muted-foreground max-w-2xl mb-12 animate-fade-in-up animate-fade-in-delay-2">
          לא ניהול סושיאל. לא עוד סוכנות. מערכת אחת מסונכרנת שמחברת אסטרטגיה, תוכן והמרה — תחת ראש אחד שרואה את התמונה המלאה.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-fade-in-delay-3">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            בואו נדבר
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Button>
          
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => {
              const systemSection = document.getElementById("system");
              if (systemSection) {
                systemSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            מה זה בעצם אומר
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
