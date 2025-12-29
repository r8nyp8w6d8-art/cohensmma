const Fit = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-section border-t border-border">
      <div className="max-w-4xl">
        <h2 className="text-display mb-16 animate-fade-in-up">
          בשבילך או לא
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="animate-fade-in-up">
            <h3 className="text-subheading text-foreground mb-6">
              כן, אם
            </h3>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>יש לך מוצר או שירות טוב, ואתה מוכן להשקיע בנוכחות דיגיטלית אמיתית.</p>
              <p>אתה מחפש שותף לטווח ארוך, לא פתרון קסם חד פעמי.</p>
              <p>אתה פתוח לתהליך, לשיתוף פעולה, ולתקשורת רציפה.</p>
            </div>
          </div>
          
          <div className="animate-fade-in-up animate-fade-in-delay-1">
            <h3 className="text-subheading text-foreground mb-6">
              לא, אם
            </h3>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>אתה מחפש הבטחות לתוצאות תוך שבוע.</p>
              <p>אתה רוצה הכל בזול ומהר.</p>
              <p>אתה לא מוכן להשקיע זמן ותשומת לב בתהליך.</p>
              <p>אתה מחפש רק ויראליות ללא תוכנית עסקית מאחורי.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fit;
