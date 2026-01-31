import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Academics",
      path: "/courses",
      subItems: [
        { name: "Courses", path: "/courses" },
        { name: "Faculty", path: "/academics/faculty" },
        { name: "Infrastructure", path: "/academics/infrastructure" },
        { name: "Research", path: "/academics/research" },
      ],
    },
    // {
    //   name: "About Us",
    //   path: "/about-us",
    //   subItems: [
    //     { name: "About Us", path: "/about-us" },
    //     { name: "Vision", path: "/aboutus-us/vision" },
    //     { name: "Governing", path: "/aboutus-us/governing" },
    //     { name: "Facilities", path: "/aboutus-us/facilities" },
    //     { name: "ConductOfStudents", path: "/aboutus-us/conductofstudents" },
    //     { name: "Organogram", path: "/aboutus-us/organogram" },
    //   ],
    // },
    {
      name: "Student Life",
      path: "/student-life/clubs",
      subItems: [
        { name: "Clubs & Activities", path: "/student-life/clubs" },
        { name: "Sports & Fitness", path: "/student-life/sports" },
        { name: "Events", path: "/student-life/events" },
      ],
    },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80 shrink-0">
            <img src={logo} alt="Aadhya College Logo" className="h-14 w-auto" />
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-primary">Aadhya</h1>
              <p className="text-xs text-muted-foreground">Women's Degree College <br /> DostCode - 11115</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.subItems ? (
                <div key={link.name} className="relative group">
                  <Button
                    variant={link.subItems.some(sub => isActive(sub.path)) ? "default" : "ghost"}
                    className="transition-smooth"
                    asChild
                  >
                    <div className="flex items-center cursor-pointer">
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </div>
                  </Button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-background border border-border rounded-lg shadow-elegant min-w-[200px] overflow-hidden">
                      {link.subItems.map((subItem) => (
                        <Link key={subItem.path} to={subItem.path}>
                          <div
                            className={`px-4 py-3 hover:bg-muted transition-smooth ${
                              isActive(subItem.path) ? "bg-primary/10 text-primary" : "text-foreground"
                            }`}
                          >
                            {subItem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className="transition-smooth"
                  >
                    {link.name}
                  </Button>
                </Link>
              )
            )}
            <Button variant="secondary" className="ml-4">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) =>
                  link.subItems ? (
                    <div key={link.name} className="space-y-1">
                      <div className="px-2 py-1 text-sm font-semibold text-muted-foreground">
                        {link.name}
                      </div>
                      {link.subItems.map((subItem) => (
                        <Link key={subItem.path} to={subItem.path} onClick={() => setIsOpen(false)}>
                          <Button
                            variant={isActive(subItem.path) ? "default" : "ghost"}
                            className="w-full justify-start pl-6"
                          >
                            {subItem.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive(link.path) ? "default" : "ghost"}
                        className="w-full justify-start"
                      >
                        {link.name}
                      </Button>
                    </Link>
                  )
                )}
                <Button variant="secondary" className="w-full">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;