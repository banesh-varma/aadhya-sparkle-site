import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Aadhya College Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-lg text-primary">Aadhya</h3>
                <p className="text-sm text-muted-foreground">Women's Degree College</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering women through quality education and holistic development since 2010.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Courses</Link></li>
              <li><Link to="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Admissions</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">B.A. (Bachelor of Arts)</span></li>
              <li><span className="text-sm text-muted-foreground">B.Com (Bachelor of Commerce)</span></li>
              <li><span className="text-sm text-muted-foreground">B.Sc. (Bachelor of Science)</span></li>
              <li><span className="text-sm text-muted-foreground">BBA (Business Administration)</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 40 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@aadhyacollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aadhya Women's Degree College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;