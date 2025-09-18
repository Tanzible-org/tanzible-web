// // // // import { motion } from "framer-motion";

// // // // const techCategories = [
// // // //   {
// // // //     category: "Frontend",
// // // //     technologies: [
// // // //       { name: "React", icon: "⚛️", description: "Component-based UI library" },
// // // //       { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
// // // //       { name: "TypeScript", icon: "TS", description: "Type-safe JavaScript" },
// // // //       {
// // // //         name: "Tailwind CSS",
// // // //         icon: "🎨",
// // // //         description: "Utility-first CSS framework",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     category: "Backend",
// // // //     technologies: [
// // // //       { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
// // // //       {
// // // //         name: "Python",
// // // //         icon: "🐍",
// // // //         description: "Versatile programming language",
// // // //       },
// // // //       {
// // // //         name: "PostgreSQL",
// // // //         icon: "🐘",
// // // //         description: "Robust relational database",
// // // //       },
// // // //       { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
// // // //     ],
// // // //   },
// // // //   {
// // // //     category: "Mobile",
// // // //     technologies: [
// // // //       {
// // // //         name: "React Native",
// // // //         icon: "📱",
// // // //         description: "Cross-platform mobile apps",
// // // //       },
// // // //       { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" },
// // // //       { name: "iOS", icon: "🍎", description: "Native iOS development" },
// // // //       {
// // // //         name: "Android",
// // // //         icon: "🤖",
// // // //         description: "Native Android development",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     category: "Cloud & DevOps",
// // // //     technologies: [
// // // //       { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
// // // //       { name: "Docker", icon: "🐳", description: "Containerization platform" },
// // // //       {
// // // //         name: "Kubernetes",
// // // //         icon: "⚓",
// // // //         description: "Container orchestration",
// // // //       },
// // // //       { name: "CI/CD", icon: "🔄", description: "Automated deployment" },
// // // //     ],
// // // //   },
// // // // ];

// // // // export const TechStackSection = () => {
// // // //   return (
// // // //     <section className="py-24 px-4 sm:px-6 lg:px-8">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Section Header */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="text-center mb-16"
// // // //         >
// // // //           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
// // // //             Modern Tech Stack
// // // //           </h2>
// // // //           <p className="text-xl text-black/80 max-w-3xl mx-auto">
// // // //             We use cutting-edge technologies and proven frameworks to build
// // // //             scalable, maintainable, and future-proof applications.
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* Tech Categories */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //           {techCategories.map((category, categoryIndex) => (
// // // //             <motion.div
// // // //               key={category.category}
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true }}
// // // //               transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
// // // //               className="glass-card rounded-xl p-8"
// // // //             >
// // // //               <h3 className="text-2xl font-bold text-black mb-6 text-center">
// // // //                 {category.category}
// // // //               </h3>

// // // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //                 {category.technologies.map((tech, techIndex) => (
// // // //                   <motion.div
// // // //                     key={tech.name}
// // // //                     initial={{ opacity: 0, scale: 0.8 }}
// // // //                     whileInView={{ opacity: 1, scale: 1 }}
// // // //                     viewport={{ once: true }}
// // // //                     transition={{
// // // //                       duration: 0.4,
// // // //                       delay: categoryIndex * 0.1 + techIndex * 0.05,
// // // //                     }}
// // // //                     whileHover={{
// // // //                       scale: 1.05,
// // // //                       y: -4,
// // // //                       transition: { duration: 0.2 },
// // // //                     }}
// // // //                     className="group bg-card/30 rounded-lg p-4 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
// // // //                   >
// // // //                     {/* Tech Icon */}
// // // //                     <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
// // // //                       {tech.icon}
// // // //                     </div>

// // // //                     {/* Tech Name */}
// // // //                     <h4 className="font-semibold text-black mb-2 group-hover:text-accent transition-colors duration-200">
// // // //                       {tech.name}
// // // //                     </h4>

// // // //                     {/* Tech Description */}
// // // //                     <p className="text-sm text-black/70 group-hover:text-white/90 transition-colors duration-200">
// // // //                       {tech.description}
// // // //                     </p>

