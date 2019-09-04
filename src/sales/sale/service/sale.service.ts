import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';

import { Sale } from '../entity/sale.entity';
import { SaleResponse } from '../dto/sale-response.dto';
import { SaleDetail } from '../entity/sale-detail.entity';

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(Sale)
        private readonly saleRepository: Repository<Sale>) { }

    async getAll(): Promise<Sale[]> {
        return await this.saleRepository.find();
    }

    async getById(id: number) {
        return await this.saleRepository.findOne({ where: { id } });
    }

    async create(sale: SaleResponse) {
        const currentSale: Sale = new Sale();

        currentSale.code = 'SA-001';
        currentSale.date = sale.date;
        currentSale.exchangeRate = sale.exchangeRate;
        currentSale.currency = sale.currency;
        currentSale.withDiscount = sale.withDiscount;
        currentSale.discount = sale.discount;
        currentSale.amount = sale.amount;
        currentSale.paymentType = sale.paymentType;
        currentSale.invoiceNumber = sale.invoiceNumber;
        currentSale.sellerId = sale.sellerId;
        currentSale.buyerId = sale.buyerId;
        currentSale.createdAt = new Date();
        currentSale.state = 1;

        sale.detail.forEach(e => {
            const currentDetail: SaleDetail = new SaleDetail();

            currentDetail.sale = currentSale;
            currentDetail.itemId = e.itemId;
            currentDetail.price = e.price;
            currentDetail.quantity = e.quantity;
            currentDetail.partialAmount = e.partialAmount;
            currentDetail.accountingNumber = e.accountingNumber;
            currentDetail.createdAt = new Date();
            currentDetail.state = 1;

            currentSale.detail.push(currentDetail);
        });

        const header = this.saleRepository.create(currentSale);
        await this.saleRepository.save(header);

        return sale.id;

    }

    async createDetail(currentDetail: any) {
        /* const detail = this.saleDetailRepository.create(currentDetail);
        await this.saleDetailRepository.save(detail); */
    }

    async update(id: number, sale: SaleResponse) {
        await this.saleRepository.update({ id }, sale);
        return await this.saleRepository.findOne({ id });
    }

    async delete(id: number) {
        await this.saleRepository.delete({ id });
        return { deleted: true };
    }
}
