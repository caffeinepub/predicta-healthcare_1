import Section from '../components/Section';
import ContactDetails from '../components/ContactDetails';

export default function ContactPage() {
  return (
    <Section id="contact" className="bg-muted/30 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your healthcare facility? Contact us today for a consultation.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <ContactDetails variant="detailed" />
      </div>
    </Section>
  );
}
