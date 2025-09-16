import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Palette, Wrench, ArrowRight, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks, optimized for performance and scalability.',
    features: ['React/Next.js Development', 'Node.js/Python Backend', 'Cloud Infrastructure', 'API Development'],
    benefits: ['Fast Loading', 'SEO Optimized', 'Responsive Design', 'Security First'],
    href: '/services/web-development',
    timeline: '4-12 weeks',
    teamSize: '2-4 developers',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['React Native/Flutter', 'iOS/Android Native', 'App Store Optimization', 'Push Notifications'],
    benefits: ['Cross-platform', 'Native Performance', 'Offline Support', 'App Store Ready'],
    href: '/services/mobile-apps',
    timeline: '6-16 weeks',
    teamSize: '2-3 developers',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers with beautiful, intuitive interfaces.',
    features: ['Design Systems', 'User Research', 'Prototyping', 'Brand Identity'],
    benefits: ['Higher Conversion', 'Better UX', 'Brand Consistency', 'User-Centered'],
    href: '/services/ui-ux',
    timeline: '2-8 weeks',
    teamSize: '1-2 designers',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your applications running smoothly and securely.',
    features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Technical Support'],
    benefits: ['99.9% Uptime', 'Security Updates', 'Performance Boost', '24/7 Support'],
    href: '/services/maintenance',
    timeline: 'Ongoing',
    teamSize: 'Dedicated team',
    color: 'from-green-500 to-emerald-500'
  }
];

const handleWhatsApp = () => {
  window.open('https://wa.me/919693759948', '_blank');
};

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Comprehensive digital solutions from concept to launch. 
              We help businesses build, scale, and maintain world-class applications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-white/90">
                <Clock className="w-4 h-4 text-accent" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-white/90">
                <Users className="w-4 h-4 text-accent" />
                Expert Team
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-white/90">
                <Zap className="w-4 h-4 text-accent" />
                Modern Tech
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="h-full bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3" />
                        {service.timeline}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {service.teamSize}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-card-foreground mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={service.href} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full group-hover:border-accent group-hover:text-accent transition-colors duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </Link>
                      
                      <Button
                        onClick={handleWhatsApp}
                        className="bg-accent hover:bg-accent/90 text-white group-hover:scale-105 transition-transform duration-300"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a custom solution?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We adapt our services to your unique requirements. 
              Let's discuss your project and create a tailored solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsApp}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Book Free Consultation
              </Button>
              
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold"
                >
                  Get Detailed Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;