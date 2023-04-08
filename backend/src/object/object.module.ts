import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ObjectEntity} from "./object.entity";
import {ObjectService} from "./object.service";

@Module({
    imports: [TypeOrmModule.forFeature([ObjectEntity])],
    providers: [ObjectService],
    exports: [ObjectService]
})
export class ObjectModule {}
