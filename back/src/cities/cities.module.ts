import { Module } from '@nestjs/common';
import { CityService } from './cities.service';
import {CityResolver } from './cities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './cities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CityResolver, CityService],
})
  
export class CityModule {}
