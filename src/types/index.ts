export interface Appointment {
  image: string;
  name: string;
  time: string;
  condition: string;
  isFirstVisit?: boolean;
}

export interface LabTestResult {
  name: string;
  value: string | number;
  unit?: string;
}

export interface LabResult {
  patientImage: string;
  patientName: string;
  age: number;
  diagnosis: string;
  results: LabTestResult[];
}