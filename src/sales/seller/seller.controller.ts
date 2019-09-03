import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';

import { SellerResponse } from './dto/seller-response.dto';
import { Seller } from './entity/seller.entity';
import { SellerService } from './service/seller.service';

@ApiUseTags('sellers')
@Controller('sellers')
export class SellerController {

  constructor(private sellerService: SellerService) {}

  @Get()
  getAll(): Promise<Seller[]> {
    return this.sellerService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Seller> {
    return this.sellerService.getById(id);
  }

  @Post()
  create(@Body() seller: SellerResponse): Promise<Seller> {
    return this.sellerService.create(seller);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() seller: SellerResponse): Promise<Seller> {
    return this.sellerService.update(id, seller );
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.sellerService.delete(id);
  }

}
