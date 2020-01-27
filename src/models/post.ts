export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export class Post implements IPost {
  userId: number
  id: number
  title: string
  body: string

  constructor(obj: IPost = {} as Post) {
    this.userId = obj.userId
    this.id = obj.id
    this.title = obj.title
    this.body = obj.body
  }
}
