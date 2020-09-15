import { v4 as uuidv4 } from 'uuid'

export class User {
  id?: string
  name: string
  email: string
  password: string

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(props, this)

    if (!id) {
      this.id = uuidv4()
    }
  }
}
