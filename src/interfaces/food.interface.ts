export type UnitMeasurementType = 'KG' | 'BAG' | 'G' | 'M' | 'L'
export interface Food {
  name: string
  category: string
  amount: number
  unitMeasurement: UnitMeasurementType
  // center: Center;
}
