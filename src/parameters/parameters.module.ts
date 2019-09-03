import { Module } from '@nestjs/common';

import { AccountingPlanModule } from './accounting-plan/accounting-plan.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';

@Module({
    imports: [
        CategoryModule,
        AccountingPlanModule,
        ItemModule,
       ],
})
export class ParametersModule {}
