import { Test, TestingModule } from '@nestjs/testing';
import { SaleDetailController } from './sale-detail.controller';

describe('SaleDetail Controller', () => {
  let controller: SaleDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleDetailController],
    }).compile();

    controller = module.get<SaleDetailController>(SaleDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
