import { Check, X } from "lucide-react";

const Fit = () => {
  // Function to add line breaks after periods
  const formatWithLineBreaks = (text: string) => {
    return text.split('.').filter(Boolean).map((sentence, index, arr) => (
      <span key={index}>
        {sentence.trim()}{index < arr.length - 1 ? '.' : ''}
        {index < arr.length - 1 && <br />}
      </span>
    ));
  };

  const fitItems = [
    {
      forYou: "אתה מבין שתקציב השיווק שלך הוא לא עוד הוצאה אלא השקעה.",
      notForYou: "אתה בוחר את איש השיווק שיעלה לך הכי פחות."
    },
    {
      forYou: "אתה מחפש שותף לטווח ארוך שיגדיל לך את ההכנסות בעקביות.",
      notForYou: "אתה מחפש נוסחאות קסם כדי להכפיל את ההכנסות שלך בשבוע הראשון."
    },
    {
      forYou: "אתה מאמין ששיווק טוב זה כל מה שהעסק שלך צריך כדי לקפוץ מדרגה.",
      notForYou: "אתה סקפטי, לא מאמין בשיווק וחושב שקופונים בעיתון הם הדבר האמיתי."
    },
    {
      forYou: "יש לך ראש פתוח ואתה מוכן לתת לאיש מקצוע להדריך אותך.",
      notForYou: "אתה כל כך מבין בשיווק שאתה יכול לפתוח משרד פרסום משלך."
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 animate-blur-in">
            בשבילכם או לא בשבילכם?
          </h2>
          <p className="text-body-lg text-muted-foreground animate-fade-in-up animate-fade-in-delay-1">
            אנחנו לא מתאימים לכולם.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-primary/30 animate-fade-in-up">
            <h3 className="text-heading text-primary mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              בשבילכם
            </h3>
            <ul className="space-y-4">
              {fitItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-body text-foreground animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{formatWithLineBreaks(item.forYou)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-border animate-fade-in-up animate-fade-in-delay-1">
            <h3 className="text-heading text-muted-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              לא בשבילכם
            </h3>
            <ul className="space-y-4">
              {fitItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-body text-muted-foreground animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  <span>{formatWithLineBreaks(item.notForYou)}</span>
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
