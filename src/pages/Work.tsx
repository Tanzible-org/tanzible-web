import WorkHero from '@/components/work/WorkHero';
import CoreServicesSection from '@/components/work/CoreServicesSection';
import DynamicTechStack from '@/components/work/DynamicTechStack';
import TestimonialsSection from '@/components/work/TestimonialsSection';

const Work = () => {
  return (
    <div className="min-h-screen pt-20">
      <WorkHero />
      <CoreServicesSection />
      <DynamicTechStack />
      <TestimonialsSection />
    </div>
  );
};

export default Work;