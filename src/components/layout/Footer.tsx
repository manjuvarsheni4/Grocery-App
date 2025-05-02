
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-metamart-yellow-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand section */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-xl font-bold">Meta Mart</h2>
            <p className="mb-4 text-sm opacity-80">
              Your one-stop grocery shop for fresh produce, dairy, and more. Delivered to your doorstep.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/faq" className="text-sm hover:underline">FAQ</Link>
              <Link to="/terms" className="text-sm hover:underline">Terms & Conditions</Link>
              <Link to="/about" className="text-sm hover:underline">About Us</Link>
              <Link to="/" className="text-sm hover:underline">Shop Now</Link>
            </div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">support@metamart.com</span>
              </div>
            </div>
          </div>

          {/* Social media */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-2 text-metamart-yellow-dark hover:bg-opacity-90">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-2 text-metamart-yellow-dark hover:bg-opacity-90">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white border-opacity-20 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Meta Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