// // // //                     {/* Hover Glow */}
// // // //                     <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Stats Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.6, delay: 0.4 }}
// // // //           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
// // // //         >
// // // //           {[
// // // //             { stat: "50+", label: "Technologies Mastered" },
// // // //             { stat: "99.9%", label: "Uptime Guarantee" },
// // // //             { stat: "24/7", label: "Development Support" },
// // // //           ].map((item, index) => (
// // // //             <motion.div
// // // //               key={item.label}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               className="text-center glass-card rounded-xl p-6"
// // // //             >
// // // //               <div className="text-4xl font-bold text-accent mb-2">
// // // //                 {item.stat}
// // // //               </div>
// // // //               <div className="text-black/80">{item.label}</div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </motion.div>

// // // //         {/* Bottom CTA */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.6, delay: 0.6 }}
// // // //           className="text-center mt-16"
// // // //         >
// // // //           <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
// // // //             <h3 className="text-2xl font-bold text-black mb-4">
// // // //               Need a specific technology?
// // // //             </h3>
// // // //             <p className="text-black/80 mb-6">
// // // //               Our team stays current with the latest technologies. If you have
// // // //               specific requirements, we're ready to adapt.
// // // //             </p>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() =>
// // // //                 window.open("https://wa.me/919693759948", "_blank")
// // // //               }
// // // //               className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors duration-300"
// // // //             >
// // // //               Discuss Your Tech Stack
// // // //             </motion.button>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };
// // // "use client";

// // // import React, { useEffect } from "react";
// // // import { motion, useAnimation, useReducedMotion } from "framer-motion";

// // // /* =============== Data =============== */
// // // const techCategories = [
// // //   {
// // //     category: "Frontend",
// // //     technologies: [
// // //       { name: "React", icon: "⚛️", description: "Component-based UI library" },
// // //       { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
// // //       { name: "TypeScript", icon: "TS", description: "Type-safe JavaScript" },
// // //       {
// // //         name: "Tailwind CSS",
// // //         icon: "🎨",
// // //         description: "Utility-first CSS framework",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Backend",
// // //     technologies: [
// // //       { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
// // //       {
// // //         name: "Python",
// // //         icon: "🐍",
// // //         description: "Versatile programming language",
// // //       },
// // //       {
// // //         name: "PostgreSQL",
// // //         icon: "🐘",
// // //         description: "Robust relational database",
// // //       },
// // //       { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
// // //     ],
// // //   },
// // //   {
// // //     category: "Mobile",
// // //     technologies: [
// // //       {
// // //         name: "React Native",
// // //         icon: "📱",
// // //         description: "Cross-platform mobile apps",
// // //       },
// // //       { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" },
// // //       { name: "iOS", icon: "🍎", description: "Native iOS development" },
// // //       {
// // //         name: "Android",
// // //         icon: "🤖",
// // //         description: "Native Android development",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Cloud & DevOps",
// // //     technologies: [
// // //       { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
// // //       { name: "Docker", icon: "🐳", description: "Containerization platform" },
// // //       {
// // //         name: "Kubernetes",
// // //         icon: "⚓",
// // //         description: "Container orchestration",
// // //       },
// // //       { name: "CI/CD", icon: "🔄", description: "Automated deployment" },
// // //     ],
// // //   },
// // // ];

// // // /* =============== Row (Marquee) =============== */
// // // type Direction = "left" | "right";

// // // function LoopingRow({
// // //   items,
// // //   speed = 24, // seconds per loop (increase for slower)
// // //   direction = "left",
// // //   className = "",
// // // }: {
// // //   items: { name: string; icon: string; description: string }[];
// // //   speed?: number;
// // //   direction?: Direction;
// // //   className?: string;
// // // }) {
// // //   const controls = useAnimation();
// // //   const reduceMotion = useReducedMotion();

// // //   const startTween = () =>
// // //     controls.start({
// // //       x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
// // //       transition: {
// // //         duration: speed,
// // //         repeat: Infinity,
// // //         ease: "linear",
// // //       },
// // //     });

// // //   useEffect(() => {
// // //     if (reduceMotion) return;
// // //     startTween();
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, [direction, speed, reduceMotion]);

// // //   const doubled = [...items, ...items];

// // //   return (
// // //     <div className={`relative overflow-hidden ${className}`}>
// // //       {/* Gradient edges for a nice fade */}
// // //       <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
// // //       <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

