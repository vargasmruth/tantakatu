import { Module } from '@nestjs/common';

import { PersonController } from './person.controller';
import { PersonService } from './service/person.service';

@Module({
    controllers: [ PersonController ],
    providers: [ PersonService ]
})
export class PersonModule {}
