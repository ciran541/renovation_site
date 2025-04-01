import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-subtle"
            : "bg-transparent"
        }`}
      ></div>

      {/* Content Layer */}
      <div className="relative container-custom py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.name === "Contact" ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 bg-primary text-white hover:bg-primary/90 ${
                    isActive(link.path) ? "ring-2 ring-primary/50" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide relative transition-all duration-300 hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform origin-center"></span>
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary focus:outline-none button-hover"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-5 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.name === "Contact" ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 bg-primary text-white hover:bg-primary/90 text-center ${
                      isActive(link.path) ? "ring-2 ring-primary/50" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 px-4 rounded-md transition-colors ${
                      isActive(link.path)
                        ? "bg-accent/50 text-primary font-medium"
                        : "text-foreground/80 hover:bg-accent/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;