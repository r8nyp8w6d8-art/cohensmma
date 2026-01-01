import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  // Function to add line breaks using \n
  const formatWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index, arr) => (
      <span key={index}>
        {line}
        {index < arr.length - 1 && <br />}
      </span>
    ));
  };

  const faqs = [
    {
      question: "כבר עבדתי עם סוכנות, שילמתי ריטיינר ולא ראיתי תוצאות. למה שאיתכם זה יהיה שונה?",
      answer: `כי רוב הסוכנויות הן "מפעלי תוכן" – הן מייצרות פוסטים וסרטונים יפים.\nאני מגיע מעולם העסקים, לא מעולם עיצוב הגרפי.\nבסופו של כל חודש מעניין אותנו דוח רווח והפסד.\nב-COHEN SMMA, אנחנו לא מתרגשים מ"לייקים", הם רק חלק ממערכת שלמה.\nאם נכנסת אלינו לסוכנות כלקוח אז המוצר/השירות שלך מעולים, ואם המוצר/השירות שלך מעולים - אנחנו נמכור אותם עבורך.`
    },
    {
      question: "העסק שלי עובד, למה אני צריך את כל ה'מעטפת' הזאת של אסטרטגיה ואוטומציה?",
      answer: `כי "עובד" זה האויב של "צומח".\nרוב בעלי העסקים תקועים במקום עם מערכת שיווקית שלא עובדת או בלי מערכת שיווקית בכלל.\nאנחנו מביאים פתרון All-In-One במחיר הוגן ובאפס התעסקות, האסטרטגיה מייצרת עבורך כסף, האוטומציה חוסכת עבורך זמן.`
    },
    {
      question: "איך אתם תופסים את תשומת הלב של הקהל בשווקים רוויי תחרות?",
      answer: `אנחנו משתמשים בפסיכולוגיה שיווקית.\nהצרכן של 2025 פיתח חסינות למכירות.\nהוא מריח "פיץ'" מקילומטרים.\nהסוד שלנו הוא Pattern Disruption – אנחנו יוצרים תוכן בולט, חד ולא שגרתי ושותלים בו את הטריגרים הפסיכולוגיים שגורמים ללקוח לרצות לקנות ממך, עוד לפני שהוא יודע מה אתה מוכר.`
    },
    {
      question: "בשורה התחתונה – מה אני מקבל ביום שאחרי שחתמנו?",
      answer: `שקט נפשי ושותף אסטרטגי.\nיחידה אחת שמטפלת בייצור התוכן, ניהול הקמפיינים, בניית המשפכים הדיגיטליים והטמעת האוטומציה.\nאין יותר "המעצב אמר לי ככה" ו"מנהל הסושיאל אמר ככה".\nהכל מנוהל תחת חזון אחד, עם דוחות ברורים וקשר ישיר מול מנהל השיווק הישיר שלך.\nאתה הנהג, אני המנוע.`
    },
    {
      question: "מה רמת השימוש שלכם ב-AI?",
      answer: `אנחנו לא נותנים למכונה לכתוב את הסיפור, אנחנו משתמשים בו בתור מגבר כדי לקחת אותו הרבה יותר גבוה.\nה-AI מאפשר לנו יעילות ואופטימיזציות שעד לא מזמן היו בגדר חלום.\nאבל העין האנושית דואגת שהתוצאה תרגיש חיה ואותנטית, מעשה ידי אדם.\nטכנולוגיה ללא רגש מביאה איתה רעש.\nרגש ללא טכנולוגיה מביא איתו איטיות.\nהשילוב ביניהם מייצר תוצאות שעולות על כל דמיון.`
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-display mb-4 animate-blur-in">
            שאלות ותשובות
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 animate-fade-in-up transition-all duration-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-body-lg text-foreground text-right hover:text-primary py-6 [&>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-muted-foreground pb-6 leading-relaxed">
                {formatWithLineBreaks(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
