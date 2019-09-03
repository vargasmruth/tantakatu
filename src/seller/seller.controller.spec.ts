import { Test, TestingModule } from '@nestjs/testing';
import { SellerController } from './seller.controller';

describe('Seller Controller', () => {
  let controller: SellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerController],
    }).compile();

    controller = module.get<SellerController>(SellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
