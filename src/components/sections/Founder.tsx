import { useScrollReveal } from "@/hooks/useScrollReveal";
import founderPortrait from "@/assets/founder-portrait.jpeg";

const Founder = () => {
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

  const founderText = `נעים מאוד, איתן כהן. התחלתי בגיל 18 עם מחשב נייד ורעיון. לאורך הדרך ראיתי סביבי מתחרים שהיו פופולריים הרבה יותר ממני, לא כי הם היו טובים או זולים יותר - אלא כי המערך השיווקי שלהם היה חזק יותר. באותם ימים לא יכולתי להרשות לעצמי להקים צוות של פרילנסרים שיצלמו, יערכו, וינהלו את הסושיאל ואת הקמפיינים שלי. ובטח שלא היו לי עשרות אלפי שקלים בחודש לשלם למשרד פרסום. ולכן נותרתי עם ברירה אחת - ללמוד איך לשווק בעצמי. מאז עברו 5 שנים במהלכן הקמתי מותגי איקומרס מאפס, ניהלתי תקציבים לקמפיינים מהכיס שלי, הוצאתי לפועל מהלכים שיווקיים שהניבו מאות אלפי שקלים, ובניתי מותג אישי שצבר מיליוני צפיות אורגניות בתוך חודשים ספורים. Cohen SMMA הוקמה כדי לתת לבעלי עסקים היום את מה שאני הייתי צריך אז: מערכת שיווקית יעילה ומדוייקת, שתדאג ששום דבר כבר לא יפריד בינך לבין מימוש הפוטנציאל של העסק שלך.`;

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          {/* Portrait */}
          <div className="order-1 md:order-2">
            <div 
              className="aspect-[3/4] glass-card rounded-2xl border border-border overflow-hidden"
              style={{ transitionDelay: isVisible ? '0.1s' : '0s' }}
            >
              <img 
                src={founderPortrait} 
                alt="איתן כהן - Founder of COHEN SMMA" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 md:order-1 space-y-6">
            <div>
              {/* Prominent pulsing Founder tag */}
              <span className="inline-block px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-full mb-6 pulse-glow">
                Founder
              </span>
              <h2 className="text-display text-foreground">
                איתן כהן
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-body text-muted-foreground leading-relaxed">
                {formatWithLineBreaks(founderText)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
