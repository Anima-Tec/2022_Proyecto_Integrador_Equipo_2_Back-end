export type UnitMeasurementType = 'KG' | 'BAG' | 'G' | 'ML' | 'L'

export interface Food {
  name: string
  category: string
  amount: number
  unitMeasurement: UnitMeasurementType
  // center: Center;
}
