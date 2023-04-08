import { registerAs } from '@nestjs/config';
import ev from 'env-var';

export const mongoConfig = registerAs(
  'mongo',
  () => ({
    uri: ev.get('MONGO_URI').asUrlString(),
    username: ev.get('MONGO_USER').asString(),
    pass: ev.get('MONGO_PASSWORD').asString(),
  }),
);