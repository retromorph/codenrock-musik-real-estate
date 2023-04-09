import * as path from 'path';
import {registerAs} from '@nestjs/config';
import ev from 'env-var';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const postgresConfig = registerAs(
    'postgres',
    () => ({
        type: 'postgres',
        host: ev.get('POSTGRES_HOST').asString(),
        port: ev.get('POSTGRES_PORT').asPortNumber(),
        username: ev.get('POSTGRES_USER').asString(),
        password: ev.get('POSTGRES_PASSWORD').asString(),
        database: ev.get('POSTGRES_DB').asString(),
        synchronize: true,
        entities: [__dirname + "/../**/*.entity.js"],
        keepConnectionAlive: true,
    }),
);