import { Check, X } from "lucide-react";

const Fit = () => {
  const forYou = [
    "בעלי עסקים שמוכנים להשקיע בנוכחות דיגיטלית אמיתית",
    "מי שמחפש שותף לטווח ארוך, לא פתרון קסם חד פעמי",
    "עסקים עם מוצר או שירות טוב שמוכנים לצמוח",
    "מי שפתוח לשיתוף פעולה ותקשורת רציפה",
  ];

  const notForYou = [
    "מי שמחפש הבטחות לתוצאות תוך שבוע",
    "מי שרוצה הכל בזול ומהר",
    "מי שלא מוכן להשקיע זמן בתהליך",
    "מי שמחפש רק ויראליות ללא תוכנית עסקית",
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 animate-fade-in-up">
            בשבילכם או לא בשבילכם?
          </h2>
          <p className="text-body-lg text-muted-foreground animate-fade-in-up animate-fade-in-delay-1">
            אנחנו לא מתאימים לכולם.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background p-8 rounded-2xl border border-primary/20 animate-fade-in-up">
            <h3 className="text-heading text-primary mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              בשבילכם
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background p-8 rounded-2xl border border-border animate-fade-in-up animate-fade-in-delay-1">
            <h3 className="text-heading text-muted-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              לא בשבילכם
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-muted-foreground">
                  <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fit;
