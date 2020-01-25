export interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}

export class Company implements ICompany {
  name: string
  catchPhrase: string
  bs: string

  constructor(obj: ICompany = {} as Company) {
    this.name = obj.name
    this.catchPhrase = obj.catchPhrase
    this.bs = obj.bs
  }
}
