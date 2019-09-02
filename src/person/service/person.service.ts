import { Injectable } from '@nestjs/common';

import { PersonI } from '../interface/person.interface';

@Injectable()
export class PersonService {

    getAll() {
       return 'all Persons service';
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
