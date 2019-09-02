import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

import { Person } from './person.dto';
import { PersonService } from './service/person.service';

@ApiUseTags('persons')
@Controller('persons')
export class PersonController {

  constructor(private personService: PersonService) {}

  @Get()
  getAll(): string {
    return this.personService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): string {
    return this.personService.getById(id);
  }

  @Post()
  create(@Body() person: Person): string {
    return this.personService.create(person);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() person: Person): string {
    return this.personService.update(id, person);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.personService.delete(id);
  }

}
