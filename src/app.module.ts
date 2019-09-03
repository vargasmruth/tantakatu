import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrationModule } from './administration/administration.module';
import { ParametersModule } from './parameters/parameters.module';
import { SalesModule } from './sales/sales.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdministrationModule,
    ParametersModule,
    SalesModule,
   ],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
