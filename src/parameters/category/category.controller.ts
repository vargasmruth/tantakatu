import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';

import { CategoryResponse } from './dto/category-response.dto';
import { Category } from './entity/category.entity';
import { CategoryService } from './service/category.service';

@ApiUseTags('categories')
@Controller('category')
export class CategoryController {
    
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAll(): Promise<Category[]> {
    return this.categoryService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Category> {
    return this.categoryService.getById(id);
  }

  @Post()
  create(@Body() category: CategoryResponse): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() category: CategoryResponse): Promise<Category> {
    return this.categoryService.update(id, category );
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.categoryService.delete(id);
  }

}
