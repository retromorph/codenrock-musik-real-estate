import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SettingsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: true})
    isEmailNotificationEnabled: boolean = true;
}