// import * as path from 'path';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
// import {MongooseModule} from '@nestjs/mongoose';
// import {ServeStaticModule} from '@nestjs/serve-static';
import {TypeOrmModule} from '@nestjs/typeorm';
import {fileConfig} from './config/file.config';
import {mongoConfig} from './config/mongo.config';
import {postgresConfig} from './config/postgres.config';
import {UserModule} from './user/user.module';
import {FileModule} from "./shared/file/file.module";
import {ObjectModule} from "./object/object.module";
import { FiasModule } from './fias/fias.module';
import {MailerModule} from "@nestjs-modules/mailer";
// import {PugAdapter} from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import {mailerConfig} from "./config/mailer.config";
import { AuthModule } from './auth/auth.module';
import {jwtConfig} from "./config/jwt.config";
import { GroupModule } from './group/group.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [postgresConfig, mongoConfig, fileConfig, mailerConfig, jwtConfig],
            isGlobal: true,
            ignoreEnvFile: process.env['NODE_ENV'] === 'production',
        }),
        // ServeStaticModule.forRoot({
        //     rootPath: path.join(__dirname, '..', 'client'),
        // }),
        MailerModule.forRoot({
            ...mailerConfig(),
            defaults: {
                from: '"nest-modules" <modules@nestjs.com>',
            },
            // template: {
            //     dir: __dirname + '/templates',
            //     adapter: new PugAdapter(),
            //     options: {
            //         strict: true,
            //     },
            // },
        }),
        // @ts-ignore
        TypeOrmModule.forRoot(postgresConfig()),
        // @ts-ignore
        // MongooseModule.forRoot(mongoConfig().uri, mongoConfig()),
        FileModule,
        UserModule,
        ObjectModule,
        FiasModule,
        AuthModule,
        GroupModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
