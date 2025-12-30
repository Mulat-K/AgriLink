import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-secondary p-2 rounded-xl">
                <Leaf className="w-8 h-8 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-heading font-bold">AgriLink</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Direct from Farm, Fair for All. AgriLink is revolutionizing the Ethiopian agricultural supply chain 
              by connecting smallholders directly to consumers in Addis Ababa.
            </p>
            <div className="flex items-center space-x-2 text-secondary font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span>Serving Addis Ababa & Surrounding Regions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Impact', path: '/impact' },
                { name: 'Success Stories', path: '/testimonials' },
                { name: 'Partner with Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact</h3>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/70">
                  Bole Road, Addis Ababa<br />Ethiopia
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a
                  href="tel:+251988880085"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  +251 98 888 0085
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a
                  href="mailto:agrilinkc@gmail.com"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  agrilinkc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} AgriLink All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
