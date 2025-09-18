import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WorkHero = () => {
  
const handleWhatsApp = () => {
  window.open('https://wa.me/919693759948', '_blank');
};


  return (
    <section className="bg-[#B1A496] text-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-20 md:py-32 lg:py-40">
        <div className="text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          >
            Excellence in Every Line of Code
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200/95"
          >
            Explore a portfolio of projects that blend technical precision with
            creative problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center justify-center"
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/95 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-sm sm:text-base"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
