import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PersonI } from '../interface/person.interface';
import { PersonE } from '../domain/person.entity';

@Injectable()
export class PersonService {

   constructor(
      @InjectRepository(PersonE)
      private readonly personRepository: Repository<PersonE>) { }

   async getAll(): Promise<PersonE[]> {
      return await this.personRepository.find();
    }

    getById(id: number) {
       return 'byId Person service';
    }

    create(person: PersonI) {
       return 'create Person service';
    }

    update(id: number, person: PersonI) {
       return 'update Person service';
    }

    delete(id: number) {
       return 'delete Person service';
    }
}
