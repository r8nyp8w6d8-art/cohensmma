const ThreeWorlds = () => {
  const worlds = [
    {
      title: "אסטרטגיה",
      description: "מיפוי שוק ומתחרים, הגדרת קהלי יעד, בניית משפכים שיווקיים, תכנון צמיחה לטווח ארוך. הבסיס שעליו הכל נשען.",
    },
    {
      title: "ביצוע קריאייטיבי",
      description: "ימי צילום והפקות ויזואליות ברמה קולנועית, עריכת וידאו לפלטפורמות השונות, עיצוב גרפי ובניית שפה חזותית, ניהול תוכן וקמפיינים עם משפיעניות.",
    },
    {
      title: "המרה וצמיחה",
      description: "קמפיינים ממומנים ממוקדים, רימרקטינג חכם שלא משאיר כסף על השולחן, אוטומציות שחוסכות זמן, בנייה ואופטימיזציה של חנויות איקומרס.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl">
        <h2 className="text-display mb-16 animate-fade-in-up">
          שלושה עולמות,<br />
          ראש אחד
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {worlds.map((world, index) => (
            <div 
              key={world.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-subheading text-foreground mb-4">
                {world.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {world.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeWorlds;
