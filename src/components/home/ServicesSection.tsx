import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Palette, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks, optimized for performance and scalability.",
    features: [
      "React/Next.js",
      "Node.js/Python",
      "Cloud Infrastructure",
      "API Development",
    ],
    href: "/services/web-development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "React Native",
      "iOS/Android",
      "App Store Optimization",
      "Push Notifications",
    ],
    href: "/services/mobile-apps",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts visitors into customers with beautiful, intuitive interfaces.",
    features: [
      "Design Systems",
      "User Research",
      "Prototyping",
      "Brand Identity",
    ],
    href: "/services/ui-ux",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your applications running smoothly and securely.",
    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Performance Optimization",
      "Technical Support",
    ],
    href: "/services/maintenance",
    color: "from-green-500 to-emerald-500",
  },
];

const handleWhatsApp = () => {
  window.open("https://wa.me/919693759948", "_blank");
};

export const ServicesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end development services
            that help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="h-full bg-[#b1a496] bg-card/30 rounded-xl p-6 lg:p-8 border border-border shadow-soft hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary text-black transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-black/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground text-black"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={service.href} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full group-hover:border-accent group-hover:text-accent transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>

                    <Button
                      onClick={handleWhatsApp}
                      className="bg-accent hover:bg-accent/90 text-white group-hover:scale-105 transition-transform duration-300"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#b1a496] bg-card/30 rounded-xl p-6 lg:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
              Ready to start your project?
            </h3>
            <p className="text-black/80 mb-6">
              Let's discuss your requirements and create something amazing
              together.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Book a Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
