import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Reframe from "@/components/sections/Reframe";
import System from "@/components/sections/System";
import ThreeWorlds from "@/components/sections/ThreeWorlds";
import WhyThisWorks from "@/components/sections/WhyThisWorks";
import About from "@/components/sections/About";
import Fit from "@/components/sections/Fit";
import Objections from "@/components/sections/Objections";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        <Hero />
        <Reframe />
        <System />
        <ThreeWorlds />
        <WhyThisWorks />
        <About />
        <Fit />
        <Objections />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
