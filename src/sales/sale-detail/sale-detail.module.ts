import { Module } from '@nestjs/common';
import { SaleDetailController } from './sale-detail.controller';

@Module({
  controllers: [SaleDetailController]
})
export class SaleDetailModule {}
