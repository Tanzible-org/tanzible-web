import { motion } from "framer-motion";
import { Search, Target, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into your business goals, target audience, and technical requirements to understand the full scope of your project.",
    details: [
      "Requirements gathering",
      "Market research",
      "Technical analysis",
      "Timeline planning",
    ],
  },
  {
    icon: Target,
    title: "Define",
    description:
      "Creating a clear roadmap with defined objectives, user stories, and technical specifications for optimal results.",
    details: [
      "Project scope",
      "User stories",
      "Technical specs",
      "Success metrics",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Crafting beautiful, user-centered designs that align with your brand and provide exceptional user experiences.",
    details: ["Wireframing", "UI/UX design", "Prototyping", "Design system"],
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Developing robust, scalable solutions using modern technologies and best practices with regular updates.",
    details: [
      "Frontend development",
      "Backend architecture",
      "Quality assurance",
      "Performance optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Seamless deployment to production with ongoing support, monitoring, and optimization for continued success.",
    details: [
      "Deployment",
      "Launch support",
      "Performance monitoring",
      "Ongoing maintenance",
    ],
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
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
            Our Proven Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            A systematic approach that ensures your project is delivered on
            time, within budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-secondary to-accent opacity-30" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="glass-card rounded-xl p-8 max-w-md mx-auto lg:mx-0 bg-[#f0eee8]">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-black/80 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-black/70"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-glow"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-glow-pulse" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto bg-[#f0eee8]">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to see our process in action?
            </h3>
            <p className="text-black/80 mb-6">
              Let's schedule a call to discuss your project and how we can help
              bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://wa.me/919693759948", "_blank")
              }
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
