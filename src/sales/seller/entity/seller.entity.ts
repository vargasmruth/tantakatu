import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seller {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    code: string;

    @Column()
    personId: number;

    @Column('date')
    createdAt: Date;

    @Column()
    state: number;
}
