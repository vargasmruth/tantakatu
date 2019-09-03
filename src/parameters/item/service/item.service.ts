import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from '../entity/item.entity';
import { ItemResponse } from '../dto/itemResponse.dto';

@Injectable()
export class ItemService {
   constructor(
    @InjectRepository(Item)
    private readonly ItemRepository: Repository<Item>) { }

 async getAll(): Promise<Item[]> {
    return await this.ItemRepository.find();
  }

 async getById(id: number) {
    return await this.ItemRepository.findOne({ where: { id }});
  }

  async create(item: ItemResponse) {
     const pe = {
       code: 'IT-001',
       name: item.name,
       description: item.description,
       price: item.price,
       stock: item.stock,
       accountingId: item.accountingId,
       categoryId: item.categoryId,
       createdAt: new Date(),
       state: 1,
     };
     const p = this.ItemRepository.create(pe);
     await this.ItemRepository.save(p);
     return p;
  }

 async update(id: number, item: ItemResponse) {
     await this.ItemRepository.update({id}, item);
     return await this.ItemRepository.findOne({id});
  }

 async delete(id: number) {
     await this.ItemRepository.delete({id});
     return { deleted: true };
  }
}

