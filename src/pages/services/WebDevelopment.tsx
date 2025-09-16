import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Search,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: Code,
    title: 'Custom Web Applications',
    description: 'Tailored solutions built from scratch to meet your specific business requirements.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications with optimized code and efficient database queries.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Robust security measures to protect your data and user information.',
  },
  {
    icon: Globe,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, handling increased traffic and data.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Perfect user experience across all devices and screen sizes.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built with search engine optimization best practices from the ground up.',
  },
];

const technologies = [
  { name: 'React', description: 'Modern UI library for interactive interfaces' },
  { name: 'Next.js', description: 'Full-stack React framework with SSR' },
  { name: 'TypeScript', description: 'Type-safe JavaScript for reliable code' },
  { name: 'Node.js', description: 'JavaScript runtime for backend services' },
  { name: 'Python', description: 'Versatile language for complex applications' },
  { name: 'PostgreSQL', description: 'Robust relational database' },
  { name: 'MongoDB', description: 'Flexible NoSQL database' },
  { name: 'AWS/GCP', description: 'Cloud infrastructure and services' },
];

const processSteps = [
  {
    title: 'Discovery & Planning',
    description: 'Understanding your requirements, target audience, and business goals.',
    timeline: '1-2 weeks'
  },
  {
    title: 'Design & Architecture',
    description: 'Creating wireframes, UI designs, and technical architecture.',
    timeline: '2-3 weeks'
  },
  {
    title: 'Development',
    description: 'Building your application with regular updates and feedback.',
    timeline: '4-8 weeks'
  },
  {
    title: 'Testing & Launch',
    description: 'Comprehensive testing and smooth deployment to production.',
    timeline: '1-2 weeks'
  },
];

const packages = [
  {
    name: 'Starter Web App',
    price: 'From $5,000',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive design',
      'Up to 5 pages',
      'Contact forms',
      'Basic SEO',
      '3 months support'
    ],
    recommended: false
  },
  {
    name: 'Professional Web App',
    price: 'From $15,000',
    description: 'Ideal for growing businesses',
    features: [
      'Custom development',
      'User authentication',
      'Database integration',
      'Admin panel',
      'API development',
      '6 months support'
    ],
    recommended: true
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom Quote',
    description: 'For complex, large-scale applications',
    features: [
      'Scalable architecture',
      'Advanced integrations',
      'Custom features',
      'Security audit',
      'Dedicated team',
      '12 months support'
    ],
    recommended: false
  },
];

const handleWhatsApp = () => {
  window.open('https://wa.me/919693759948', '_blank');
};

const WebDevelopment = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">Web Development</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Custom Web Applications
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Build robust, scalable web applications that grow with your business. 
                From simple websites to complex enterprise solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleWhatsApp}
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </Button>
                
                <Link to="/work">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  4-12 weeks delivery
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  2-4 developers
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-accent" />
                  100% custom
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Modern Technologies</h3>
                      <p className="text-white/70 text-sm">React, Next.js, TypeScript</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">High Performance</h3>
                      <p className="text-white/70 text-sm">Optimized for speed and SEO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Secure & Scalable</h3>
                      <p className="text-white/70 text-sm">Enterprise-grade security</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Capabilities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive web development services covering every aspect of your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Modern, proven technologies that ensure your application is built for the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card rounded-xl p-6 text-center group"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                  {tech.name}
                </h3>
                <p className="text-sm text-white/70">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A proven methodology that ensures quality delivery and transparent communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent to-secondary opacity-30" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-white/70 mb-4">
                  {step.description}
                </p>
                
                <span className="text-sm text-accent font-medium">
                  {step.timeline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment Packages
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transparent pricing for different project scales and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative glass-card rounded-xl p-8 ${
                  pkg.recommended ? 'ring-2 ring-accent' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-accent mb-2">{pkg.price}</div>
                  <p className="text-white/70">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleWhatsApp}
                  className={`w-full ${
                    pkg.recommended
                      ? 'bg-accent hover:bg-accent/90'
                      : 'bg-primary hover:bg-primary/90'
                  } text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss your project requirements and create a solution that drives your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsApp}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Project Today
              </Button>
              
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold"
                >
                  Request Detailed Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;