import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Zap, Shield, Users, Star } from "lucide-react";

const handleWhatsApp = () => {
  window.open("https://wa.me/919693759948", "_blank");
};

const MobileApps = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster="/assets/webdev-hero-poster.jpg"
          >
            {/* Use your file path in /public. Example below: */}
            <source src="/assets/app.mp4" type="video/mp4" />
          </video>

          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Smartphone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Native and cross-platform mobile applications that deliver
              exceptional user experiences across iOS and Android.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Your Mobile App
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
