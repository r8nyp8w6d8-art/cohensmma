import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-display-xl mb-6 animate-fade-in-up">
          נוכחות דיגיטלית שמביאה{" "}
          <span className="text-primary">לקוחות אמיתיים</span>
        </h1>
        
        <p className="text-muted-foreground mb-4 animate-fade-in-up animate-fade-in-delay-1 text-heading">
          במקרה הטוב הפרסום שלך גרוע. במקרה הרע הוא בכלל לא קיים.
        </p>
        
        <p className="text-body-lg text-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-fade-in-delay-2">
          אנחנו בונים לעסקים נוכחות ברשתות החברתיות שמייצרת אמון, חשיפה ותוצאות עסקיות. 
          לא מדדי יהירות – <strong>תוצאות אמיתיות.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-fade-in-delay-3">
          <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
            בואו נדבר
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Button>
          
          <Button variant="hero-outline" size="lg" onClick={scrollToServices}>
            מה אנחנו עושים
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;