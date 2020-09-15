export interface IAddress {
  address: string
  name: string
}

export interface IMessage {
  to: IAddress
  from: IAddress
  subject: string
  html: string
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>
}