// // //       <motion.div
// // //         aria-label="Scrolling technologies"
// // //         className="flex gap-4 whitespace-nowrap"
// // //         animate={controls}
// // //         onHoverStart={() => controls.stop()}
// // //         onHoverEnd={() => !reduceMotion && startTween()}
// // //       >
// // //         {doubled.map((tech, i) => (
// // //           <div
// // //             key={`${tech.name}-${i}`}
// // //             className="relative flex-none w-64 cursor-pointer"
// // //           >
// // //             <div className="group bg-card/30 glass-card rounded-xl p-4 border border-border hover:border-accent/50 transition-all duration-300">
// // //               <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
// // //                 {tech.icon}
// // //               </div>
// // //               <div className="font-semibold text-black mb-1 group-hover:text-accent transition-colors duration-200">
// // //                 {tech.name}
// // //               </div>
// // //               <div className="text-sm text-black/70 group-hover:text-white/90 transition-colors duration-200 line-clamp-2">
// // //                 {tech.description}
// // //               </div>

// // //               {/* Hover Glow */}
// // //               <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }

// // // /* =============== Section =============== */
// // // export const TechStackSection = () => {
// // //   return (
// // //     <section className="py-24 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center mb-12"
// // //         >
// // //           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
// // //             Modern Tech Stack
// // //           </h2>
// // //           <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
// // //             We use cutting-edge technologies and proven frameworks to build
// // //             scalable, maintainable, and future-proof applications.
// // //           </p>
// // //         </motion.div>

// // //         {/* Moving Rows (one row per category) */}
// // //         <div className="space-y-10">
// // //           {techCategories.map((cat, idx) => (
// // //             <div key={cat.category} className="space-y-4">
// // //               <div className="flex items-center justify-between">
// // //                 <h3 className="text-xl md:text-2xl font-bold text-black">
// // //                   {cat.category}
// // //                 </h3>
// // //                 {/* Optional small badge */}
// // //                 <span className="text-sm bg-black/5 text-black/70 px-3 py-1 rounded-full">
// // //                   {cat.technologies.length} tools
// // //                 </span>
// // //               </div>

// // //               <LoopingRow
// // //                 items={cat.technologies}
// // //                 // Alternate direction for subtle parallax effect
// // //                 direction={idx % 2 === 0 ? "left" : "right"}
// // //                 speed={24}
// // //                 className="h-[128px]"
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Bottom CTA */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6, delay: 0.2 }}
// // //           className="text-center mt-16"
// // //         >
// // //           <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
// // //             <h3 className="text-2xl font-bold text-black mb-3">
// // //               Need a specific technology?
// // //             </h3>
// // //             <p className="text-black/80 mb-6">
// // //               Our team stays current with the latest technologies. If you have
// // //               specific requirements, we're ready to adapt.
// // //             </p>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() =>
// // //                 window.open("https://wa.me/919693759948", "_blank")
// // //               }
// // //               className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors duration-300"
// // //             >
// // //               Discuss Your Tech Stack
// // //             </motion.button>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };
// // "use client";

// // import React, { useEffect } from "react";
// // import { motion, useAnimation, useReducedMotion } from "framer-motion";

// // /* ================== Data ================== */
// // const techCategories = [
// //   {
// //     category: "Frontend",
// //     technologies: [
// //       { name: "React", icon: "⚛️", description: "Component-based UI library" },
// //       { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
// //       { name: "TypeScript", icon: "TS", description: "Type-safe JavaScript" },
// //       {
// //         name: "Tailwind CSS",
// //         icon: "🎨",
// //         description: "Utility-first CSS framework",
// //       },
// //     ],
// //   },
// //   {
// //     category: "Backend",
// //     technologies: [
// //       { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
// //       {
// //         name: "Python",
// //         icon: "🐍",
// //         description: "Versatile programming language",
// //       },
// //       {
// //         name: "PostgreSQL",
// //         icon: "🐘",
// //         description: "Robust relational database",
// //       },
// //       { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
// //     ],
// //   },
// //   {
// //     category: "Mobile",
// //     technologies: [
// //       {
// //         name: "React Native",
// //         icon: "📱",
// //         description: "Cross-platform mobile apps",
// //       },
// //       { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" },
// //       { name: "iOS", icon: "🍎", description: "Native iOS development" },
// //       {
// //         name: "Android",
// //         icon: "🤖",
// //         description: "Native Android development",
// //       },
// //     ],
// //   },
// //   {
// //     category: "Cloud & DevOps",
// //     technologies: [
// //       { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
// //       { name: "Docker", icon: "🐳", description: "Containerization platform" },
// //       {
// //         name: "Kubernetes",
// //         icon: "⚓",
// //         description: "Container orchestration",
// //       },
// //       { name: "CI/CD", icon: "🔄", description: "Automated deployment" },
// //     ],
// //   },
// // ];

