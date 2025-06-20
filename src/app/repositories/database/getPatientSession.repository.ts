import { SessionDTO } from 'src/app/entities/dtos/service/session.dto';
import { MysqlClient } from 'src/clients/mysql.client';

export interface IGetPatientSessionRepository {
  execute(jti: string): Promise<SessionDTO | undefined>;
}

export class GetPatientSessionRepository implements IGetPatientSessionRepository {
  async execute(jti: string): Promise<SessionDTO | undefined> {
    const db = MysqlClient.instance.getDb();
    const result = await db
      .selectFrom('Sessions')
      .select(['jti', 'expiresAt', 'otp', 'otpSendCount', 'isValidated'])
      .where('jti', '=', jti)
      .executeTakeFirst();
    return result;
  }
}

export class GetPatientSessionRepositoryMock implements IGetPatientSessionRepository {
  async execute(): Promise<SessionDTO | undefined> {
    return {
      jti: '1c8302e7-6368-4c04-8923-4dadbccfe53e',
      expiresAt: '2025-04-24 02:58:01',
      otp: null,
      otpSendCount: null,
      isValidated: false,
    };
  }
}
