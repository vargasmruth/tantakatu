import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../entity/category.entity';
import { CategoryResponse } from '../dto/category-response.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>) { }

    async getAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async getById(id: number) {
        return await this.categoryRepository.findOne({ where: { id } });
    }

    async create(category: CategoryResponse) {
        const pe = {
            code: 'CAT-001',
            name: category.name,
            createdAt: new Date(),
            state: 1,
        };
        const p = this.categoryRepository.create(pe);
        await this.categoryRepository.save(p);
        return p;
    }

    async update(id: number, category: CategoryResponse) {
        await this.categoryRepository.update({ id }, category);
        return await this.categoryRepository.findOne({ id });
    }

    async delete(id: number) {
        await this.categoryRepository.delete({ id });
        return { deleted: true };
    }
}
