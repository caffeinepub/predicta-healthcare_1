import Section from '../components/Section';
import CategoryCard from '../components/CategoryCard';
import ImageGallery from '../components/ImageGallery';
import { categories } from '../content/categories';
import { icuSetupRequirements } from '../content/icuSetup';
import { otSetupRequirements } from '../content/otSetup';
import { hospitalFurnitureGallery, laboratorySetupGallery } from '../content/productGalleries';

export default function ProductsPage() {
  return (
    <>
      <Section id="products" className="bg-muted/30 pt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions for modern medical facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      {/* ICU Setup Details Section */}
      <Section id="icu-details" className="bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ICU Setup Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete checklist for establishing a modern intensive care unit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {icuSetupRequirements.map((group) => (
              <div key={group.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 pb-3 border-b border-border">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* OT Setup Details Section */}
      <Section id="ot-details" className="bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              OT Setup Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential components for a fully equipped operation theatre
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-6 pb-3 border-b border-border">
              We Provide
            </h3>
            <ul className="space-y-3">
              {otSetupRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-base text-muted-foreground">
                  <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                  <span>{requirement.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Hospital Furniture Gallery Section */}
      <Section id="furniture-gallery" className="bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hospital Furniture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality medical furniture designed for patient comfort and clinical efficiency
            </p>
          </div>

          <ImageGallery images={hospitalFurnitureGallery} />
        </div>
      </Section>

      {/* Laboratory Setup Gallery Section */}
      <Section id="lab-gallery" className="bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Laboratory Setup
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced laboratory equipment and infrastructure for precise diagnostics
            </p>
          </div>

          <ImageGallery images={laboratorySetupGallery} />
        </div>
      </Section>
    </>
  );
}
