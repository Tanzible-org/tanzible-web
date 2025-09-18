import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Apps",
    description:
      "Creating robust, scalable web applications focused on performance and maintainability.",
    href: "/services/web-apps",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Building native and cross-platform mobile solutions that delight users on every device.",
    href: "/services/mobile-apps",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and stunning user experiences driven by research and visual clarity.",
    href: "/services/ui-ux-design",
    color: "from-orange-400 to-rose-500",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description:
      "Providing ongoing support, updates, and performance tuning to ensure long-term success.",
    href: "/services/support-maintenance",
    color: "from-green-400 to-emerald-500",
  },
];

export const CoreServicesSection = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Our Core Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-black/75">
            We combine technical expertise with creative thinking to deliver
            solutions that move your business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group"
            >
              <Link to={s.href} className="block">
                <div className="h-full bg-white/60 dark:bg-gray-900/40 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br ${s.color} text-white flex-shrink-0`}
                    >
                      <s.icon className="w-7 h-7" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-black/80">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
