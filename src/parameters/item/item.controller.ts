import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';

import { ItemResponse } from './dto/itemResponse.dto';
import { Item } from './entity/item.entity';
import { ItemService } from './service/item.service';

@ApiUseTags('items')
@Controller('items')
export class ItemController {
    
  constructor(private itemService: ItemService) {}

  @Get()
  getAll(): Promise<Item[]> {
    return this.itemService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Item> {
    return this.itemService.getById(id);
  }

  @Post()
  create(@Body() item: ItemResponse): Promise<Item> {
    return this.itemService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: ItemResponse): Promise<Item> {
    return this.itemService.update(id, item );
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.itemService.delete(id);
  }

}

