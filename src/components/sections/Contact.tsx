import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "הפרטים התקבלו",
      description: "אחזור אליך בהקדם לשיחת היכרות.",
    });
    
    setFormData({ fullName: "", businessName: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-section bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-display text-primary-foreground mb-4 animate-fade-in-up">
              מוכנים להתחיל?
            </h2>
            
            <p className="text-body-lg text-primary-foreground/80 mb-8 animate-fade-in-up animate-fade-in-delay-1">
              השאירו פרטים ונחזור אליכם לשיחת היכרות קצרה ללא התחייבות.
            </p>
            
            <div className="space-y-4 text-primary-foreground/70 animate-fade-in-up animate-fade-in-delay-2">
              <a 
                href="https://instagram.com/cohensmma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://wa.me/972559310292" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:cohensmma@gmail.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                cohensmma@gmail.com
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up animate-fade-in-delay-1">
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
                placeholder="טלפון"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
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
              className="w-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 rounded-lg h-12 group"
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
