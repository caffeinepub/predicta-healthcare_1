import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { router } from '../lib/router';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const navigateToContact = () => {
    router.navigate('/contact');
  };

  return (
    <div className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src="/assets/generated/predicta-hero.dim_1600x700.png"
            alt="Healthcare facility"
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Complete Healthcare Infrastructure Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Specializing in ICU setup, OT equipment, and premium hospital furniture. 
            We provide end-to-end solutions to equip your medical facility with the best healthcare infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={navigateToContact}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:7016390948"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-background border-2 border-border rounded-lg hover:bg-muted transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
