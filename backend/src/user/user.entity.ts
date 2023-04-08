import {
    Column, CreateDateColumn,
    Entity, JoinColumn, OneToOne,
    PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import {UserRole, UserStatus, UserType} from "./types";
import {ProfileEntity} from "./profile/profile.entity";
import {SettingsEntity} from "./settings/settings.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({length: 100})
    name: string;

    @Column({nullable: true, length: 100})
    patronymic?: string;

    @Column({length: 100})
    surname: string;

    @Column({enum: UserRole})
    role: UserRole;

    @Column({enum: UserType})
    type: UserType;

    @Column()
    password: string;

    @Column({enum: UserStatus})
    status: UserStatus

    @OneToOne(() => ProfileEntity)
    @JoinColumn()
    profile: ProfileEntity;

    @OneToOne(() => SettingsEntity)
    @JoinColumn()
    settings: SettingsEntity;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updatedAt: Date;
}