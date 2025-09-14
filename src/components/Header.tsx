import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "History", href: "/about#history" },
        { name: "Mission & Vision", href: "/about#mission" },
        { name: "Leadership", href: "/about#leadership" },
        { name: "Accreditation", href: "/about#accreditation" },
      ]
    },
    {
      name: "Academics",
      href: "/academics",
      dropdown: [
        { name: "Engineering", href: "/academics/engineering" },
        { name: "Management", href: "/academics/management" },
        { name: "Law", href: "/academics/law" },
        { name: "Arts & Science", href: "/academics/arts-science" },
      ]
    },
    {
      name: "Admissions",
      href: "/admissions",
      dropdown: [
        { name: "Admission Process", href: "/admissions#process" },
        { name: "Eligibility", href: "/admissions#eligibility" },
        { name: "Fees", href: "/admissions#fees" },
        { name: "Scholarships", href: "/admissions#scholarships" },
      ]
    },
    {
      name: "Research",
      href: "/research",
      dropdown: [
        { name: "Projects", href: "/research#projects" },
        { name: "Publications", href: "/research#publications" },
        { name: "PhD Programs", href: "/research#phd" },
      ]
    },
    {
      name: "Student Life",
      href: "/student-life",
      dropdown: [
        { name: "Hostel", href: "/student-life#hostel" },
        { name: "Library", href: "/student-life#library" },
        { name: "Sports", href: "/student-life#sports" },
        { name: "Clubs", href: "/student-life#clubs" },
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">MATS University</span>
              <span className="text-xs text-muted-foreground">Excellence in Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                </Link>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-md shadow-lg py-1 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-9 w-48"
                />
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;