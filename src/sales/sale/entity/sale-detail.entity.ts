import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sale } from './sale.entity';

@Entity()
export class SaleDetail {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public itemId: number;

    @ManyToOne( type => Sale, sale => sale.detail )
    public sale: Sale;

    @Column()
    public price: number;

    @Column()
    public quantity: number;

    @Column()
    public partialAmount: number;

    @Column({ length: 50 })
    public accountingNumber: string;

    @Column('date')
    public createdAt: Date;

    @Column()
    public state: number;

    constructor() {}
}
