import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { fileConfig } from './config/file.config';
import { mongoConfig } from './config/mongo.config';
import { postgresConfig } from './config/postgres.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [postgresConfig, mongoConfig, fileConfig],
      ignoreEnvFile: process.env['NODE_ENV'] === 'production',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'client'),
    }),
    // @ts-ignore
    TypeOrmModule.forRoot(postgresConfig()),
    // @ts-ignore
    MongooseModule.forRoot(mongoConfig().uri, mongoConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
