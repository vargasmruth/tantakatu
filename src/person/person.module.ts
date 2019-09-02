import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonController } from './person.controller';
import { PersonService } from './service/person.service';
import { Person } from './domain/person.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [ PersonController ],
    providers: [ PersonService ],
})
export class PersonModule {}
