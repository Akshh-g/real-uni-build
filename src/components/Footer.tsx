import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Research", href: "/research" },
    { name: "Student Life", href: "/student-life" },
    { name: "Career Services", href: "/careers" },
    { name: "Alumni", href: "/alumni" },
  ];

  const departments = [
    { name: "Engineering", href: "/academics/engineering" },
    { name: "Management", href: "/academics/management" },
    { name: "Law", href: "/academics/law" },
    { name: "Arts & Science", href: "/academics/arts-science" },
    { name: "Medical", href: "/academics/medical" },
    { name: "Pharmacy", href: "/academics/pharmacy" },
  ];

  const resources = [
    { name: "Library", href: "/student-life#library" },
    { name: "E-Learning", href: "/elearning" },
    { name: "Student Portal", href: "/portal" },
    { name: "Faculty Portal", href: "/faculty" },
    { name: "Downloads", href: "/downloads" },
    { name: "Tenders", href: "/tenders" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">MATS University</h3>
                <p className="text-sm text-primary-foreground/80">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              MATS University is committed to providing world-class education and fostering innovation, 
              research, and holistic development of students.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Arang, Raipur, Chhattisgarh 493441</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91-771-2581234</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@matsuniversity.ac.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Departments</h4>
            <ul className="space-y-2">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    to={dept.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 MATS University. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-primary-foreground/80 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;