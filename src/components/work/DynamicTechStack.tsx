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
  key: "typescript",
  title: "TypeScript",
  desc: "TypeScript adds strong typing on top of JavaScript, making codebases more predictable, maintainable, and scalable. We use it when building large applications that demand long-term reliability, better developer productivity, and fewer runtime bugs.",
  },
  {
    key: "tailwind",
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework that enables rapid, consistent, and responsive UI development. We use it for projects that need custom designs without the overhead of writing repetitive CSS, ensuring speed and design consistency.",
  },
  {
  key: "react-native",
  title: "React Native",
  desc: "React Native enables us to build cross-platform mobile apps using JavaScript and React. We choose it when speed-to-market is essential, and a single codebase needs to serve both iOS and Android users without compromising performance.",
  },
  {
    key: "flutter",
    title: "Flutter",
    desc: "Flutter, powered by Google, lets us build visually rich, natively compiled apps from one codebase. We use it when design consistency and high performance across mobile, web, and desktop platforms are key.",
  },
  {
    key: "ios",
    title: "iOS Development",
    desc: "Native iOS development with Swift/Objective-C ensures deep integration with Apple’s ecosystem. We use it when building high-performance, platform-specific apps that require advanced features like ARKit, CoreML, or system-level APIs.",
  },
  {
    key: "android",
    title: "Android Development",
    desc: "Native Android development with Kotlin/Java gives us full access to the Android ecosystem. We use it for apps that need maximum performance, hardware-level integration, or custom features beyond cross-platform limits.",
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
    key: "python",
    title: "Python",
    desc: "Python is a versatile language with strengths in AI, data science, automation, and backend APIs. We use it when building machine learning pipelines, quick prototypes, or reliable backends for data-heavy applications.",
  },
  {
    key: "sql",
    title: "SQL",
    desc: "SQL (Structured Query Language) is the backbone of relational databases, enabling precise data querying and manipulation. We use SQL when applications require structured data, reporting, or transactional consistency.",
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    desc: "PostgreSQL is a powerful, open-source relational database known for reliability and advanced features. We choose it when applications need complex queries, strong ACID compliance, or scalability for enterprise workloads.",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    desc: "MongoDB is a NoSQL database designed for flexibility and scale, storing data in JSON-like documents. We use it when projects require fast iteration, schema flexibility, or handling unstructured/large-scale datasets.",
  },
  {
    key: "aws",
    title: "AWS",
    desc: "Amazon Web Services (AWS) is the industry-leading cloud platform with unmatched breadth of services. From compute and storage to AI and IoT, AWS provides everything needed to scale globally. We leverage AWS for enterprise-grade projects where flexibility, compliance, and high availability are key, such as e-commerce platforms, SaaS products, and data-heavy applications.",
  },
  {
    key: "docker",
    title: "Docker",
    desc: "Docker allows applications to run in isolated containers, ensuring consistency across environments. We use it for microservices, deployments, and CI/CD pipelines where reproducibility and portability are critical.",
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    desc: "Kubernetes is the industry standard for orchestrating containerized applications at scale. We use it when projects require high availability, auto-scaling, or managing complex cloud-native architectures.",
  },
  {
    key: "cicd",
    title: "CI/CD",
    desc: "Continuous Integration and Continuous Deployment (CI/CD) automates testing and releases. We implement CI/CD pipelines to ensure faster iterations, fewer errors, and seamless delivery of new features to production.",
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
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 flex flex-col gap-3 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
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
