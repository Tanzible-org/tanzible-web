import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Tanzible took our product vision and turned it into a seamless, polished experience. They delivered fast, adapted quickly, and consistently refined based on real user insights. Working with them felt like having an extension of our own team.",
    name: "CK Sarswat",
    title: "CEO, Elite Hospitality Solutions",
  },
  {
    quote:
      "The Tanzible team combines deep technical expertise with a rare eye for detail. They don’t just execute, they anticipate challenges, offer solutions, and ensure long-term success. A dependable partner we trust for our most critical projects.",
    name: "Marco Rossi",
    title: "CTO, Retail Solutions",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-black/75">Real feedback from partners we've worked with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <blockquote className="italic text-lg text-black/80 mb-4">“{t.quote}”</blockquote>
              <div className="mt-4">
                <div className="font-semibold text-black">{t.name}</div>
                <div className="text-sm text-black/60">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
