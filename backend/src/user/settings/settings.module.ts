import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SettingsEntity} from "./settings.entity";

@Module({
    imports: [TypeOrmModule.forFeature([SettingsEntity])],
    providers: [],
    exports: []
})
export class SettingsModule {}