export interface IGeo {
  lat: number
  lng: number
}

export class Geo implements IGeo {
  lat: number
  lng: number

  constructor(obj: IGeo = {} as Geo) {
    this.lat = obj.lat
    this.lng = obj.lng
  }
}
