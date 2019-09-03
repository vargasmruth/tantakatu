import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    code: string;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 60 })
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    accountingId: number;

    @Column()
    categoryId: number;

    @Column('date')
    createdAt: Date;

    @Column()
    state: number;
}
