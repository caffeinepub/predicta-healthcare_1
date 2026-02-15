import { useState } from 'react';
import type { GalleryImage } from '../content/productGalleries';

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        !imageErrors[index] && (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() => handleImageError(index)}
              />
            </div>
          </div>
        )
      ))}
    </div>
  );
}
