import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ObjectCondition} from "./types";

@Entity()
export class ObjectEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({type: "uuid"})
    address: string;

    @Column()
    type: string;

    @Column({enum: ObjectCondition})
    condition: ObjectCondition;

    @Column()
    area: number;

    @Column()
    owner: string;

    @Column()
    actualUser: string;

    @Column("int", {array: true})
    mediaFileIds: number[];

    @Column("int", {array: true})
    documentIds: number[];

    @Column("json", {nullable: true})
    other?: string;
}