// // /* =============== Pretty Glass Card =============== */
// // function TechCard({
// //   tech,
// //   delay = 0,
// // }: {
// //   tech: { name: string; icon: string; description: string };
// //   delay?: number;
// // }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.92, y: 6 }}
// //       whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.35, delay }}
// //       whileHover={{ y: -4, scale: 1.03, rotate: -0.25 }}
// //       className="relative flex-none w-72 cursor-pointer group"
// //     >
// //       {/* Animated gradient border wrapper */}
// //       <div className="relative rounded-2xl p-[1px]">
// //         <span
// //           className="
// //             absolute -inset-[1px] rounded-2xl opacity-70 blur
// //             bg-[conic-gradient(var(--tw-gradient-stops))]
// //             from-accent via-white/30 to-secondary
// //             animate-spin-slow
// //             group-hover:opacity-100
// //           "
// //           aria-hidden
// //         />
// //         {/* Card body */}
// //         <div
// //           className="
// //             relative rounded-2xl h-full
// //             bg-white/10 dark:bg-neutral-900/40
// //             backdrop-blur-xl
// //             border border-white/20 dark:border-white/10
// //             shadow-[0_8px_30px_rgba(0,0,0,0.12)]
// //             transition-all duration-300
// //             group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
// //             group-hover:border-white/30
// //           "
// //         >
// //           {/* Top sheen */}
// //           <span
// //             className="
// //               pointer-events-none absolute inset-x-0 -top-10 h-24
// //               bg-gradient-to-b from-white/40 to-transparent
// //               opacity-60 rounded-t-2xl
// //             "
// //           />
// //           <div className="p-5">
// //             {/* Icon capsule */}
// //             <div
// //               className="
// //                 mb-3 inline-flex items-center justify-center
// //                 size-12 rounded-xl
// //                 bg-gradient-to-tr from-accent/30 to-secondary/30
// //                 border border-white/30 dark:border-white/10
// //                 ring-1 ring-white/40
// //                 shadow-lg
// //                 group-hover:scale-105 transition
// //               "
// //             >
// //               <span className="text-2xl leading-none">{tech.icon}</span>
// //             </div>

// //             {/* Title */}
// //             <h4
// //               className="
// //                 font-semibold text-black dark:text-white mb-1
// //                 group-hover:text-accent transition-colors
// //               "
// //             >
// //               {tech.name}
// //             </h4>

// //             {/* Description */}
// //             <p className="text-sm text-black/70 dark:text-white/80 line-clamp-2">
// //               {tech.description}
// //             </p>
// //           </div>

// //           {/* Soft hover glow */}
// //           <span
// //             className="
// //               pointer-events-none absolute inset-0 rounded-2xl
// //               opacity-0 group-hover:opacity-100
// //               transition-opacity duration-300
// //               bg-[radial-gradient(120px_80px_at_80%_0%,theme(colors.accent/15),transparent_60%)]
// //             "
// //           />
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // /* =============== Looping Row (Marquee) =============== */
// // type Direction = "left" | "right";

// // function LoopingRow({
// //   items,
// //   speed = 24, // seconds per loop
// //   direction = "left",
// //   className = "",
// // }: {
// //   items: { name: string; icon: string; description: string }[];
// //   speed?: number;
// //   direction?: Direction;
// //   className?: string;
// // }) {
// //   const controls = useAnimation();
// //   const reduceMotion = useReducedMotion();

// //   const startTween = () =>
// //     controls.start({
// //       x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
// //       transition: {
// //         duration: speed,
// //         repeat: Infinity,
// //         ease: "linear",
// //       },
// //     });

// //   useEffect(() => {
// //     if (reduceMotion) return;
// //     startTween();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [direction, speed, reduceMotion]);

// //   const doubled = [...items, ...items];

// //   return (
// //     <div className={`relative overflow-hidden ${className}`}>
// //       {/* Edge fades */}
// //       <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent" />
// //       <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent" />

