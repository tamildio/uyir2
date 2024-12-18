export const appointments = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Cameron Williamson",
    time: "12:00 PM",
    condition: "",
    isFirstVisit: true
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Bessie Cooper",
    time: "2:45 PM",
    condition: "Hypothyroidism"
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Arlene McCoy",
    time: "4:00 PM",
    condition: "Chronic Pancreatitis"
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    name: "Marvin McKinney",
    time: "5:00 PM",
    condition: "Cushing's Syndrome"
  }
];

export const labResults = [
  {
    patientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    patientName: "Brooklyn Simmons",
    age: 42,
    diagnosis: "Hypothyroidism",
    results: [
      { name: "Thyroid-Stimulating Hormone (TSH)", value: 9.5, unit: "mIU/L" },
      { name: "Free T4 (Thyroxine)", value: 0.6, unit: "ng/dL" },
      { name: "Free T3 (Triiodothyronine)", value: 2.3, unit: "pg/mL" },
      { name: "Thyroid Peroxidase Antibodies", value: 250, unit: "IU/mL" }
    ]
  },
  {
    patientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    patientName: "Darlene Robertson",
    age: 38,
    diagnosis: "Diabetes",
    results: [
      { name: "Random Blood Glucose Test", value: 208, unit: "mg/dL" },
      { name: "HbA1c (Glycated Hemoglobin)", value: 6.9, unit: "%" }
    ]
  }
];