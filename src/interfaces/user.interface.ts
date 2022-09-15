export enum UserType {
  DONATOR = 'DONATOR',
  CENTER = 'CENTER',
}

export interface User {
  name: string
  email: string
  hashedPassword: string
  rol: UserType
  phone: string
  onboardingStepPosition: number
}
