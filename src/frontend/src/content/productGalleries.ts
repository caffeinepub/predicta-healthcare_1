export interface GalleryImage {
  src: string;
  alt: string;
}

export const hospitalFurnitureGallery: GalleryImage[] = [
  {
    src: '/assets/generated/hospital-furniture-bedroom.dim_1200x800.jpg',
    alt: 'Hospital bed in a clean patient room with side rails and bedside table'
  },
  {
    src: '/assets/generated/hospital-furniture-exam-room.dim_1200x800.jpg',
    alt: 'Clinical examination room with an examination table and storage cabinets'
  },
  {
    src: '/assets/generated/hospital-furniture-medical-cart.dim_1200x800.jpg',
    alt: 'Medical trolley/cart and modular storage furniture in a hospital corridor setting'
  }
];

export const laboratorySetupGallery: GalleryImage[] = [
  {
    src: '/assets/generated/laboratory-setup-bench.dim_1200x800.jpg',
    alt: 'Modern laboratory bench with instruments, shelves, and organized glassware'
  },
  {
    src: '/assets/generated/laboratory-setup-analyzer.dim_1200x800.jpg',
    alt: 'Close-up of diagnostic lab analyzer equipment in a bright lab environment'
  }
];
