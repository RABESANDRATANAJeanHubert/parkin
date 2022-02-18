import { Module } from '@nestjs/common';
import { PlaceService } from './places.service';
import {PlaceResolver } from './places.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './places.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlaceResolver, PlaceService],
})
  
export class PlaceModule {}
