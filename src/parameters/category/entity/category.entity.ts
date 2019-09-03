import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    code: string;

    @Column({ length: 30 })
    name: string;

    @Column('date')
    createdAt: Date;

    @Column()
    state: number;
}
