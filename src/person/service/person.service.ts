import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Person } from '../entity/person.entity';
import { PersonResponse } from '../dto/person-response.dto';

@Injectable()
export class PersonService {

   constructor(
      @InjectRepository(Person)
      private readonly personRepository: Repository<Person>) { }

   async getAll(): Promise<Person[]> {
      return await this.personRepository.find();
    }

   async getById(id: number) {
      return await this.personRepository.findOne({ where: { id }});
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
       };
       const p = this.personRepository.create(pe);
       await this.personRepository.save(p);
       return p;
    }

   async update(id: number, person: PersonResponse) {
       await this.personRepository.update({id}, person);
       return await this.personRepository.findOne({id});
    }

   async delete(id: number) {
       await this.personRepository.delete({id});
       return { deleted: true };
    }
}
