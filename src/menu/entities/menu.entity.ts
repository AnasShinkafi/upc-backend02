import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({})
    title: string;

    @Column({})
    url: string;
}
