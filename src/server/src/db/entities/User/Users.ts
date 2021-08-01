import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: number;
    @Column({
        length: 100
    }) name: string;
    @Column({
        length: 50
    }) email: string
    @Column({
        length: 100
    }) password: string;
}