export interface ICURequirementGroup {
  title: string;
  items: string[];
}

export const icuSetupRequirements: ICURequirementGroup[] = [
  {
    title: 'Equipment',
    items: [
      'Patient monitoring systems with multi-parameter displays',
      'Ventilators and respiratory support equipment',
      'Infusion pumps and syringe pumps',
      'Defibrillators and emergency resuscitation equipment',
      'Suction machines and oxygen delivery systems',
      'ECG machines and cardiac monitors',
      'Pulse oximeters and capnography monitors',
      'Blood gas analyzers',
      'Portable X-ray machines',
      'Medical gas pipeline systems',
      'Emergency crash carts',
      'IV stands and medical poles'
    ]
  },
  {
    title: 'Furniture',
    items: [
      'ICU beds with electric controls and side rails',
      'Bedside tables and overbed tables',
      'Medical storage cabinets and trolleys',
      'Nurse workstations and charting desks',
      'Visitor chairs and patient recliners',
      'Medical equipment carts',
      'Medication storage units',
      'Linen storage cabinets',
      'Mobile computer workstations',
      'Privacy curtain tracks and curtains',
      'Waste disposal bins (medical and general)',
      'Hand sanitizer stands'
    ]
  },
  {
    title: 'Wall & Construction',
    items: [
      'Medical gas outlets (oxygen, vacuum, compressed air)',
      'Electrical outlets with backup power supply',
      'Nurse call systems and communication panels',
      'Antibacterial wall panels and washable surfaces',
      'Ceiling-mounted medical pendant systems',
      'LED surgical and examination lights',
      'HVAC systems with HEPA filtration',
      'Positive pressure ventilation systems',
      'Fire safety and sprinkler systems',
      'Observation windows with blinds',
      'Sliding doors for easy access',
      'Flooring with anti-static and anti-microbial properties',
      'Cable management systems',
      'Emergency lighting and exit signage'
    ]
  }
];