// //       <motion.div
// //         aria-label="Scrolling technologies"
// //         className="flex gap-4 whitespace-nowrap will-change-transform"
// //         animate={controls}
// //         onHoverStart={() => controls.stop()}
// //         onHoverEnd={() => !reduceMotion && startTween()}
// //       >
// //         {doubled.map((tech, i) => (
// //           <TechCard key={`${tech.name}-${i}`} tech={tech} delay={i * 0.02} />
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // /* =============== Section =============== */
// // export const TechStackSection = () => {
// //   return (
// //     <section className="py-24 px-4 sm:px-6 lg:px-8">
// //       {/* <div className="max-w-7xl mx-auto"> */}
// //       {/* Header */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="text-center mb-12"
// //       >
// //         <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
// //           Modern Tech Stack
// //         </h2>
// //         <p className="text-lg md:text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
// //           We use cutting-edge technologies and proven frameworks to build
// //           scalable, maintainable, and future-proof applications.
// //         </p>
// //       </motion.div>

// //       {/* Moving Rows */}
// //       <div className="space-y-10">
// //         {techCategories.map((cat, idx) => (
// //           <div key={cat.category} className="space-y-4">
// //             <div className="flex items-center justify-between">
// //               <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
// //                 {cat.category}
// //               </h3>
// //               <span className="text-sm bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/80 px-3 py-1 rounded-full">
// //                 {cat.technologies.length} tools
// //               </span>
// //             </div>

// //             <LoopingRow
// //               items={cat.technologies}
// //               direction={idx % 2 === 0 ? "left" : "right"}
// //               speed={24}
// //               className="h-[140px]"
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {/* CTA */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6, delay: 0.2 }}
// //         className="text-center mt-16"
// //       >
// //         <div
// //           className="
// //               relative rounded-2xl p-[1px] max-w-2xl mx-auto
// //             "
// //         >
// //           <span
// //             className="
// //                 absolute -inset-[1px] rounded-2xl opacity-70 blur
// //                 bg-[conic-gradient(var(--tw-gradient-stops))]
// //                 from-accent via-white/30 to-secondary
// //               "
// //             aria-hidden
// //           />
// //           <div
// //             className="
// //                 relative glass rounded-2xl
// //                 bg-white/10 dark:bg-neutral-900/40
// //                 backdrop-blur-xl
// //                 border border-white/20 dark:border-white/10
// //                 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
// //                 p-8
// //               "
// //           >
// //             <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
// //               Need a specific technology?
// //             </h3>
// //             <p className="text-black/80 dark:text-white/80 mb-6">
// //               Our team stays current with the latest technologies. If you have
// //               specific requirements, we&apos;re ready to adapt.
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() =>
// //                 window.open("https://wa.me/919693759948", "_blank")
// //               }
// //               className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors duration-300"
// //             >
// //               Discuss Your Tech Stack
// //             </motion.button>
// //           </div>
// //         </div>
// //       </motion.div>
// //       {/* </div> */}
// //     </section>
// //   );
// // };
// "use client";

// import React, { useEffect } from "react";
// import { motion, useAnimation, useReducedMotion } from "framer-motion";

// /* ================== Data ================== */
// const techCategories = [
//   {
//     category: "Frontend",
//     technologies: [
//       { name: "React", icon: "⚛️", description: "Component-based UI library" },
//       { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
//       { name: "TypeScript", icon: "TS", description: "Type-safe JavaScript" },
//       {
//         name: "Tailwind CSS",
//         icon: "🎨",
//         description: "Utility-first CSS framework",
//       },
//     ],
//   },
//   {
//     category: "Backend",
//     technologies: [
//       { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
//       {
//         name: "Python",
//         icon: "🐍",
//         description: "Versatile programming language",
//       },
//       {
//         name: "PostgreSQL",
//         icon: "🐘",
//         description: "Robust relational database",
//       },
//       { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
//     ],
//   },
//   {
//     category: "Mobile",
//     technologies: [
//       {
//         name: "React Native",
//         icon: "📱",
//         description: "Cross-platform mobile apps",
//       },
//       { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" },
//       { name: "iOS", icon: "🍎", description: "Native iOS development" },
//       {
//         name: "Android",
//         icon: "🤖",
//         description: "Native Android development",
//       },
//     ],
//   },
//   {
//     category: "Cloud & DevOps",
//     technologies: [
//       { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
//       { name: "Docker", icon: "🐳", description: "Containerization platform" },
//       {
//         name: "Kubernetes",
//         icon: "⚓",
//         description: "Container orchestration",
//       },
//       { name: "CI/CD", icon: "🔄", description: "Automated deployment" },
//     ],
//   },
// ];

