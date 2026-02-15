export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  photo?: string;
  photoAlt?: string;
}

export const categories: Category[] = [
  {
    id: 'icu',
    title: 'ICU Setup',
    description: 'Complete intensive care unit solutions including patient monitoring systems, ventilators, infusion pumps, and critical care equipment for optimal patient outcomes.',
    icon: '/assets/generated/icon-icu.dim_256x256.png',
    photo: '/assets/generated/icu-setup-photo.dim_1200x1600.jpg',
    photoAlt: 'Modern ICU ward with patient beds, medical monitoring equipment, privacy curtains, and blue accent walls'
  },
  {
    id: 'ot',
    title: 'OT Setup',
    description: 'Comprehensive operation theatre equipment including surgical tables, lights, anesthesia machines, and sterilization systems for safe and efficient surgical procedures.',
    icon: '/assets/generated/icon-ot.dim_256x256.png',
    photo: '/assets/generated/ot-setup-photo.dim_1200x800.jpg',
    photoAlt: 'Modern operation theatre with surgical lights, OT table, medical equipment, and sterile environment'
  },
  {
    id: 'furniture',
    title: 'Hospital Furniture',
    description: 'Premium medical furniture including hospital beds, examination tables, medical carts, storage solutions, and patient room furnishings designed for comfort and functionality.',
    icon: '/assets/generated/icon-furniture.dim_256x256.png',
    photo: '/assets/generated/hospital-furniture-bedroom.dim_1200x800.jpg',
    photoAlt: 'Hospital bed in a clean patient room with side rails and bedside table'
  },
  {
    id: 'lab',
    title: 'Laboratory Setup',
    description: 'Advanced laboratory equipment and solutions including diagnostic instruments, analyzers, microscopes, centrifuges, and lab furniture for accurate testing and research.',
    icon: '/assets/generated/icon-lab.dim_256x256.png',
    photo: '/assets/generated/laboratory-setup-bench.dim_1200x800.jpg',
    photoAlt: 'Modern laboratory bench with instruments, shelves, and organized glassware'
  }
];
