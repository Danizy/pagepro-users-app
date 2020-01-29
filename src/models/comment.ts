export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export class Comment implements IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string

  constructor(obj: IComment = {} as Comment) {
    this.postId = obj.postId
    this.id = obj.id
    this.name = obj.name
    this.email = obj.email
    this.body = obj.body
  }
}
