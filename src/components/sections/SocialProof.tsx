import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import socialProofImage from "@/assets/social-proof-screenshot.png";

const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal();
  const viewsCount = useCountUp(5000000, 2000, isVisible);
  const projectsCount = useCountUp(30, 2000, isVisible);
  const growthCount = useCountUp(250, 2000, isVisible);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}M+`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return `${num}`;
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-section bg-background">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-display mb-4">
            .NUMBERS
          </h2>
          <p className="text-body-lg text-muted-foreground">
            גברים משקרים, גם נשים משקרות.
            <br />
            מספרים תמיד אומרים את האמת.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left stats */}
          <div className={`space-y-6 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="glass-card rounded-xl p-6 text-center card-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {formatNumber(viewsCount)}
              </div>
              <p className="text-body text-muted-foreground">צפיות אורגניות</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center card-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +{projectsCount}
              </div>
              <p className="text-body text-muted-foreground">פרויקטים שהושלמו</p>
            </div>
          </div>

          {/* Center screenshot */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card rounded-2xl border border-border mx-auto overflow-hidden">
              <img 
                src={socialProofImage} 
                alt="COHEN SMMA Results - Social Media Analytics and Growth" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>

          {/* Right stats */}
          <div className={`space-y-6 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="glass-card rounded-xl p-6 text-center card-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {growthCount}%
              </div>
              <p className="text-body text-muted-foreground">גידול ממוצע בחשיפה</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center card-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                4.9★
              </div>
              <p className="text-body text-muted-foreground">דירוג לקוחות</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
