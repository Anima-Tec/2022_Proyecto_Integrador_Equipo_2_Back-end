// import { Center } from "./center.interface";

export enum UnitMeasurementType {
  KG = 'KG',
  BAG = 'BAG',
  G = 'G',
  ML = 'ML',
  L = 'L',
}

export interface Food {
  name: string
  category: string
  amount: number
  unitMeasurement: UnitMeasurementType
  // center: Center;
}
