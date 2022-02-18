import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import {ParkingResolver } from './parking.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './parking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parking])],
  providers: [ParkingResolver, ParkingService],
})
  
export class ParkingModule {}
