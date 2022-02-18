import { Module } from '@nestjs/common';
import { ReservationService } from './reservations.service';
import {ReservationResolver } from './reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  providers: [ReservationResolver, ReservationService],
})
  
export class ReservationModule {}
