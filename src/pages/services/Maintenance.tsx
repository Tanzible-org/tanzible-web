import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wrench, Shield, Zap, Clock } from 'lucide-react';

const handleWhatsApp = () => {
  window.open('https://wa.me/919693759948', '_blank');
};

const Maintenance = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Wrench className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Maintenance & Support
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Ongoing support and maintenance to keep your applications running smoothly and securely.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Support Plan
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;