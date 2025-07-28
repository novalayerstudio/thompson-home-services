import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Thompson Home Services Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-primary hidden sm:block">Thompson Home Services</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Contact
          </button>
        </nav>

        {/* Call Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:912-388-6690">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
            <a href="tel:912-388-6690" className="block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call 912-388-6690
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;