import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      secure: false,
      auth: {
        user: '7dbca06e776625',
        pass: 'aa46f6f0b436c5'
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail(message)
  }
}
