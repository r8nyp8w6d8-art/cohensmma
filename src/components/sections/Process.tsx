const Process = () => {
  const steps = [
    {
      number: "01",
      title: "שיחת היכרות",
      description: "נכיר אתכם, נבין את העסק, המטרות והאתגרים. בלי התחייבות.",
    },
    {
      number: "02",
      title: "אסטרטגיה מותאמת",
      description: "נבנה תכנית פעולה ברורה עם יעדים מדידים ולוחות זמנים ריאליסטיים.",
    },
    {
      number: "03",
      title: "ביצוע ותוצאות",
      description: "נתחיל לעבוד. תראו תוצאות, תקבלו דיווחים, נצמח יחד.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 animate-fade-in-up">
            איך זה עובד
          </h2>
          <p className="text-body-lg text-muted-foreground animate-fade-in-up animate-fade-in-delay-1">
            תהליך פשוט, חד ויעיל
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-7xl font-bold text-primary/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-heading text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-l from-transparent via-border to-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
