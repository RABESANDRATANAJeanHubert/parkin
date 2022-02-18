import { Injectable } from '@nestjs/common';
import { UpdateParkingInput } from './types/parking.input';

import { Parking } from './parking.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParkingService {

  constructor(
    @InjectRepository(Parking)
    private repository: Repository<Parking>,
  ) { }
  
  async save(parking: Parking) {
    return this.repository.save(parking);
  }

  async findAll(): Promise<Parking[]> {

    return this.repository.find({
      order: {adress: 'ASC', type:'ASC'},
    });
  }

  async findOne(id: number): Promise<Parking> {
    return this.repository.findOne(id);
  }

  update(id: number, updatePlaceInput: UpdateParkingInput) {
    return `This action updates a #${id} parking`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} parking`;
  }

}
