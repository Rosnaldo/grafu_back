import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common'
import { Response } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    let message = '';

    if(exception.code == 'P2002' && exception.meta.target == 'email') {
      message = 'Email já está em usado'
    }

    if (message == '') {
      message = exception.message
    }

    response.status(402).send({
      error: message,
    })
  }
}
