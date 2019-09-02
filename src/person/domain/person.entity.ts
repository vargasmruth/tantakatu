import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonE {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    code: string;

    @Column({ length: 60 })
    fullName: string;

    @Column({ length: 10 })
    identity_card: string;

    @Column({ length: 12 })
    nit: string;

    @Column({ length: 60 })
    email: string;

    @Column({ length: 10 })
    mobile: string;

    @Column({ length: 255 })
    address: string;

    @Column('date')
    created_at: Date;

    @Column()
    state: number;
}