// /* =============== Testimonial-style Card (shape only) =============== */
// function TechCard({
//   tech,
//   delay = 0,
// }: {
//   tech: { name: string; icon: string; description: string };
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay }}
//       className="flex-0"
//     >
//       <div className="w-[280px] sm:w-[320px] lg:w-[360px]">
//         {/* Outer gradient border + inner white card (same shape as testimonials) */}
//         <div className="relative rounded-[22px] p-[2px] bg-gradient-to-br from-[#9BB6FF] to-[#3958B4] shadow-md h-full">
//           <div className="rounded-[20px] bg-white dark:bg-white h-full p-5 sm:p-6 flex flex-col">
//             {/* Top row: icon + name */}
//             <div className="flex items-center gap-3">
//               <div className="grid place-items-center h-10 w-10 rounded-full bg-[#EEF3FF] ring-2 ring-white shadow">
//                 <span className="text-xl leading-none">{tech.icon}</span>
//               </div>
//               <div>
//                 <div className="font-semibold text-gray-900">{tech.name}</div>
//                 <div className="text-xs text-gray-500">Technology</div>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="mt-4 text-sm text-gray-700 leading-relaxed flex-1">
//               {tech.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* =============== Looping Row (Marquee) =============== */
// type Direction = "left" | "right";

// function LoopingRow({
//   items,
//   speed = 24, // seconds per loop
//   direction = "left",
//   className = "",
// }: {
//   items: { name: string; icon: string; description: string }[];
//   speed?: number;
//   direction?: Direction;
//   className?: string;
// }) {
//   const controls = useAnimation();
//   const reduceMotion = useReducedMotion();

//   const startTween = () =>
//     controls.start({
//       x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
//       transition: { duration: speed, repeat: Infinity, ease: "linear" },
//     });

//   useEffect(() => {
//     if (reduceMotion) return;
//     startTween();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [direction, speed, reduceMotion]);

//   const doubled = [...items, ...items];

//   return (
//     <div className={`relative overflow-hidden ${className}`}>
//       {/* Edge fades like a carousel viewport */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent" />

//       <motion.div
//         aria-label="Scrolling technologies"
//         className="flex gap-6 whitespace-nowrap will-change-transform"
//         animate={controls}
//         onHoverStart={() => controls.stop()}
//         onHoverEnd={() => !reduceMotion && startTween()}
//       >
//         {doubled.map((tech, i) => (
//           <TechCard key={`${tech.name}-${i}`} tech={tech} delay={i * 0.04} />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// /* =============== Section =============== */
// export const TechStackSection = () => {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
//           Modern Tech Stack
//         </h2>
//         <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
//           We use cutting-edge technologies and proven frameworks to build
//           scalable, maintainable, and future-proof applications.
//         </p>
//       </motion.div>

//       {/* Auto-scrolling rows (unchanged behavior) */}
//       <div className="space-y-10">
//         {techCategories.map((cat, idx) => (
//           <div key={cat.category} className="space-y-4">
//             <div className="flex items-center justify-between">
//               <h3 className="text-xl md:text-2xl font-bold text-black">
//                 {cat.category}
//               </h3>
//               <span className="text-sm bg-black/5 text-black/70 px-3 py-1 rounded-full">
//                 {cat.technologies.length} tools
//               </span>
//             </div>

//             <LoopingRow
//               items={cat.technologies}
//               direction={idx % 2 === 0 ? "left" : "right"}
//               speed={24}
//               className="h-[160px]"
//             />
//           </div>
//         ))}
//       </div>

//       {/* CTA (unchanged) */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-center mt-16"
//       >
//         <div className="relative rounded-[22px] p-[2px] bg-gradient-to-br from-[#9BB6FF] to-[#3958B4] max-w-2xl mx-auto shadow-md">
//           <div className="rounded-[20px] bg-white p-8">
//             <h3 className="text-2xl font-bold text-black mb-3">
//               Need a specific technology?
//             </h3>
//             <p className="text-black/80 mb-6">
//               Our team stays current with the latest technologies. If you have
//               specific requirements, we&apos;re ready to adapt.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() =>
//                 window.open("https://wa.me/919693759948", "_blank")
//               }
//               className="bg-[#3958B4] hover:brightness-110 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
//             >
//               Discuss Your Tech Stack
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };
"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

/* ================== Data ================== */
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

