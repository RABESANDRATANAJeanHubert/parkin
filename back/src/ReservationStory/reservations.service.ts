import { Injectable } from '@nestjs/common';
import { UpdateReservationInput } from './types/reservations.input';
import { Reservation } from './reservations.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservationService {

  constructor(
    @InjectRepository(Reservation)
    private repository: Repository<Reservation>,
  ) { }
  
  async save(place: Reservation) {
    return this.repository.save(place);
  }

  async findAll(): Promise<Reservation[]> {

    return this.repository.find({
      order: { reservedAt: 'ASC', arrivedAt:'ASC'},
    });
  }

  async findOne(id: number): Promise<Reservation> {
    return this.repository.findOne(id);
  }

  update(id: number, updateReservationInput: UpdateReservationInput) {
    return `This action updates a #${id} reservation`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }


}
