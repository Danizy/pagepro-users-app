import { IAddress } from './address'
import { ICompany } from './company'

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website: string
  company: ICompany
}

export class User implements IUser {
  id: number
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website: string
  company: ICompany

  constructor(obj: IUser = {} as User) {
    this.id = obj.id
    this.name = obj.name
    this.username = obj.username
    this.email = obj.email
    this.address = obj.address
    this.phone = obj.phone
    this.website = obj.website
    this.company = obj.company
  }
}
