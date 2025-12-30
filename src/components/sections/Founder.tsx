const Founder = () => {
  return <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <div className="order-1 md:order-2 animate-fade-in-up">
            <div className="aspect-[3/4] glass-card rounded-2xl border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">Portrait Placeholder</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Founder
              </span>
              <h2 className="text-display text-foreground">
                נעים מאוד, איתן כהן   
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-body text-foreground animate-fade-in-up animate-fade-in-delay-1">
                       התחלתי בגיל 18, עם מחשב נייד ורעיון. 
ב-2020, כשהעולם עצר מלכת והעסקים עברו לאונליין בין לילה – אני הייתי שם. 
              </p>
              
              <p className="text-body text-muted-foreground animate-fade-in-up animate-fade-in-delay-2">
                בלי קשרים ובלי תקציב, ייסדתי וניהלתי מותגי
 e-commerce מאפס, ניהלתי קמפיינים שייצרו עשרות אלפי שקלים, ובניתי מותג אישי שצבר מיליוני צפיות תוך חודשים ספורים.
              </p>
              
              <p className="text-body text-muted-foreground animate-fade-in-up animate-fade-in-delay-3">
                זיהיתי בעיה חוזרת – "טלפון שבור". עסקים עם ערך אמיתי שורפים כסף כי האתר לא מתכתב עם הקמפיין, והסושיאל לא מתכתב עם הקריאייטיב.
              </p>
              
              <p className="text-body text-foreground font-medium animate-fade-in-up animate-fade-in-delay-4">
                הבנתי ששיווק טוב מצריך מערכת אחת חדה וחכמה. Cohen SMMA היא המערכת הזו.
              </p>
            </div>

            <div className="pt-4 border-t border-border animate-fade-in-up animate-fade-in-delay-5">
              <p className="text-body-sm text-muted-foreground">
                ראש אחד שרואה את התמונה המלאה – מהאסטרטגיה, לבניית האתר ועד לימי הצילום. הכל נבנה באמצעות אותן הידיים כדי לעבוד בסנכרון מוחלט.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Founder;