import { Zap, Target, Camera, Palette, Lightbulb, Instagram, User, RefreshCcw, ShoppingCart } from "lucide-react";
const Services = () => {
  // Function to add line breaks after periods
  const formatWithLineBreaks = (text: string) => {
    return text.split('.').filter(Boolean).map((sentence, index, arr) => <span key={index}>
        {sentence.trim()}{index < arr.length - 1 ? '.' : ''}
        {index < arr.length - 1 && <br />}
      </span>);
  };
  const services = [{
    icon: Zap,
    title: "אוטומציה",
    description: "בניית מערכות חכמות שחוסכות זמן וממירות לידים באופן אוטומטי."
  }, {
    icon: Target,
    title: "קמפיינים",
    description: "פרסום ממוקד שמביא את הקהל הנכון."
  }, {
    icon: Camera,
    title: "ימי צילום",
    description: "הפקת תוכן מותאם פלטפורמה שהופך צופים ללקוחות."
  }, {
    icon: Palette,
    title: "עיצוב גרפי",
    description: "בניית שפה ויזואלית אחידה שגורמת לאנשים לזכור את המותג שלך."
  }, {
    icon: Lightbulb,
    title: "אסטרטגיה",
    description: "מיפוי שוק, ניתוח מתחרים וביסוס תוכנית עסקית מותאמת אישית."
  }, {
    icon: Instagram,
    title: "ניהול סושיאל",
    description: "תוכן עקבי ואיכותי שבונה קהילה וזהות ייחודית."
  }, {
    icon: User,
    title: "משפיעניות",
    description: "פרסום דרך מובילי דעת קהל שיוצרים אמון מהיר אצל הלקוח."
  }, {
    icon: RefreshCcw,
    title: "רימרקטינג",
    description: "מערכת חכמה שלא משאירה פירורים על השולחן, נשארים בתודעה של הלקוח."
  }, {
    icon: ShoppingCart,
    title: "איקומרס",
    description: "הקמה ואופטימיזציה של חנויות אונליין ודפי נחיתה להגדלת המכירות."
  }];
  return <section id="services" className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 animate-blur-in">
            מה אנחנו עושים
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-fade-in-delay-1">
            ארגז הכלים שלנו.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => <div key={service.title} className="group p-6 glass-card rounded-xl border border-border hover:border-primary/50 card-hover animate-fade-in-up" style={{
          animationDelay: `${index * 0.08}s`
        }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {formatWithLineBreaks(service.description)}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;