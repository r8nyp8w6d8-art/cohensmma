import { Layers, Cpu, Target, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyUs = () => {
  const { ref, isVisible } = useScrollReveal();

  // Function to add line breaks after periods
  const formatWithLineBreaks = (text: string) => {
    return text.split('.').filter(Boolean).map((sentence, index, arr) => (
      <span key={index}>
        {sentence.trim()}{index < arr.length - 1 ? '.' : ''}
        {index < arr.length - 1 && <br />}
      </span>
    ));
  };
  
  const reasons = [
    {
      icon: Layers,
      title: "מערכת 360°",
      description: "אנחנו לא נותנים לך רק פוסט או קמפיין. אנחנו בונים לך מכונה שלמה שמתפקדת בצורה אוטונומית – מהרגע שהלקוח רואה את המודעה, דרך הנחיתה באתר, ועד הרגע שבו הוא הופך ללקוח משלם. הכל מחובר, הכל מתואם, ואין פירורים על השולחן."
    },
    {
      icon: Cpu,
      title: "הטכנולוגיה של המחר",
      description: "אנחנו משתמשים בכלי AI מתקדמים כדי לייעל את כל התהליכים, מניתוח השוק ועד יצירת התוכן. זה מאפשר לנו לעבוד מהר יותר, לחסוך עלויות ולהגיע לתוצאות שסוכנויות מסורתיות לא יכולות להתקרב אליהן."
    },
    {
      icon: Target,
      title: "אנחנו לא עובדים עם כל אחד",
      description: "אנחנו בררנים. מאוד. כי כשנכנס לקוח חדש – אנחנו נכנסים בראש. אנחנו לא פה לייצר כמויות אלא איכות. כל עסק שנכנס אלינו מקבל תשומת לב מלאה ומחויבות לתוצאות. אם אנחנו לא מתאימים לך – נגיד לך את זה ישר."
    },
    {
      icon: Eye,
      title: "אמת, שקיפות וחזון",
      description: "אין פה עשן ומראות. אתה יודע בדיוק מה קורה עם הכסף שלך, מה עובד ומה לא, ואיפה אנחנו מתכננים לקחת אותך. אנחנו לא מוכרים חלומות – אנחנו מייצרים תוכניות, מבצעים, ומראים תוצאות."
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
            מה מבדיל אותנו מכל השאר.
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
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-subheading text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {formatWithLineBreaks(reason.description)}
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
