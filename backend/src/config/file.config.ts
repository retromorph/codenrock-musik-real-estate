import { registerAs } from '@nestjs/config';
import * as ev from 'env-var';

export const fileConfig = registerAs(
  'file',
  () => ({
    path: ev.get('FILE_PATH').asString(),
  }),
);