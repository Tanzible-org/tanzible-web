import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techs: { key: string; title: string; desc: string }[] = [
  {
    key: "react",
    title: "React",
    desc: "React is our go-to for building modern user interfaces. Its component-based architecture allows us to create modular, reusable, and highly interactive front-ends. We choose React when speed, scalability, and smooth user experiences are critical, for example, dashboards, SaaS platforms, or consumer-facing apps where performance matters.",
  },
  {
    key: "next",
    title: "Next.js",
    desc: "Next.js extends React with production-grade features like server-side rendering, static site generation, and API routes. We use it when SEO, initial load speed, or content-heavy applications are priorities, such as marketing sites, e-commerce stores, and applications that need global reach with blazing-fast performance.",
  },
  {
    key: "angular",
    title: "Angular",
    desc: "Angular is a full-featured framework backed by Google. It shines in large-scale, enterprise-grade projects that need structure, strong typing (with TypeScript), and robust tooling out of the box. We pick Angular when teams need maintainability, consistency, and long-term support, especially for complex business applications.",
  },
  {
    key: "node",
    title: "Node.js",
    desc: "Node.js allows us to build fast, scalable backends using JavaScript on the server. Its event-driven, non-blocking I/O model is ideal for APIs, real-time applications, and microservices. We leverage Node.js when performance under heavy load is essential, like chat apps, streaming services, or high-traffic APIs.",
  },
  {
    key: "dotnet",
    title: ".NET",
    desc: ".NET is a mature Microsoft-backed framework perfect for enterprise environments. With strong language support (C#, F#), excellent performance, and built-in security, we use it when building large, mission-critical systems, such as financial platforms, healthcare solutions, or enterprise-grade backoffice tools.",
  },
  {
  key: "java",
  title: "Java",
  desc: "Java is a battle-tested, object-oriented language widely used in enterprise environments. Its strong typing, portability, and massive ecosystem make it ideal for large-scale, mission-critical applications. We use Java for banking systems, telecom services, and platforms that demand reliability, scalability, and long-term maintainability.",
},
{
  key: "aws",
  title: "AWS",
  desc: "Amazon Web Services (AWS) is the industry-leading cloud platform with unmatched breadth of services. From compute and storage to AI and IoT, AWS provides everything needed to scale globally. We leverage AWS for enterprise-grade projects where flexibility, compliance, and high availability are key, such as e-commerce platforms, SaaS products, and data-heavy applications.",
},
{
  key: "azure",
  title: "Azure",
  desc: "Microsoft Azure integrates seamlessly with enterprise IT environments and Microsoft tools. Its strengths lie in hybrid cloud, compliance, and security, making it a natural choice for businesses already invested in Microsoft technologies. We choose Azure for industries like healthcare, finance, and government, where regulatory needs and deep Microsoft stack integration are critical.",
},
{
  key: "heroku",
  title: "Heroku",
  desc: "Heroku is a developer-friendly Platform-as-a-Service (PaaS) that allows rapid deployment without server management. Its simplicity and strong ecosystem of add-ons make it perfect for startups, prototypes, and fast-moving projects. We use Heroku when speed-to-market is essential, especially for MVPs, proof-of-concepts, or applications that need to scale smoothly without heavy infrastructure overhead.",
},
];


const DynamicTechStack = () => {
  const [active, setActive] = useState<string>(techs[0].key);

  return (
    <section className="bg-[#B1A496] py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Tech Stack
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            We combine technical expertise with creative thinking to deliver
            solutions that move your business forward.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left list */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
  <div className="flex flex-col gap-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
    {techs.map((t) => (
      <button
        key={t.key}
        onClick={() => setActive(t.key)}
        className={`relative text-left px-4 py-3 rounded-lg transition-all duration-200 w-full font-medium
          ${
            active === t.key
              ? "bg-white/20 text-white border border-white/20 shadow-md"
              : "bg-transparent text-white/80 hover:bg-white/10 border border-transparent"
          }`}
      >
        {t.title}
        {active === t.key && (
          <motion.div
            layoutId="activeHighlight"
            className="absolute inset-0 rounded-lg border border-white/30"
            transition={{ duration: 0.25 }}
          />
        )}
      </button>
    ))}
  </div>
</div>

          {/* Right detail display */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl text-white"
              >
                <h4 className="text-2xl font-semibold mb-3 text-white">
                  {techs.find((t) => t.key === active)?.title}
                </h4>
                <p className="text-base text-white/90 leading-relaxed">
                  {techs.find((t) => t.key === active)?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicTechStack;
