import { Injectable } from '@nestjs/common';
import { UpdateCityInput } from './types/cities.input';

import { City } from './cities.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private repository: Repository<City>,
  ) { }
  
  async save(city: City) {
    return this.repository.save(city);
  }

  async findAll(): Promise<City[]> {

    return this.repository.find({
      order: { name:'ASC'},
    });
    
  }

  async findOne(id: number): Promise<City> {
    return this.repository.findOne(id);
  }

  update(id: number, updateCountryInput: UpdateCityInput) {
    return `This action updates a #${id} city`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} city`;
  }


}
