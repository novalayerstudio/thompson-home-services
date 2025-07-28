import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Settings, 
  Zap, 
  RotateCcw, 
  Radio, 
  Cable,
  CheckCircle
} from "lucide-react";
import technicianImage from "@/assets/technician-service.jpg";
import springsImage from "@/assets/garage-springs.jpg";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Full Garage Door System Service & Tune Up",
      description: "Don't wait for a breakdown — regular garage door service keeps everything running safely, smoothly, and quietly. We do a 25 point inspection and service to reduce noise, avoid breakdown, and ensure confidence.",
      features: ["25-point inspection", "Noise reduction", "Safety check", "Preventive maintenance"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Overhead Garage Door Opener Repair",
      description: "If your overhead garage door opener is stalling, grinding, or unresponsive, it's time for a fix! Restore smooth, reliable access to your garage with fast, expert opener repair.",
      features: ["Motor repair", "Chain/belt replacement", "Remote programming", "Safety sensor adjustment"]
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Garage Door Spring Replacement",
      description: "A broken garage door spring can leave you stuck and struggling — it's the muscle behind every smooth lift. Replace worn springs to keep your door balanced, safe, and working like new!",
      features: ["Torsion spring repair", "Extension spring replacement", "Safety cable installation", "Balance adjustment"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Garage Door Roller Replacement",
      description: "Worn-out garage door rollers can cause noisy, jerky movement and put extra strain on your opener — replacing them keeps your door gliding smoothly and quietly.",
      features: ["Steel roller installation", "Nylon roller upgrade", "Track alignment", "Noise elimination"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Remote Control Activation & Installation",
      description: "Tired of getting out of the car to open your garage? Upgrade to remote control activation for easy, push-button access. We'll handle the install so you can enjoy convenience at your fingertips!",
      features: ["Remote programming", "Keypad installation", "Smart home integration", "Multi-remote setup"]
    },
    {
      icon: <Cable className="w-8 h-8" />,
      title: "Garage Door Cable Replacement",
      description: "Frayed or snapped garage door cables can leave your door crooked or stuck — and dangerous. Keep things running safely and smoothly with fast, reliable cable replacement!",
      features: ["Cable inspection", "High-quality replacement", "Safety compliance", "Tension adjustment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Garage Door Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer full service and repair on all garage door applications to fulfill your needs! 
            We have trained technicians who get the job done safely and quickly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth animate-fade-in bg-card border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-accent">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-card">
            <img 
              src={technicianImage} 
              alt="Professional technician servicing garage door" 
              className="w-full h-64 lg:h-80 object-cover transition-smooth hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
              <div className="p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p>Trained professionals with years of experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-card">
            <img 
              src={springsImage} 
              alt="High-quality garage door components" 
              className="w-full h-64 lg:h-80 object-cover transition-smooth hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
              <div className="p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                <p>Premium components for lasting repairs</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6">
            Call or email us for a free consultation and diagnosis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:912-388-6690">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Call 912-388-6690
              </Button>
            </a>
            <a href="mailto:contact@thompsonhomes.info">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;