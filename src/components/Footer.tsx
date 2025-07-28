import { Phone, Mail, MapPin, Facebook, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Thompson Home Services</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional garage door services in Bulloch County and surrounding areas. 
              Licensed, insured, and committed to quality.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Statesboro, GA 30461</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Garage Door Repair</li>
              <li>Spring Replacement</li>
              <li>Opener Repair</li>
              <li>Roller Replacement</li>
              <li>Cable Repair</li>
              <li>Remote Installation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:912-388-6690"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>912-388-6690</span>
              </a>
              <a 
                href="mailto:contact@thompsonhomes.info"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>contact@thompsonhomes.info</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61578818360422"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.google.com/search?q=Thompson%20Home%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Star className="w-4 h-4" />
                <span>Google Reviews</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/60 mb-2">Special Offers:</p>
              <ul className="text-sm text-primary-foreground/80 space-y-1">
                <li>• 10% Off New Customers</li>
                <li>• 15% Off Military & Seniors</li>
                <li>• Free Estimates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Thompson Home Services. All rights reserved. Licensed and Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;