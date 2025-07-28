import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Award, 
  Clock,
  MapPin,
  Star,
  CheckCircle,
  Percent
} from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: <Percent className="w-6 h-6" />,
      title: "10% Discount For New Customers",
      description: "Special pricing for first-time clients"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "15% Discount For Military and Senior Citizens",
      description: "Honoring our veterans and seniors"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed and Insured",
      description: "Full protection and professional credentials"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "100% Satisfaction Guaranteed",
      description: "We stand behind every job we complete"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Thompson Home Services?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We are locally owned and operated in Bulloch county and surrounding counties, 
            committed to delivering exceptional service to our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth animate-fade-in bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Who We Are
            </h3>
            <div className="prose prose-lg text-foreground space-y-4">
              <p className="text-muted-foreground">
                Founded in 2024, our business is a locally owned and operated company based in East Georgia, 
                led by a team of driven young entrepreneurs. We specialize in garage door services and repair.
              </p>
              
              <p className="text-muted-foreground">
                We bring fresh energy, strong work ethic, and a hands-on approach to every project we take on. 
                Our mission is simple: to deliver high-quality results with professionalism, integrity, and 
                attention to detail—no matter the size of the job.
              </p>
              
              <p className="text-muted-foreground">
                Whether you're enhancing your outdoor space or tackling a residential construction project, 
                we're here to provide dependable service and lasting craftsmanship.
              </p>
              
              <p className="text-muted-foreground">
                As a growing business, we take pride in building strong relationships with our clients and our community. 
                We believe that clear communication, reliability, and pride in our work set us apart from the rest.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <Card className="shadow-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-primary mb-2">Local Team</h4>
                <p className="text-muted-foreground">Bulloch County based professionals</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-primary mb-2">Est. 2024</h4>
                <p className="text-muted-foreground">Fresh energy and innovation</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-primary mb-2">Licensed</h4>
                <p className="text-muted-foreground">Fully insured and certified</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-primary mb-2">Local</h4>
                <p className="text-muted-foreground">Statesboro, GA 30461</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-secondary/30 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Experience the Thompson Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied customers who trust us for all their garage door needs. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:912-388-6690">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Free Consultation
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;