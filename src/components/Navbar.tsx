import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 primary-gradient rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            EduGuide
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/assessment" className="text-foreground hover:text-primary transition-colors">
              Assessment
            </Link>
            <Link to="/career-paths" className="text-foreground hover:text-primary transition-colors">
              Career Paths
            </Link>
            <Link to="/colleges" className="text-foreground hover:text-primary transition-colors">
              Colleges
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/assessment">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="py-4 space-y-4">
              <Link 
                to="/assessment" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Assessment
              </Link>
              <Link 
                to="/career-paths" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Career Paths
              </Link>
              <Link 
                to="/colleges" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Colleges
              </Link>
              <Link 
                to="/dashboard" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <div className="pt-4">
                <Link to="/assessment" onClick={toggleMenu}>
                  <Button variant="hero" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;