import { useState } from 'react';
import type { Category } from '../content/categories';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Optional Photo */}
      {category.photo && !photoError && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={category.photo}
            alt={category.photoAlt || category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setPhotoError(true)}
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-24 h-24 mb-6 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden group-hover:bg-primary/20 transition-colors">
            {!imageError ? (
              <img
                src={category.icon}
                alt={category.title}
                className="w-16 h-16 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center text-primary text-3xl font-bold">
                {category.title.charAt(0)}
              </div>
            )}
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {category.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
}
