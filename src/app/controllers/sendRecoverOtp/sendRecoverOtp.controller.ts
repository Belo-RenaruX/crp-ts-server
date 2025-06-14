import { FastifyReply, FastifyRequest } from 'fastify';

import { IResponseInteractor } from 'src/app/interactors/response/response.interactor';
import { ISendVerificationOTPInteractor } from 'src/app/interactors/sendVerificationOtp/sendVerificationOtp.interactor';

export interface ISendRecoverOTPController {
  handle(input: FastifyRequest, reply: FastifyReply): Promise<void>;
}

export class SendRecoverOTPController implements ISendRecoverOTPController {
  constructor(
    private readonly sendOTPInteractor: ISendVerificationOTPInteractor,
    private readonly responseInteractor: IResponseInteractor<void>,
  ) {}

  async handle(input: FastifyRequest, reply: FastifyReply): Promise<void> {
    const result = await this.sendOTPInteractor.send(input);
    const response = this.responseInteractor.execute(result);
    reply.code(response.statusCode).send(response.body);
  }
}
