import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional garage door service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Garage Door Issues?
            <span className="block text-accent">Call Now!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
            Quick and Reliable Garage Door Repairs
            <span className="block text-lg mt-2">We Offer Free Consultations and Diagnoses</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
            <a href="tel:912-388-6690">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 912-388-6690
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Free Consultation
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 text-primary-foreground animate-fade-in">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">Licensed & Insured</p>
                <p className="text-sm opacity-90">Fully protected service</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-primary-foreground animate-fade-in">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">Same Day Service</p>
                <p className="text-sm opacity-90">Quick response time</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-primary-foreground animate-fade-in">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">100% Satisfaction</p>
                <p className="text-sm opacity-90">Guaranteed results</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-primary-foreground animate-fade-in">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">Local Experts</p>
                <p className="text-sm opacity-90">Bulloch County based</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;