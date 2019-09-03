import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    code: string;

    @Column({ length: 60 })
    fullname: string;

    @Column({ length: 10 })
    identityCard: string;

    @Column({ length: 12 })
    nit: string;

    @Column({ length: 60 })
    email: string;

    @Column({ length: 10 })
    mobile: string;

    @Column({ length: 255 })
    address: string;

    @Column('date')
    createdAt: Date;

    @Column()
    state: number;
}
