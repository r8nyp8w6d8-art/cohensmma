import { Layers, Cpu, Star, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyUs = () => {
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
  
  const reasons = [
    {
      icon: Layers,
      title: "מערכת 360°",
      description: "אנחנו עושים עבורך הכל, מהחזון-עד לביצוע. מהעיצוב הגרפי אל הצילום ועריכת הוידאו. מניהול הסושיאל אל הקמפיינים הממומנים. מבניית האסטרטגיה השיווקית אל יצירת דפי הנחיתה, מקמפיין משפיעניות ועד לרימרקטינג ואוטומציה. מה עוד אפשר כבר לבקש? קפה? מסאז'? צ'סר?"
    },
    {
      icon: Cpu,
      title: "הטכנולוגיה של המחר, היום",
      description: "בעידן שבו המרחב הדיגיטלי משתנה בכל יום, אתה רוצה לצידך איש שיווק שיודע לעבוד עם הכלים המתקדמים ביותר, לא משרד מיושן שעד שילמד את הצוות שלו מערכת חדשה, כבר תצא לה עדכון גרסה. אני צעיר, גדלתי עם הסמארטפון ביד ועם האינטרנט בקצות האצבעות שלי, אני מכיר את הפלטפורמות ומדבר את השפה שלהן, הידע שלי בשילוב הכלים החדשניים איתם אני עובד יוצרים בדיוק את היתרון התחרותי שאני יודע לתת לעסק שלך על שאר השוק."
    },
    {
      icon: Star,
      title: "אנחנו לא עובדים עם כל אחד",
      description: "אצלנו כל עסק מקבל יחס של ילד יחיד, האוטומציה מאפשרת לי לנהל עשרות לקוחות במקביל, אך אני בוחר שלא. אני מגביל את כמות העסקים שאני מלווה כדי להעניק להם את מלוא תשומת הלב והזמינות, אני רואה את הלקוחות שלי בתור שותפים. ההצלחה שלכם היא ההצלחה שלי, השם שלי חתום על הביצועים שלכם ואני מסרב לעשות חצי עבודה."
    },
    {
      icon: Eye,
      title: "אמת, שקיפות וחזון",
      description: "אני לא מפזר התחייבויות וסיפורים על הצלחה בין לילה, אבל אני כן יודע לומר דבר אחד בצורה ברורה- ברגע שמערך השיווק שלנו תופס, הוא מסוגל להכפיל את המחזורים של העסק. אנחנו לא פה כדי לעשות ספרינט, קפיצה חד פעמית וזהו. אנחנו במרתון, אנחנו כאן כדי לבנות לך מערך שיווק שיביא לך לקוחות חדשים וגידול במכירות, חודש אחרי חודש, במשך שנים קדימה. ואני נותן לכל לקוח שלי התחייבות שיחד אנחנו נפצח את העסק שלו ונבנה לו מערכת שתביא לו את התוצאות שהוא חולם עליהן."
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-card">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-display mb-4">
            למה COHEN SMMA
          </h2>
          <p className="text-body-lg text-muted-foreground">
            מה מבדיל אותנו מכל השאר.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 stagger-reveal ${isVisible ? 'visible' : ''}`}
        >
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 glass-card rounded-xl border border-border card-hover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-subheading text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {formatWithLineBreaks(reason.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
