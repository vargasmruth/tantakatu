import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { SellerModule } from './seller/seller.module';
import { BuyerModule } from './buyer/buyer.module';
import { CategoryModule } from './category/category.module';
import { AccountingPlanModule } from './accounting-plan/accounting-plan.module';
import { ItemModule } from './item/item.module';
import { SaleModule } from './sale/sale.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonModule,
    SellerModule,
    BuyerModule,
    CategoryModule,
    AccountingPlanModule,
    ItemModule,
    SaleModule,
   ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
