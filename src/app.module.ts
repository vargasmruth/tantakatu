import { Module } from '@nestjs/common';

import { Connection } from 'typeorm';

import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonModule,
   ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
