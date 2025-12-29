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
    budget: "",
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
    
    setFormData({ fullName: "", businessName: "", phone: "", budget: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-section border-t border-border">
      <div className="max-w-xl">
        <h2 className="text-display mb-6 animate-fade-in-up">
          מוכנים להתחיל
        </h2>
        
        <p className="text-body-lg text-muted-foreground mb-12 animate-fade-in-up animate-fade-in-delay-1">
          השאירו פרטים לשיחת היכרות קצרה, ללא התחייבות.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up animate-fade-in-delay-2">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="שם מלא"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-border py-4 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
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
              className="w-full bg-transparent border-b border-border py-4 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
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
              className="w-full bg-transparent border-b border-border py-4 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          
          <div>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-border py-4 text-body text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-background text-muted-foreground">
                תקציב חודשי משוער
              </option>
              <option value="5000-10000" className="bg-background text-foreground">₪5,000 - ₪10,000</option>
              <option value="10000-20000" className="bg-background text-foreground">₪10,000 - ₪20,000</option>
              <option value="20000-50000" className="bg-background text-foreground">₪20,000 - ₪50,000</option>
              <option value="50000+" className="bg-background text-foreground">₪50,000+</option>
            </select>
          </div>
          
          <div className="pt-6">
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              disabled={isSubmitting}
              className="group w-full sm:w-auto"
            >
              {isSubmitting ? "שולח..." : "שלחו הודעה"}
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
