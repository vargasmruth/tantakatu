import { Module } from '@nestjs/common';
import { AccountingPlanController } from './accounting-plan.controller';

@Module({
  controllers: [AccountingPlanController]
})
export class AccountingPlanModule {}
