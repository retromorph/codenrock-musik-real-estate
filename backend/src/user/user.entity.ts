import {
    Column,
    Entity, PrimaryGeneratedColumn,
} from 'typeorm';
import {UserRole, UserType} from "./types";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true,
    })
    patronymic: string | undefined;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    avatarId: number;

    @Column({enum: UserRole})
    role: UserRole;

    @Column({enum: UserType})
    type: UserType;

    @Column()
    password: string;
}