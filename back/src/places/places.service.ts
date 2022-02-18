import { Injectable } from '@nestjs/common';
import { UpdatePlaceInput } from './types/places.input';

import { Place } from './places.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlaceService {

  constructor(
    @InjectRepository(Place)
    private repository: Repository<Place>,
  ) { }
  
  async save(place: Place) {
    return this.repository.save(place);
  }

  async findAll(): Promise<Place[]> {

    return this.repository.find({
      order: { available: 'ASC', currentUser:'ASC'},
    });
  }

  async findOne(id: number): Promise<Place> {
    return this.repository.findOne(id);
  }

  update(id: number, updatePlaceInput: UpdatePlaceInput) {
    return `This action updates a #${id} place`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} place`;
  }


}
