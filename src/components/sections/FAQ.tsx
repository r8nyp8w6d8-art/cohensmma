import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "כבר עבדתי עם סוכנויות, שילמתי ריטיינר ולא ראיתי כלום. למה שאיתכם זה יהיה שונה?",
      answer: "כי רוב הסוכנויות הן \"מפעלים של תוכן\" – הן מייצרות פוסטים כדי לסמן וי. אני מגיע מעולם העסקים, לא מעולם הגרפיקה. אני יודע מה זה להחזיק עסק, לנהל עובדים ולבדוק דוח רווח והפסד. ב-COHEN SMMA, אנחנו לא מתרגשים מ\"לייקים\". אנחנו בונים תשתית. אם המהלך לא מתחבר ישירות לשורת הרווח שלך או חוסך לך זמן עבודה יקר דרך אוטומציה – אנחנו פשוט לא עושים אותו. נקודה.",
    },
    {
      question: "העסק שלי עובד, למה אני צריך את כל ה'מעטפת' הזאת של אסטרטגיה ואוטומציה?",
      answer: "כי \"עובד\" זה האויב של \"צומח\". רוב בעלי העסקים תקועים בכיבוי שריפות כי השיווק שלהם לא מסונכרן עם התפעול. אנחנו מביאים פתרון All-In-One כדי לשחרר אותך מהתלות בניהול עשרה ספקים שונים. כשהאסטרטגיה מדברת עם המודעות, והמודעות מדברות עם האוטומציה באתר – העסק הופך ממערכת שצריכה אותך כל דקה, למכונה משומנת שעובדת בשבילך.",
    },
    {
      question: "איך אתם תופסים את תשומת הלב של הקהל בשווקים רוויי תחרות?",
      answer: "אנחנו משתמשים בפסיכולוגיה שיווקית. הצרכן של 2025 פיתח חסינות למכירות. הוא מריח \"פיץ'\" מקילומטרים ובורח. הסוד שלנו הוא Pattern Disruption – אנחנו יוצרים תוכן שמרגיש כמו ערך טהור או חוויה קולנועית, ושותלים שם את הטריגרים הפסיכולוגיים שגורמים ללקוח להבין שהוא צריך אותך, עוד לפני שביקשת ממנו לקנות.",
    },
    {
      question: "בשורה התחתונה – מה אני מקבל ביום שאחרי שחתמנו?",
      answer: "שקט נפשי ושותף אסטרטגי. יחידה אחת שמטפלת בייצור התוכן, ניהול הקמפיינים, בניית המשפכים הדיגיטליים והטמעת האוטומציה. אין יותר \"המעצב אמר לי ככה\" ו\"איש ה-PPC אמר אחרת\". הכל מנוהל תחת חזון אחד, עם דוחות ברורים וקשר ישיר מול מנהל השיווק הישיר שלך. אתה המנכ\"ל, אנחנו המנוע.",
    },
    {
      question: "מה רמת השימוש שלכם ב-AI?",
      answer: "אנחנו לא נותנים למכונה לכתוב לך את הסיפור, אנחנו משתמשים בה כדי להטיס אותו לירח. ה-AI מאפשר לנו לבצע אופטימיזציות ואוטומציות ברמת יעילות שסוכנויות פרסום רגילות יכולות רק לחלום עליה. במקביל העין האנושית דואגת שהתוצאה תרגיש חיה, קולנועית ובועטת. טכנולוגיה ללא רגש היא רעש, רגש ללא טכנולוגיה הוא איטיות. יחד הם מייצרים תוצאות שעולות על כל דמיון.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-display mb-4 animate-blur-in">
            שאלות נפוצות
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 animate-fade-in-up transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-body-lg text-foreground text-right hover:text-primary py-6 [&>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
