import { registerAs } from '@nestjs/config';
import ev from 'env-var';

export const mailerConfig = registerAs(
    'mailer',
    () => ({
        transport: `smtps://${ev.get('MAIL_USER').asString()}:${ev.get('MAIL_PASSWORD').asString()}@${ev.get('MAIL_HOST').asString()}:${ev.get('MAIL_PORT').asString()}`,
    }),
);