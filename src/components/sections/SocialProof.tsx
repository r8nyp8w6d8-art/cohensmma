const SocialProof = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-display text-center mb-16 animate-blur-in">
          תוצאות מדברות בשטח
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left stats */}
          <div className="space-y-8 animate-fade-in-up animate-fade-in-delay-1">
            <div className="glass-card p-6 rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">5M+</div>
              <p className="text-muted-foreground">צפיות אורגניות</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">פרויקטים שהושלמו</p>
            </div>
          </div>

          {/* Center screenshot placeholder */}
          <div className="animate-fade-in-up animate-fade-in-delay-2">
            <div className="aspect-[9/16] max-h-[500px] mx-auto glass-card rounded-2xl border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">Screenshot Placeholder</p>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="space-y-8 animate-fade-in-up animate-fade-in-delay-3">
            <div className="glass-card p-6 rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="text-muted-foreground">גידול ממוצע בחשיפה</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">דירוג לקוחות</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
