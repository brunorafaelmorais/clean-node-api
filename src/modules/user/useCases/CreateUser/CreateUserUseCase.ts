import { User } from '../../models/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserDTO } from './ICreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        address: data.email
      },
      from: {
        name: 'Equipe do meu App',
        address: 'equipe@meuapp.com'
      },
      subject: 'Seja bem vindo',
      html: '<p>Corpo do email aqui</p>'
    })
  }
}
