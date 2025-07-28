import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Star,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Thompson Home Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to fix your garage door? Get in touch for a free consultation and diagnosis. 
            We're here to help with all your garage door needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <a href="tel:912-388-6690" className="text-muted-foreground hover:text-accent transition-smooth">
                      912-388-6690
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <a href="mailto:contact@thompsonhomes.info" className="text-muted-foreground hover:text-accent transition-smooth">
                      contact@thompsonhomes.info
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Location</p>
                    <p className="text-muted-foreground">Statesboro, Georgia, 30461</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Free Estimates</p>
                    <p className="text-muted-foreground">Available all summer long</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Connect Or Leave a Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61578818360422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-smooth group"
                >
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Facebook</p>
                    <p className="text-sm text-muted-foreground">Follow us for updates</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-smooth" />
                </a>

                <a 
                  href="https://www.google.com/search?sca_esv=c2df872898b90107&sxsrf=AE3TifP-Pwn-3MLV2tkag2VEew7stSBPEw%3A1753560105668&q=Thompson%20Home%20Services&stick=H4sIAAAAAAAAAONgU1IxqEhMMzROSTE0TzM1TUlNMbUyqEiyTDYyNk40SjEwNTI0NTBZxCoWkpGfW1Ccn6fgkZ-bqhCcWlSWmZxaDABL0QYSQQAAAA&mat=Cfk4e3SHO7Ku&ved=2ahUKEwi4_sK5qNuOAxVukWoFHbWDJsYQrMcEegQIIxAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-smooth group"
                >
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Google Reviews</p>
                    <p className="text-sm text-muted-foreground">Leave us a review</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-smooth" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Request Free Consultation</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(912) 555-0123" 
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                    Service Needed
                  </label>
                  <Input 
                    id="service" 
                    placeholder="e.g., Spring replacement, Opener repair" 
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Additional Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your garage door issue or the service you need..."
                    rows={4}
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Request Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Call Section */}
        <div className="mt-16 text-center p-8 bg-primary rounded-lg text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Emergency Garage Door Repair?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Don't wait! Call us now for immediate assistance with urgent garage door issues.
          </p>
          <a href="tel:912-388-6690">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Call: 912-388-6690
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;