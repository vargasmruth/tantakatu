import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { type } from 'os';
import { SaleDetail } from './sale-detail.entity';

@Entity()
export class Sale {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 20 })
    public code: string;

    @Column('date')
    public date: Date;

    @Column()
    public exchangeRate: number;

    @Column()
    public currency: number;

    @Column()
    public withDiscount: number;

    @Column()
    public discount: number;

    @Column()
    public amount: number;

    @Column({ length: 30 })
    public paymentType: string;

    @Column({ length: 50 })
    public invoiceNumber: string;

    @Column()
    public sellerId: number;

    @Column()
    public buyerId: number;

    @Column('date')
    public createdAt: Date;

    @Column()
    public state: number;

    @OneToMany( type => SaleDetail, detail => detail.sale )
    public detail: SaleDetail[];

    constructor() {}


}
