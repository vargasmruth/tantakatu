import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';

import { SaleResponse } from './dto/sale-response.dto';
import { Sale } from './entity/sale.entity';
import { SaleService } from './service/sale.service';

@ApiUseTags('sales')
@Controller('sales')
export class SaleController {
    constructor(private saleService: SaleService) { }

    @Get()
    getAll(): Promise<Sale[]> {
        return this.saleService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number): Promise<Sale> {
        return this.saleService.getById(id);
    }

    @Post()
    create(@Body() sale: SaleResponse): Promise<number> {
        return this.saleService.create(sale);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() sale: SaleResponse): Promise<Sale> {
        return this.saleService.update(id, sale);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<any> {
        return this.saleService.delete(id);
    }

}
