import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ProfileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    avatarId?: number;

    @Column({nullable: true, length: 320})
    bio?: string;
}