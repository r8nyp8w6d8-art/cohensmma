import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Founder from "@/components/sections/Founder";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import WhyUs from "@/components/sections/WhyUs";
import Fit from "@/components/sections/Fit";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import AccessibilityMenu from "@/components/AccessibilityMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <Hero />
        <div id="founder">
          <Founder />
        </div>
        <Services />
        <SocialProof />
        <WhyUs />
        <Fit />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;
