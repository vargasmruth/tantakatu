import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Seller } from '../entity/seller.entity';
import { SellerResponse } from '../dto/seller-response.dto';

@Injectable()
export class SellerService {

    constructor(
        @InjectRepository(Seller)
        private readonly sellerRepository: Repository<Seller>) { }

    async getAll(): Promise<Seller[]> {
        return await this.sellerRepository.find();
    }

    async getById(id: number) {
        return await this.sellerRepository.findOne({ where: { id } });
    }

    async create(seller: SellerResponse) {
        const se = {
            code: 'S-001',
            personId: seller.personId,
            createdAt: new Date(),
            state: 1,
        };
        const s = this.sellerRepository.create(se);
        await this.sellerRepository.save(s);
        return s;
    }

    async update(id: number, seller: SellerResponse) {
        await this.sellerRepository.update({ id }, seller);
        return await this.sellerRepository.findOne({ id });
    }

    async delete(id: number) {
        await this.sellerRepository.delete({ id });
        return { deleted: true };
    }
}
