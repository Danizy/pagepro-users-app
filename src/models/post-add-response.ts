export interface IPostAddResponse {
  id: number
}

export class PostAddResponse implements IPostAddResponse {
  id: number

  constructor(obj: IPostAddResponse = {} as PostAddResponse) {
    this.id = obj.id
  }
}
