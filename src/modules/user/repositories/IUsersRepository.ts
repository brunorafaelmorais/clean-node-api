import { User } from '../models/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>
  save(user: User): Promise<void>
}
