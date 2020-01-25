import { IGeo, Geo } from './geo'

export interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo
}

export class Address implements IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo

  constructor(obj: IAddress = {} as Address) {
    this.street = obj.street
    this.suite = obj.suite
    this.city = obj.city
    this.zipcode = obj.zipcode
    this.geo = new Geo(obj.geo)
  }
}
