import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyUs = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const reasons = [
    {
      title: "ראש אחד, מערכת שלמה",
      description: "אתם מדברים עם מי שמבצע. בלי טלפונים שבורים, בלי תירוצים, בלי ״זה לא הצד שלי״."
    },
    {
      title: "תוצאות מדידות",
      description: "כל שקל שמושקע עובד. דוחות שקופים, מספרים אמיתיים, ללא עשן ומראות."
    },
    {
      title: "התאמה מלאה לעסק",
      description: "לא מכניסים אתכם לתבנית. בונים אסטרטגיה שמתאימה לקהל, לתקציב ולמטרות שלכם."
    },
    {
      title: "זמינות ותקשורת",
      description: "אנחנו פה. עונים מהר, מעדכנים שוטף, ובונים יחסי עבודה ארוכי טווח."
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-display mb-4">
            למה COHEN SMMA
          </h2>
          <p className="text-body-lg text-muted-foreground">
            מה מבדיל אותנו מכל השאר
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 stagger-reveal ${isVisible ? 'visible' : ''}`}
        >
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 glass-card rounded-xl border border-border card-hover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-subheading text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
