import { CheckCircle } from "lucide-react";
const WhyUs = () => {
  const reasons = [{
    title: "ניסיון אמיתי בשטח",
    description: "ניסיון עם עשרות מיליוני צפיות אורגניות, ניהול חנויות אונליין והקמת מותגים מאפס."
  }, {
    title: "ביצוע, לא רק תכנון",
    description: "אנחנו לא מסתפקים בלהגיד מה לעשות – אנחנו עושים. יד ביד עם בעלי העסקים."
  }, {
    title: "יצירתיות עם כיוון עסקי",
    description: "תוכן יפה זה לא מספיק. אנחנו בונים תוכן שמניע פעולה ומייצר תוצאות."
  }, {
    title: "גישה בוטיק ואישית",
    description: "עובדים עם מספר מצומצם של לקוחות. כל לקוח מקבל תשומת לב מלאה."
  }, {
    title: "תקשורת שקופה",
    description: "אין הפתעות. דיווחים ברורים, זמינות גבוהה ושיתוף פעולה צמוד."
  }];
  return <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 animate-fade-in-up">
            למה COHEN SMMA
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-fade-in-delay-1">
            ניסיון, יעילות, תוצאות   
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => <div key={reason.title} className="flex gap-4 animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-subheading text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyUs;