import { Module } from '@nestjs/common';
import { CountryService } from './countries.service';
import {CountryResolver } from './countries.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './countries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountryResolver, CountryService],
})
  
export class CountryModule {}
