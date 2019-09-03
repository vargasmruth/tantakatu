import { Test, TestingModule } from '@nestjs/testing';
import { AccountingPlanController } from './accounting-plan.controller';

describe('AccountingPlan Controller', () => {
  let controller: AccountingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountingPlanController],
    }).compile();

    controller = module.get<AccountingPlanController>(AccountingPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
