import Section from '../components/Section';
import { Building2, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <Section id="about" className="pt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          About Predicta Healthcare
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Your trusted partner in healthcare infrastructure and medical equipment solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Complete Solutions</h3>
          <p className="text-muted-foreground">
            End-to-end setup services for ICU, OT, and hospital infrastructure with expert guidance and support.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
          <p className="text-muted-foreground">
            Premium medical equipment and furniture that meets international healthcare standards and certifications.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
          <p className="text-muted-foreground">
            Experienced professionals dedicated to delivering healthcare solutions tailored to your facility's needs.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-base text-muted-foreground leading-relaxed">
          At Predicta Healthcare, we specialize in providing comprehensive healthcare infrastructure solutions. 
          From state-of-the-art ICU and OT setups to ergonomic hospital furniture, we ensure your medical 
          facility is equipped with the best tools to deliver exceptional patient care. Our commitment to 
          quality, reliability, and innovation makes us the preferred choice for healthcare institutions 
          across the region.
        </p>
      </div>
    </Section>
  );
}
