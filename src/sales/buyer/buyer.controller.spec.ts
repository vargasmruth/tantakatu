import { Test, TestingModule } from '@nestjs/testing';
import { BuyerController } from './buyer.controller';

describe('Buyer Controller', () => {
  let controller: BuyerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyerController],
    }).compile();

    controller = module.get<BuyerController>(BuyerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
