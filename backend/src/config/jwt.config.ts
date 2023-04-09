import { registerAs } from '@nestjs/config';
import ev from 'env-var';

export const jwtConfig = registerAs(
    'jwt',
    () => ({
        secret: ev.get("JWT_SECRET").asString(),
    }),
);