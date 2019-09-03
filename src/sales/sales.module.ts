import { Module } from '@nestjs/common';

import { SellerModule } from './seller/seller.module';
import { BuyerModule } from './buyer/buyer.module';
import { SaleModule } from './sale/sale.module';
import { SaleDetailModule } from './sale-detail/sale-detail.module';

@Module({
    imports: [
        SellerModule,
        BuyerModule,
        SaleModule,
        SaleDetailModule,
       ],
})
export class SalesModule {}