/* =============== GLASS CARD (previous colors) =============== */
function TechCard({
  tech,
  delay = 0,
}: {
  tech: { name: string; icon: string; description: string };
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex-0"
    >
      {/* Keep testimonial-like footprint */}
      <div className="w-[280px] sm:w-[320px] lg:w-[360px]">
        {/* Glass gradient ring + translucent body */}
        <div className="relative rounded-[22px] p-[2px] h-full">
          {/* Gradient ring in your previous palette (accent/secondary) */}
          <span
            className="
              absolute -inset-[2px] rounded-[24px] opacity-70 blur
              bg-[conic-gradient(var(--tw-gradient-stops))]
              from-accent via-white/30 to-secondary
             
            "
            aria-hidden
          />
          {/* GLASS body */}
          <div
            className="
              relative rounded-[20px]
              bg-white/10 dark:bg-neutral-900/40
              backdrop-blur-xl
              border border-white/25 dark:border-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              p-5 sm:p-6
              transition-all duration-300
            "
          >
            {/* Header: icon + name */}
            <div className="flex items-center gap-3">
              <div
                className="
                  grid place-items-center h-10 w-10 rounded-xl
                  bg-gradient-to-tr from-accent/30 to-secondary/30
                  border border-white/30 dark:border-white/10
                  ring-1 ring-white/40 shadow
                "
              >
                <span className="text-xl leading-none">{tech.icon}</span>
              </div>
              <div>
                <div className="font-semibold text-black dark:text-white">
                  {tech.name}
                </div>
                <div className="text-xs text-black/60 dark:text-white/60">
                  Technology
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-black/80 dark:text-white/80">
              {tech.description}
            </p>

            {/* Hover glow */}
            <span
              className="
                pointer-events-none absolute inset-0 rounded-[20px]
                opacity-0 hover:opacity-100 transition-opacity duration-300
                bg-[radial-gradient(140px_90px_at_80%_0%,theme(colors.accent/15),transparent_60%)]
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =============== Looping Row (Marquee) =============== */
type Direction = "left" | "right";

function LoopingRow({
  items,
  speed = 24, // seconds per loop
  direction = "left",
  className = "",
}: {
  items: { name: string; icon: string; description: string }[];
  speed?: number;
  direction?: Direction;
  className?: string;
}) {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();

  const startTween = () =>
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });

  useEffect(() => {
    if (reduceMotion) return;
    startTween();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, speed, reduceMotion]);

  const doubled = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Faded edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent" />

      <motion.div
        aria-label="Scrolling technologies"
        className="flex gap-6 whitespace-nowrap will-change-transform"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => !reduceMotion && startTween()}
      >
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} tech={tech} delay={i * 0.04} />
        ))}
      </motion.div>
    </div>
  );
}

/* =============== Section =============== */
export const TechStackSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Modern Tech Stack
        </h2>
        <p className="text-lg md:text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
          We use cutting-edge technologies and proven frameworks to build
          scalable, maintainable, and future-proof applications.
        </p>
      </motion.div>

      {/* Auto-scrolling rows */}
      <div className="space-y-10">
        {techCategories.map((cat, idx) => (
          <div key={cat.category} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                {cat.category}
              </h3>
              <span className="text-sm bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/80 px-3 py-1 rounded-full">
                {cat.technologies.length} tools
              </span>
            </div>

            <LoopingRow
              items={cat.technologies}
              direction={idx % 2 === 0 ? "left" : "right"}
              speed={24}
              className="h-[140px] "
            />
          </div>
        ))}
      </div>

      {/* CTA (kept glass style for consistency) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-16"
      >
        <div className="relative rounded-[22px] p-[2px] max-w-2xl mx-auto">
          <span
            className="
              absolute -inset-[2px] rounded-[24px] opacity-70 blur
              bg-[conic-gradient(var(--tw-gradient-stops))]
              from-accent via-white/30 to-secondary 
            "
            aria-hidden
          />
          <div
            className="
              relative rounded-[20px]
              bg-white/10 dark:bg-neutral-900/40
              backdrop-blur-xl
              border border-white/25 dark:border-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              p-8
            "
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Need a specific technology?
            </h3>
            <p className="text-black/80 dark:text-white/80 mb-6">
              Our team stays current with the latest technologies. If you have
              specific requirements, we&apos;re ready to adapt.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://wa.me/919693759948", "_blank")
              }
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
            >
              Discuss Your Tech Stack
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
