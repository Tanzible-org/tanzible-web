import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️", description: "Component-based UI library" },
      { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
      { name: "TypeScript", icon: "TS", description: "Type-safe JavaScript" },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        description: "Utility-first CSS framework",
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      {
        name: "Python",
        icon: "🐍",
        description: "Versatile programming language",
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        description: "Robust relational database",
      },
      { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
    ],
  },
  {
    category: "Mobile",
    technologies: [
      {
        name: "React Native",
        icon: "📱",
        description: "Cross-platform mobile apps",
      },
      { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" },
      { name: "iOS", icon: "🍎", description: "Native iOS development" },
      {
        name: "Android",
        icon: "🤖",
        description: "Native Android development",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
      { name: "Docker", icon: "🐳", description: "Containerization platform" },
      {
        name: "Kubernetes",
        icon: "⚓",
        description: "Container orchestration",
      },
      { name: "CI/CD", icon: "🔄", description: "Automated deployment" },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
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
            Modern Tech Stack
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            We use cutting-edge technologies and proven frameworks to build
            scalable, maintainable, and future-proof applications.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                {category.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="group bg-card/30 rounded-lg p-4 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Tech Icon */}
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                      {tech.icon}
                    </div>

                    {/* Tech Name */}
                    <h4 className="font-semibold text-black mb-2 group-hover:text-accent transition-colors duration-200">
                      {tech.name}
                    </h4>

                    {/* Tech Description */}
                    <p className="text-sm text-black/70 group-hover:text-white/90 transition-colors duration-200">
                      {tech.description}
                    </p>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { stat: "50+", label: "Technologies Mastered" },
            { stat: "99.9%", label: "Uptime Guarantee" },
            { stat: "24/7", label: "Development Support" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-card rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-accent mb-2">
                {item.stat}
              </div>
              <div className="text-black/80">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Need a specific technology?
            </h3>
            <p className="text-black/80 mb-6">
              Our team stays current with the latest technologies. If you have
              specific requirements, we're ready to adapt.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://wa.me/919693759948", "_blank")
              }
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors duration-300"
            >
              Discuss Your Tech Stack
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
