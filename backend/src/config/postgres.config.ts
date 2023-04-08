import { registerAs } from '@nestjs/config';
import * as ev from 'env-var';

export const postgresConfig = registerAs(
  'postgres',
  () => ({
    type: 'postgres',
    host: ev.get('POSTGRES_HOST').asUrlString(),
    port: ev.get('POSTGRES_PORT').asPortNumber(),
    username: ev.get('POSTGRES_USER').asString(),
    password: ev.get('POSTGRES_PASSWORD').asString(),
    database: ev.get('POSTGRES_DB').asString(),
    synchronize: true,
  }),
);