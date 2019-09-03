import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';

import { PersonResponse } from './dto/person-response.dto';
import { Person } from './entity/person.entity';
import { PersonService } from './service/person.service';

@ApiUseTags('persons')
@Controller('persons')
export class PersonController {

  constructor(private personService: PersonService) {}

  @Get()
  getAll(): Promise<Person[]> {
    return this.personService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Person> {
    return this.personService.getById(id);
  }

  @Post()
  create(@Body() person: PersonResponse): Promise<Person> {
    return this.personService.create(person);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() person: PersonResponse): Promise<Person> {
    return this.personService.update(id, person );
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.personService.delete(id);
  }

}
