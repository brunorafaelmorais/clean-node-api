import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
import { ICreateUserDTO } from './ICreateUserDTO'

interface CreateUserRequest<T> extends Request {
  body: T
}

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(
    request: CreateUserRequest<ICreateUserDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const { email, name, password } = request.body

      await this.createUserUseCase.execute({ email, name, password })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
