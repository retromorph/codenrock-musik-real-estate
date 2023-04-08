import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {FileModule} from "../shared/file/file.module";
import {UserService} from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        FileModule,
    ],
    providers: [UserService],
})
export class UserModule {}
