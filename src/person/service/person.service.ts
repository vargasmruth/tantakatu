import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Person } from '../domain/person.entity';
import { PersonResponse } from '../domain/person-response.dto';

@Injectable()
export class PersonService {

   constructor(
      @InjectRepository(Person)
      private readonly personRepository: Repository<Person>) { }

   async getAll(): Promise<Person[]> {
      return await this.personRepository.find();
    }

    getById(id: number): string {
      return 'by Id';
    }

    async create(person: PersonResponse) {
       const pe = {
         code: 'P-001',
         fullName: person.fullname,
         identityCard: person.identityCard,
         nit: person.nit,
         email: person.email,
         mobile: person.mobile,
         address: person.address,
         createdAt: new Date(),
         state: 1,
       }
       const p = this.personRepository.create(pe);
       await this.personRepository.save(p);
       return p;
    }

    update(id: number, person: PersonResponse) {
       return 'update Person service';
    }

    delete(id: number) {
       return 'delete Person service';
    }
}
