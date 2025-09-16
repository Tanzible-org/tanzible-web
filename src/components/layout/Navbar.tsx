import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Maintenance", href: "/services/maintenance" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919693759948", "_blank");
  };

  // return (
  //   <motion.nav
  //     initial={{ y: -100 }}
  //     animate={{ y: 0 }}
  //     className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  //       scrolled
  //         ? "bg-primary/95 backdrop-blur-md shadow-medium"
  //         : "bg-transparent"
  //     }`}
  //   >
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex justify-between items-center h-16">
  //         {/* Logo */}
  //         <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
  //           <img src="/logo.png" alt="Tanzible Logo" className="w-40 h-30" />{" "}
  //           {/* Logo Image */}
  //           <Link to="/" className="text-2xl font-bold text-white">
  //             Tanzible
  //           </Link>
  //         </motion.div>

  //         {/* Desktop Navigation */}
  //         <div className="hidden md:flex items-center space-x-8">
  //           {navigation.map((item) => (
  //             <div key={item.name} className="relative">
  //               {item.hasDropdown ? (
  //                 <div
  //                   className="relative"
  //                   onMouseEnter={() => setIsServicesOpen(true)}
  //                   onMouseLeave={() => setIsServicesOpen(false)}
  //                 >
  //                   <button className="text-white hover:text-accent transition-colors duration-200 flex items-center gap-1">
  //                     {item.name}
  //                     <ChevronDown
  //                       className={`w-4 h-4 transition-transform duration-200 ${
  //                         isServicesOpen ? "rotate-180" : ""
  //                       }`}
  //                     />
  //                   </button>

  //                   {/* Services Dropdown */}
  //                   <motion.div
  //                     initial={{ opacity: 0, y: 10 }}
  //                     animate={{
  //                       opacity: isServicesOpen ? 1 : 0,
  //                       y: isServicesOpen ? 0 : 10,
  //                     }}
  //                     className={`absolute top-full left-0 mt-2 w-56 ${
  //                       isServicesOpen
  //                         ? "pointer-events-auto"
  //                         : "pointer-events-none"
  //                     }`}
  //                   >
  //                     <div className="glass-card rounded-xl p-2 shadow-large">
  //                       {services.map((service) => (
  //                         <Link
  //                           key={service.name}
  //                           to={service.href}
  //                           className="block px-4 py-3 text-sm text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
  //                         >
  //                           {service.name}
  //                         </Link>
  //                       ))}
  //                     </div>
  //                   </motion.div>
  //                 </div>
  //               ) : (
  //                 <Link
  //                   to={item.href}
  //                   className={`text-white hover:text-accent transition-colors duration-200 ${
  //                     location.pathname === item.href ? "text-accent" : ""
  //                   }`}
  //                 >
  //                   {item.name}
  //                 </Link>
  //               )}
  //             </div>
  //           ))}
  //         </div>

  //         {/* CTA Button */}
  //         <div className="hidden md:flex">
  //           <Button
  //             onClick={handleWhatsApp}
  //             className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
  //           >
  //             Get Started
  //           </Button>
  //         </div>

  //         {/* Mobile menu button */}
  //         <div className="md:hidden">
  //           <Button
  //             variant="ghost"
  //             size="sm"
  //             onClick={() => setIsOpen(!isOpen)}
  //             className="text-white"
  //           >
  //             {isOpen ? (
  //               <X className="h-6 w-6" />
  //             ) : (
  //               <Menu className="h-6 w-6" />
  //             )}
  //           </Button>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Mobile Navigation */}
  //     <motion.div
  //       initial={{ opacity: 0, height: 0 }}
  //       animate={{
  //         opacity: isOpen ? 1 : 0,
  //         height: isOpen ? "auto" : 0,
  //       }}
  //       className="md:hidden bg-primary/95 backdrop-blur-md"
  //     >
  //       <div className="px-4 py-4 space-y-4">
  //         {navigation.map((item) => (
  //           <div key={item.name}>
  //             {item.hasDropdown ? (
  //               <div>
  //                 <button
  //                   onClick={() => setIsServicesOpen(!isServicesOpen)}
  //                   className="flex items-center justify-between w-full text-white py-2"
  //                 >
  //                   {item.name}
  //                   <ChevronDown
  //                     className={`w-4 h-4 transition-transform duration-200 ${
  //                       isServicesOpen ? "rotate-180" : ""
  //                     }`}
  //                   />
  //                 </button>
  //                 {isServicesOpen && (
  //                   <div className="pl-4 space-y-2 mt-2">
  //                     {services.map((service) => (
  //                       <Link
  //                         key={service.name}
  //                         to={service.href}
  //                         className="block text-white/80 hover:text-white py-1"
  //                         onClick={() => setIsOpen(false)}
  //                       >
  //                         {service.name}
  //                       </Link>
  //                     ))}
  //                   </div>
  //                 )}
  //               </div>
  //             ) : (
  //               <Link
  //                 to={item.href}
  //                 className="block text-white py-2"
  //                 onClick={() => setIsOpen(false)}
  //               >
  //                 {item.name}
  //               </Link>
  //             )}
  //           </div>
  //         ))}
  //         <Button
  //           onClick={handleWhatsApp}
  //           className="w-full bg-accent hover:bg-accent/90 text-white mt-4"
  //         >
  //           Get Started
  //         </Button>
  //       </div>
  //     </motion.div>
  //   </motion.nav>
  // );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo positioned to the left corner */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center  flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Tanzible Logo"
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
              Tanzible
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="text-white hover:text-accent transition-colors duration-200 flex items-center gap-1">
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: isServicesOpen ? 1 : 0,
                          y: isServicesOpen ? 0 : 10,
                        }}
                        className={`absolute top-full left-0 mt-2 w-56 ${
                          isServicesOpen
                            ? "pointer-events-auto"
                            : "pointer-events-none"
                        }`}
                      >
                        <div className="glass-card rounded-xl p-2 shadow-large">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-4 py-3 text-sm text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-white hover:text-accent transition-colors duration-200 ${
                        location.pathname === item.href ? "text-accent" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Button
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-white px-4 lg:px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow text-sm lg:text-base"
            >
              Get Started
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden bg-primary/95 backdrop-blur-md"
      >
        <div className="px-4 py-4 space-y-4">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-white py-2"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-white/80 hover:text-white py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="block text-white py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Button
            onClick={handleWhatsApp}
            className="w-full bg-accent hover:bg-accent/90 text-white mt-4"
          >
            Get Started
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};
