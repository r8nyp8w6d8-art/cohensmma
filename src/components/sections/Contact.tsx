import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "הפרטים התקבלו",
      description: "אחזור אליך בהקדם לשיחת היכרות."
    });
    setFormData({
      fullName: "",
      businessName: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-section bg-primary">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-start scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <div>
            <h2 className="text-display text-primary-foreground mb-4">
              מוכנים להתחיל?
            </h2>

            <p className="text-body-lg text-primary-foreground/80 mb-8">
              השאירו פרטים ונחזור אליכם לשיחת היכרות קצרה ללא התחייבות.
            </p>

            {/* Social icon buttons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/cohensmma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl flex items-center justify-center icon-btn hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="https://wa.me/972559310292"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl flex items-center justify-center icon-btn hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="mailto:cohensmma@gmail.com"
                className="w-14 h-14 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl flex items-center justify-center icon-btn hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-primary-foreground" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="שם מלא"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="businessName"
                placeholder="שם העסק"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                placeholder="טלפון"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="ספרו לנו קצת"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 rounded-lg h-12 group btn-scale"
            >
              {isSubmitting ? "שולח..." : "שלחו לנו הודעה"}
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
