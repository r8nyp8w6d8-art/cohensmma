import { Phone, Lightbulb, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Process = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "שיחת היכרות",
      description: "נכיר אתכם, נבין את העסק, המטרות והאתגרים. בלי התחייבות.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "אסטרטגיה מותאמת",
      description: "נבנה תכנית פעולה ברורה עם יעדים מדידים ולוחות זמנים ריאליסטיים.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "ביצוע ותוצאות",
      description: "נתחיל לעבוד. תראו תוצאות, תקבלו דיווחים, נצמח יחד.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-display mb-4">
            איך זה עובד
          </h2>
          <p className="text-body-lg text-muted-foreground">
            תהליך פשוט, חד ויעיל
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-3 gap-8 stagger-reveal ${isVisible ? 'visible' : ''}`}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative glass-card rounded-xl p-8 border border-border card-hover"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Large step number */}
              <div className="text-7xl md:text-8xl font-extrabold text-primary/20 mb-4 leading-none">
                {step.number}
              </div>
              
              {/* Large icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-heading text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
