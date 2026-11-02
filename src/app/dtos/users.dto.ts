export interface IUserDto {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IUserHairDto;
  ip: string;
  address: IUserAddressDto;
  macAddress: string;
  university: string;
  bank: IUserBankDto;
  company: IUserCompanyDto;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: IUserCryptoDto;
  role: string;
}

export interface IUserHairDto {
  color: string;
  type: string;
}

export interface IUserAddressDto {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: IUserCoordinatesDto;
  country: string;
}

export interface IUserCoordinatesDto {
  lat: number;
  lng: number;
}

export interface IUserBankDto {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface IUserCompanyDto {
  department: string;
  name: string;
  title: string;
  address: IUserAddressDto;
}

export interface IUserCryptoDto {
  coin: string;
  wallet: string;
  network: string;
}

export interface IUsersResponseDto {
  users: IUserDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface ICreateUserDto {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate?: string;
  image?: string;
}

export interface IUpdateUserDto {
  firstName?: string;
  lastName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image?: string;
}
