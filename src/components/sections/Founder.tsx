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

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          {/* Portrait placeholder */}
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
              <p className="text-body text-foreground leading-relaxed">
                {formatWithLineBreaks("ב-2020, כשהעולם עצר מלכת והעסקים עברו לאונליין בין לילה – אני הייתי שם. התחלתי בגיל 18, עם מחשב נייד ורעיון.")}
              </p>
              
              <p className="text-body text-muted-foreground leading-relaxed">
                {formatWithLineBreaks("בלי קשרים ובלי תקציבים, ייסדתי מותגי e-commerce מאפס, ניהלתי קמפיינים שייצרו עשרות אלפי שקלים, ובניתי מותג אישי שצבר מיליוני צפיות תוך חודשים ספורים.")}
              </p>
              
              <p className="text-body text-muted-foreground leading-relaxed">
                {formatWithLineBreaks("זיהיתי בעיה חוזרת – \"טלפון שבור\". עסקים עם ערך אמיתי שורפים כסף כי האתר לא מתכתב עם הקמפיין, והסושיאל לא מתכתב עם הקריאייטיב.")}
              </p>
              
              <p className="text-body text-foreground font-medium leading-relaxed">
                {formatWithLineBreaks("הבנתי ששיווק טוב מצריך מערכת אחת חדה וחכמה. Cohen SMMA היא המערכת הזו.")}
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {formatWithLineBreaks("ראש אחד שרואה את התמונה המלאה – מהאסטרטגיה, לבניית האתר ועד לימי הצילום. הכל נבנה באמצעות אותן הידיים כדי לעבוד בסנכרון מוחלט.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
