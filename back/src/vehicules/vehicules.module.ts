import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicules.service';
import {VehiculeResolver } from './vehicules.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicule } from './vehicules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicule])],
  providers: [VehiculeResolver, VehiculeService],
})
  
export class VehiculeModule {}
